package com.dicoding.radityajayantara.eyedetector.ui.api

import com.google.gson.annotations.SerializedName

data class ApiResponse(
    @field:SerializedName("status")
    val error: Boolean,
    @field:SerializedName("message")
    val message: String
)

data class LoginResponse(
    @field:SerializedName("data")
    val data: Data,
    @field:SerializedName("status")
    val status: Boolean,
    @field:SerializedName("message")
    val message: String,
)

data class Data (
    @field:SerializedName("name")
    val name: String,
    @field:SerializedName("id")
    val id: String,
    @field:SerializedName("token")
    val token: String
)