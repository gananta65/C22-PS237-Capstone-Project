package com.dicoding.radityajayantara.eyedetector.ui

import android.os.Parcelable
import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.preferencesDataStore
import androidx.lifecycle.ViewModelProvider
import com.dicoding.radityajayantara.eyedetector.R
import com.dicoding.radityajayantara.eyedetector.databinding.FragmentProfileBinding
import com.dicoding.radityajayantara.eyedetector.ui.api.*
import com.dicoding.radityajayantara.eyedetector.ui.login.LoginActivity
import com.dicoding.radityajayantara.eyedetector.ui.utils.SharedViewModel
import com.dicoding.radityajayantara.eyedetector.ui.utils.UserPreferences
import com.dicoding.radityajayantara.eyedetector.ui.utils.ViewModelFactory
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "settings")
class ProfileFragment : Fragment() {
    private lateinit var profileViewModel: SharedViewModel
    private lateinit var binding: FragmentProfileBinding
    private var param1: String? = null
    private var param2: String? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            param1 = it.getString(ARG_PARAM1)
            param2 = it.getString(ARG_PARAM2)
        }
    }
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_profile, container, false)
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        binding = FragmentProfileBinding.inflate(layoutInflater)
        super.onViewCreated(view, savedInstanceState)
        val btnLogout: Button = view.findViewById(R.id.buttonLogout)
        setViewModel()

        btnLogout.setOnClickListener { logOut() }

    }



    private fun setViewModel() {
        val pref = requireContext().dataStore
        profileViewModel = ViewModelProvider(this, ViewModelFactory(UserPreferences.getInstance(pref))
        )[SharedViewModel::class.java]
    }
    companion object {
    }

    private fun logOut() {
        profileViewModel.logOut()
        startActivity(Intent(requireContext(), LoginActivity::class.java))
    }
}