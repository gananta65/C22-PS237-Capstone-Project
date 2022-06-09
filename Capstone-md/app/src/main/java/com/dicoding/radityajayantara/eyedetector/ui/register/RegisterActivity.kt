package com.dicoding.radityajayantara.eyedetector.ui.register

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import com.dicoding.radityajayantara.eyedetector.databinding.ActivityRegisterBinding
import com.dicoding.radityajayantara.eyedetector.ui.api.ApiConfig
import com.dicoding.radityajayantara.eyedetector.ui.MainActivity
import com.dicoding.radityajayantara.eyedetector.ui.api.ApiResponse
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
        showLoading(true)
        val client = ApiConfig.getApiService().register(email, username, password, name)
        client.enqueue(object: Callback<ApiResponse>{
            override fun onResponse(
                call: Call<ApiResponse>,
                response: Response<ApiResponse>) {
                showLoading(false)
                val responseBody = response.body()
                Log.d(TAG, "onResponse: $responseBody")
                if(response.isSuccessful && responseBody?.message == "User has been created") {
                    Toast.makeText(this@RegisterActivity, "Register Success", Toast.LENGTH_SHORT).show()
                    val intent = Intent(this@RegisterActivity, MainActivity::class.java)
                    startActivity(intent)
                } else {
                    Log.e(TAG, "onFailure1: ${response.message()}")
                    Toast.makeText(this@RegisterActivity, "Register Fail", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<ApiResponse>, t: Throwable) {
                showLoading(false)
                Log.e(TAG, "onFailure2: ${t.message}")
                Toast.makeText(this@RegisterActivity, "Register Fail", Toast.LENGTH_SHORT).show()
            }
        })
    }

    private fun showLoading(isLoading: Boolean){
        if (isLoading){
            binding.progressBar.visibility = View.VISIBLE
        } else {
            binding.progressBar.visibility = View.GONE
        }
    }

    companion object {
        private const val TAG = "Register Activity"
    }

}