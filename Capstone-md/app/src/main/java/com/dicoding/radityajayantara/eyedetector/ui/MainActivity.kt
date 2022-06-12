package com.dicoding.radityajayantara.eyedetector.ui

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.preferencesDataStore
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import com.dicoding.radityajayantara.eyedetector.R
import com.dicoding.radityajayantara.eyedetector.databinding.ActivityMainBinding
import com.dicoding.radityajayantara.eyedetector.ui.login.LoginActivity
import com.dicoding.radityajayantara.eyedetector.ui.utils.SharedViewModel
import com.dicoding.radityajayantara.eyedetector.ui.utils.UserPreferences
import com.dicoding.radityajayantara.eyedetector.ui.utils.ViewModelFactory

private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "settings")
class MainActivity : AppCompatActivity() {
    private lateinit var articleViewModel: SharedViewModel
    private lateinit var binding: ActivityMainBinding

    private val homeFragment = HomeFragment()
    private val profileFragment = ProfileFragment()

    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        setViewModel()
        loadFragment(homeFragment)

        binding.bottomNavigation.setOnNavigationItemSelectedListener {
            when(it.itemId){
                R.id.listHome -> loadFragment(homeFragment)
                R.id.profileFragment -> loadFragment(profileFragment)
            }
            true
        }

//        binding.logOutBtn.setOnClickListener {
//            logOut()
//        }
    }

    private  fun loadFragment(fragment: Fragment){
        if(fragment != null){
            val transaction = supportFragmentManager.beginTransaction()
            transaction.replace(R.id.content,fragment)
            transaction.commit()
        }
    }

    private fun logOut() {
        articleViewModel.logOut()
        startActivity(Intent(this, LoginActivity::class.java))
    }

    private fun setViewModel() {
        articleViewModel = ViewModelProvider(
            this, ViewModelFactory(UserPreferences.getInstance(dataStore))
        )[SharedViewModel::class.java]
    }
}