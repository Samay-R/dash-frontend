import React from 'react'
import { Image } from "@chakra-ui/react"
import { CloudLightning, Menu } from "lucide-react"

const AboutUs = () => {
    return (
      <div className="min-h-dvh bg-gradient-to-b from-gray-900 to-black text-white" style={{ fontFamily: "Poppins" }}>
        <nav className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center">
            <CloudLightning className="w-8 h-8 text-orange-400 mr-2"/>
            <a href="/" className="text-2xl md:text-3xl font-semibold">Dash</a>  
          </div>
          <div className="flex space-x-4 font-medium">
            <a href="/upload" className="text-white hover:text-[#F97316]">
              UPLOAD
            </a>
            <a href="/download" className="text-white hover:text-[#F97316]">
              DOWNLOAD
            </a>
            <a href="/about" className="text-[#F97316]">
              ABOUT US
            </a>
            <a href="#" className="text-white hover:text-[#F97316]">
              CONTACT US
            </a>
          </div>
        </nav>
  
        <div className="px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">
            MEET THE TEAM
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4"></div>
          </h1>
  
          <div className="grid grid-cols-2 gap-x-24 gap-y-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold text-[#F97316] mb-2">Chinmay Raj</h3>
              <h4 className="text-xl mb-4">Lead Developer</h4>
              <p className="text-gray-400 max-w-sm">short description of the team member text text text text</p>
            </div>
  

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold text-[#F97316] mb-2">Adarsh Sagiraju</h3>
              <h4 className="text-xl mb-4">Business manager</h4>
              <p className="text-gray-400 max-w-sm">short description of the team member text text text text</p>
            </div>
  
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold text-[#F97316] mb-2">Samay Rayapuram</h3>
              <h4 className="text-xl mb-4">Front-end Developer</h4>
              <p className="text-gray-400 max-w-sm">short description of the team member text text text text</p>
            </div>
  
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold text-[#F97316] mb-2">Josna Angeline</h3>
              <h4 className="text-xl mb-4">UI/UX Designer</h4>
              <p className="text-gray-400 max-w-sm">short description of the team member text text text text</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutUs