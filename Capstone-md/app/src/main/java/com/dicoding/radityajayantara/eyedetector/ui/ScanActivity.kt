package com.dicoding.radityajayantara.eyedetector.ui

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.media.ThumbnailUtils
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import com.dicoding.radityajayantara.eyedetector.databinding.ActivityScanBinding
import com.dicoding.radityajayantara.eyedetector.ml.Model
import org.tensorflow.lite.DataType
import org.tensorflow.lite.support.tensorbuffer.TensorBuffer
import java.io.IOException
import java.nio.ByteBuffer
import java.nio.ByteOrder

class ScanActivity : AppCompatActivity() {
    private lateinit var binding: ActivityScanBinding
    private var imageSize = 224

    companion object{
        private val REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)
    }

    private fun allPermissionsGranted() = REQUIRED_PERMISSIONS.all {
        ContextCompat.checkSelfPermission(baseContext, it) == PackageManager.PERMISSION_GRANTED
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityScanBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.apply {
            button.setOnClickListener {
                if (if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
                        allPermissionsGranted()
                    }else{
                        TODO("VERSION.SDK_INT < M")
                    }){
                    val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
                    startActivityForResult(cameraIntent, 1)
                } else {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
                        requestPermissions(arrayOf(Manifest.permission.CAMERA), 100)
                        val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
                        startActivityForResult(cameraIntent, 1)
                    }
                }
            }
            gallery.setOnClickListener(object : View.OnClickListener {
                override fun onClick(view: View?) {
                    val cameraIntent =
                        Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
                    startActivityForResult(cameraIntent, 2)
                }
            })
        }
    }

    fun classifyImage(image: Bitmap?) {
        var diseaseText = binding.diseaseText
        var descriptionText = binding.descriptionText

        val model: Model = Model.newInstance(applicationContext)

        val inputFeature0 =
            TensorBuffer.createFixedSize(intArrayOf(1, 224, 224, 3), DataType.FLOAT32)
        val byteBuffer = ByteBuffer.allocateDirect(4 * imageSize * imageSize * 3)
        byteBuffer.order(ByteOrder.nativeOrder())

        val intValues = IntArray(imageSize * imageSize)
        image!!.getPixels(intValues, 0, image.width, 0, 0, image.width, image.height)

        var pixel = 0
        for (i in 0 until imageSize) {
            for (j in 0 until imageSize) {
                val `val` = intValues[pixel++]
                byteBuffer.putFloat((`val` shr 16 and 0xFF) * (1f / 255f))
                byteBuffer.putFloat((`val` shr 8 and 0xFF) * (1f / 255f))
                byteBuffer.putFloat((`val` and 0xFF) * (1f / 255f))
            }
        }
        inputFeature0.loadBuffer(byteBuffer)

        val outputs: Model.Outputs = model.process(inputFeature0)
        val outputFeature0: TensorBuffer = outputs.getOutputFeature0AsTensorBuffer()
        val confidences = outputFeature0.floatArray

        var maxPos = 0
        var maxConfidence = 0f

        for (i in confidences.indices) {
            if (confidences[i] > maxConfidence) {
                maxConfidence = confidences[i]
                maxPos = i
            }
        }

        val classes = arrayOf(
            "Mata Menonjol (Bulging Eyes)",
            "Katarak",
            "Mata Juling (Crossed Eyes)",
            "Glukoma",
            "Normal",
            "Uveitis"
        )

        diseaseText!!.text = classes[maxPos]

        var txt = ""

        txt += if (classes[maxPos] === "Mata Menonjol (Bulging Eyes)") {
            "Mata Menonjol (Bulging Eyes) merupakan kondisi mata yang cenderung menonjol dari lubang mata. Umumnya, penonjolan sepanjang 2 mm atau lebih dianggap abnormal. Penyebab paling umum pada orang dewasa adalah penyakit Graves. Bulging Eyes juga dapat menunjukkan infeksi atau gangguan vaskular seperti perdarahan, fistula, dan trombosis sinus kavernosus."
        } else if (classes[maxPos] === "Katarak") {
            "Katarak adalah suatu penyakit ketika lensa mata menjadi keruh dan berawan. Pada umumnya, katarak berkembang perlahan dan awalnya tidak terasa mengganggu. Namun, lama-kelamaan, katarak akan mengganggu penglihatan dan membuat pengidap merasa seperti melihat jendela berkabut, sulit menyetir, membaca, serta melakukan aktivitas sehari-hari."
        } else if (classes[maxPos] === "Mata Juling (Crossed Eyes)") {
            "Mata juling adalah kondisi ketika posisi kedua mata tidak sejajar dan melihat ke arah yang berbeda. Meski paling sering terjadi pada bayi dan anak-anak, kondisi ini bisa dialami oleh siapa saja dari semua kelompok usia. Mata juling juga dapat terjadi pada satu atau kedua mata."
        } else if (classes[maxPos] === "Glukoma") {
            "Glaukoma adalah kerusakan pada saraf mata akibat tingginya tekanan di dalam bola mata. Kondisi ini ditandai dengan nyeri di mata, mata merah, penglihatan kabur, serta mual dan muntah. Glaukoma perlu segera ditangani untuk mencegah terjadinya kebutaan."
        } else if (classes[maxPos] === "Normal") {
            "Mata anda normal, selalu jaga kesehatan mata anda dengan cara rutin mengonsumsi buah dan sayur"
        } else {
            "Uveitis adalah peradangan yang terjadi pada uvea atau lapisan tengah mata. Kondisi ini ditandai dengan salah satu atau kedua mata terlihat sangat merah, yang dapat disertai rasa nyeri pada mata dan penglihatan menjadi kabur."
        }

        txt.also { descriptionText!!.text = it }

        model.close()
    }

    public override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        var imageView = binding.imageView

        if (requestCode == 1 && resultCode == AppCompatActivity.RESULT_OK) {
            var image = data!!.extras!!["data"] as Bitmap?
            val dimension = Math.min(image!!.width, image.height)
            image = ThumbnailUtils.extractThumbnail(image, dimension, dimension)
            imageView!!.setImageBitmap(image)
            image = Bitmap.createScaledBitmap(image, imageSize, imageSize, false)
            classifyImage(image)
        } else {
            val dat: Uri? = data?.data
            var image: Bitmap? = null
            try {
                image = MediaStore.Images.Media.getBitmap(this.contentResolver, dat)
            } catch (e: IOException) {
                e.printStackTrace()
            }
            imageView.setImageBitmap(image)
            image = Bitmap.createScaledBitmap(image!!, imageSize, imageSize, false)
            classifyImage(image)
        }
        super.onActivityResult(requestCode, resultCode, data)
    }
}