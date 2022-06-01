package com.dicoding.radityajayantara.eyedetector.ui.register

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.dicoding.radityajayantara.eyedetector.databinding.ActivityRegisterBinding
import com.dicoding.radityajayantara.eyedetector.ui.api.ApiConfig
import com.dicoding.radityajayantara.eyedetector.ui.MainActivity
import com.dicoding.radityajayantara.eyedetector.ui.login.LoginActivity
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class RegisterActivity : AppCompatActivity() {
    private lateinit var binding: ActivityRegisterBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityRegisterBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        binding.LoginBtn.setOnClickListener {
            startActivity(Intent(this, LoginActivity::class.java))
        }
        binding.buttonRegister.setOnClickListener {
            val email = binding.editEmail.text.toString()
            val username = binding.editUsername.text.toString()
            val password = binding.editPassword.text.toString()
            val name = binding.editName.text.toString()

            userRegister(email,username,password,name)
        }

    }

    private fun userRegister(email: String, username: String, password: String, name: String) {
        val client = ApiConfig.getApiService().register(email, username, password, name)
        client.enqueue(object: Callback<ResponseBody>{
            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(this@RegisterActivity, "Success", Toast.LENGTH_SHORT).show()
                val intent = Intent(this@RegisterActivity, MainActivity::class.java)
                startActivity(intent)
            }

            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(this@RegisterActivity, "Gagal", Toast.LENGTH_SHORT).show()
            }

        })
    }

}