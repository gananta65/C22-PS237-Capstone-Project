package com.dicoding.radityajayantara.eyedetector.ui

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.dicoding.radityajayantara.eyedetector.R
import com.dicoding.radityajayantara.eyedetector.databinding.FragmentHomeBinding

class HomeFragment : Fragment() {

    private var binding: FragmentHomeBinding? = null

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentHomeBinding.inflate(
            inflater,
            container,
            false
        )
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.apply {
            toggleScan.setOnClickListener {
                Intent(requireActivity(), ScanActivity::class.java).apply {
                    startActivity(this)
                }
            }
        }
    }

    companion object {
        fun newInstance() : HomeFragment{
                val fragment = HomeFragment()
                val args = Bundle()
                fragment.arguments = args
                return fragment
        }
    }
}