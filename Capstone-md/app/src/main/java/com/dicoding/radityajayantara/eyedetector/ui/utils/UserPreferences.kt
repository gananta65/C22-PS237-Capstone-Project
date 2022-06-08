package com.dicoding.radityajayantara.eyedetector.ui.utils

import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.*
import com.dicoding.radityajayantara.eyedetector.ui.api.UserModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

class UserPreferences private constructor(private val dataStore: DataStore<Preferences>){

    fun getUser() : Flow<UserModel>{
        return dataStore.data.map { preferences ->
            UserModel(
                preferences[TOKEN] ?:"",
                preferences[STATE]?: false
            )
        }
    }

    suspend fun saveUser(user: UserModel) {
        dataStore.edit { preferences ->
            preferences[TOKEN] = user.token
            preferences[STATE] = user.isLogin
        }
    }
    suspend fun logOut(){
        dataStore.edit { preferences ->
            preferences[STATE] = false
        }
    }
    companion object {
        @Volatile
        private var INSTANCE: UserPreferences? = null
        private val TOKEN = stringPreferencesKey("token")
        private val STATE = booleanPreferencesKey("state")

        fun getInstance(dataStore: DataStore<Preferences>) : UserPreferences {
            return INSTANCE?: synchronized(this) {
                val instance = UserPreferences(dataStore)
                INSTANCE = instance
                instance
            }
        }
    }
}
