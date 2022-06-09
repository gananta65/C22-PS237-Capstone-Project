package com.dicoding.radityajayantara.eyedetector.ui.api

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class UserModel(
    val token: String,
    val isLogin: Boolean
) :Parcelable
