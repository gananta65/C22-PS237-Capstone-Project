package com.dicoding.radityajayantara.eyedetector.ui.login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.dicoding.radityajayantara.eyedetector.databinding.ActivityLoginBinding
import com.dicoding.radityajayantara.eyedetector.ui.api.ApiConfig
import com.dicoding.radityajayantara.eyedetector.ui.MainActivity
import com.dicoding.radityajayantara.eyedetector.ui.register.RegisterActivity
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginActivity : AppCompatActivity() {
    private lateinit var binding: ActivityLoginBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityLoginBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        binding.RegisterBtn.setOnClickListener {
            startActivity(Intent(this, RegisterActivity::class.java))
        }

        binding.buttonLogin.setOnClickListener {
            val email = binding.editEmail.text.toString()
            val password = binding.editPassword.text.toString()

            userLogin(email, password)
        }
    }

    private fun userLogin(email: String, password: String) {
        val client = ApiConfig.getApiService().login(email, password)
        client.enqueue(object: Callback<ResponseBody>{
            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(this@LoginActivity, "Login Berhasil", Toast.LENGTH_SHORT).show()
                val intent = Intent(this@LoginActivity, MainActivity::class.java)
                startActivity(intent)
            }

            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(this@LoginActivity, "Login Gagal", Toast.LENGTH_SHORT).show()
            }

        })

    }
}