import React, { useRef, useState } from "react";
import { CloudLightning, Menu, X } from "lucide-react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6 w-full relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-4">
        <div className="flex items-center space-x-2">
          <CloudLightning className="w-7 h-7 text-orange-400" />
          <a href="/" className="text-xl font-semibold">Dash</a>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          {['UPLOAD', 'DOWNLOAD', 'ABOUT', 'CONTACT'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full flex flex-col items-center bg-gray-800 p-4 mt-2 space-y-3 rounded-lg">
          {['UPLOAD', 'DOWNLOAD', 'ABOUT', 'CONTACT'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-orange-500 transition" onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-medium text-center mt-24">File Download</h1>
      
      {/* Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8 w-full max-w-md">
        <label className="block text-sm font-medium mb-2">Token</label>
        <input type="text" className="w-full bg-gray-900 p-3 rounded-md focus:ring-2 focus:ring-orange-500 border border-gray-700 outline-none" placeholder="Enter your token" />

        <label className="block text-sm font-medium mt-4 mb-2">Captcha</label>
        <input type="text" className="w-full bg-gray-900 p-3 rounded-md focus:ring-2 focus:ring-orange-500 border border-gray-700 outline-none" placeholder="Enter Captcha" />
        
        <div className="bg-gray-700 text-center py-3 rounded-md mt-4">Captcha Placeholder</div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-md mt-6 font-medium">Access Files</button>
      </div>
    </div>
  );
}
