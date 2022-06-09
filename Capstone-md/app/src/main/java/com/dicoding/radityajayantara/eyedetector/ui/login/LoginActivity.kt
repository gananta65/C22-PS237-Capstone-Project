package com.dicoding.radityajayantara.eyedetector.ui.login

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.preferencesDataStore
import androidx.lifecycle.ViewModelProvider
import com.dicoding.radityajayantara.eyedetector.databinding.ActivityLoginBinding
import com.dicoding.radityajayantara.eyedetector.ui.api.ApiConfig
import com.dicoding.radityajayantara.eyedetector.ui.MainActivity
import com.dicoding.radityajayantara.eyedetector.ui.api.LoginResponse
import com.dicoding.radityajayantara.eyedetector.ui.api.UserModel
import com.dicoding.radityajayantara.eyedetector.ui.register.RegisterActivity
import com.dicoding.radityajayantara.eyedetector.ui.utils.SharedViewModel
import com.dicoding.radityajayantara.eyedetector.ui.utils.UserPreferences
import com.dicoding.radityajayantara.eyedetector.ui.utils.ViewModelFactory
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "settings")
class LoginActivity : AppCompatActivity() {
    private lateinit var mainViewModel: SharedViewModel
    private lateinit var binding: ActivityLoginBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityLoginBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        setViewModel()

        binding.RegisterBtn.setOnClickListener {
            startActivity(Intent(this, RegisterActivity::class.java))
        }

        binding.buttonLogin.setOnClickListener {
            val username = binding.editUsername.text.toString()
            val password = binding.editPassword.text.toString()

            userLogin(username, password)
        }
    }

    private fun setViewModel() {
        mainViewModel = ViewModelProvider(
            this, ViewModelFactory(UserPreferences.getInstance(dataStore))
        )[SharedViewModel::class.java]

        mainViewModel.getUser().observe(this){ user ->
            if (user.isLogin) {
                val intent = Intent(this, MainActivity::class.java)
                startActivity(intent)
                finish()
            }
        }
    }

    private fun userLogin(username: String, password: String) {
        showLoading(true)
        val client = ApiConfig.getApiService().login(username, password)
        client.enqueue(object: Callback<LoginResponse>{
            override fun onResponse(call: Call<LoginResponse>, response: Response<LoginResponse>) {
                showLoading(false)
                val responseBody = response.body()
                Log.d(TAG, "onResponse: $responseBody")
                if (response.isSuccessful || responseBody?.message == "Login success") {
                    if (responseBody != null) {
                        mainViewModel.saveUser(UserModel(responseBody.data.token, true))
                    }
                    Toast.makeText(this@LoginActivity, "Login success", Toast.LENGTH_SHORT).show()
                    startActivity(Intent(this@LoginActivity, MainActivity::class.java))
                } else {
                    Log.e(TAG, "onFailure1: ${response.message()}")
                    Toast.makeText(this@LoginActivity, "Login fail", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<LoginResponse>, t: Throwable) {
                showLoading(false)
                Log.e(TAG, "onFailure2: ${t.message}")
                Toast.makeText(this@LoginActivity, "Login fail", Toast.LENGTH_SHORT).show()
            }

        })
    }


    private fun showLoading(isLoading: Boolean) {
        if (isLoading) {
            binding.progressBar.visibility = View.VISIBLE
        } else {
            binding.progressBar.visibility = View.GONE
        }
    }

    companion object {
        private const val TAG = "Login Activity"
    }
}