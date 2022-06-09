package com.dicoding.radityajayantara.eyedetector.ui.utils

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.asLiveData
import androidx.lifecycle.viewModelScope
import com.dicoding.radityajayantara.eyedetector.ui.api.UserModel
import kotlinx.coroutines.launch

class SharedViewModel (private val pref: UserPreferences) : ViewModel() {

    fun getUser() : LiveData<UserModel> {
        return pref.getUser().asLiveData()
    }

    fun saveUser(user: UserModel){
        viewModelScope.launch {
            pref.saveUser(user)
        }
    }
    fun logOut() {
        viewModelScope.launch {
            pref.logOut()
        }
    }
}