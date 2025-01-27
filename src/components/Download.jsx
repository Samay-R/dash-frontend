import React, { useRef, useState } from "react"
import { CloudLightning, Menu, X } from "lucide-react"

export default function Component() {
  const [securityLevel, setSecurityLevel] = useState("low")
  const [fileType, setFileType] = useState("file")
  const [token, setToken] = useState("")
  const [files, setFiles] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files)
    setFiles(selectedFiles)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const droppedFiles = Array.from(event.dataTransfer.files)
    setFiles(droppedFiles)
  }

  const openFileDialog = () => {
    fileInputRef.current.click()
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <nav className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center">
          <CloudLightning className="w-8 h-8 text-orange-400 mr-2" />
          <span className="text-xl font-bold">Dash</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white font-medium">
            UPLOAD
          </a>
          <a href="#" className="text-white font-medium">
            DOWNLOAD
          </a>
          <a href="#" className="text-white font-medium">
            WORK WITH US
          </a>
          <a href="#" className="text-white font-medium">
            CONTACT US
          </a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <a href="upload" className="block py-2 text-white font-medium">
            UPLOAD
          </a>
          <a href="download" className="block py-2 text-white font-medium">
            DOWNLOAD
          </a>
          <a href="#" className="block py-2 text-white font-medium">
            WORK WITH US
          </a>
          <a href="#" className="block py-2 text-white font-medium">
            CONTACT US
          </a>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:items-stretch">
          <div className="flex-1 space-y-4 flex flex-col">
            <h2 className="text-2xl font-bold">Upload a file</h2>
            <p className="text-gray-400">Note: 200MB is the upload limit.</p>

            <div
              className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center transition-all hover:border-orange-400 cursor-pointer flex flex-col justify-center h-full"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={openFileDialog}
            >
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" multiple />
              <svg
                className="w-12 h-12 mx-auto mb-4 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0-16l-4 4m4-4l4 4" />
              </svg>
              <p className="text-sm md:text-base">Drag a file here or click to browse</p>
            </div>
            {files.length > 0 && (
              <p className="text-sm md:text-base">Selected files: {files.map((file) => file.name).join(", ")}</p>
            )}
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold">Options</h2>

            <div className="space-y-4">
              <p>File type:</p>
              <div className="flex flex-wrap gap-2">
                {["File", "Text", "Link"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded text-sm md:text-base ${
                      fileType === type.toLowerCase()
                        ? "bg-orange-400 text-white"
                        : "border border-orange-400 text-orange-400"
                    }`}
                    onClick={() => setFileType(type.toLowerCase())}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p>Security options:</p>
              <div className="flex flex-wrap gap-2">
                {["Low", "Medium", "High"].map((level) => (
                  <button
                    key={level}
                    className={`px-4 py-2 rounded text-sm md:text-base ${
                      securityLevel === level.toLowerCase()
                        ? "bg-orange-400 text-white"
                        : "border border-orange-400 text-orange-400"
                    }`}
                    onClick={() => setSecurityLevel(level.toLowerCase())}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm md:text-base">
                Token (Want to add more files to an existing token? Add the token here, its optional) :
              </p>
              <input
                type="text"
                placeholder="Enter token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-orange-400 text-sm md:text-base"
              />
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="px-4 py-2 border border-orange-400 text-orange-400 rounded text-sm md:text-base"
                onClick={() => setFiles([])}
              >
                Clear Files
              </button>
              <button className="px-4 py-2 bg-orange-400 text-white rounded text-sm md:text-base">Upload Files</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}