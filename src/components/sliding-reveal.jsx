"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Mainpage from "./Mainpage"
import BlurText from "./BlurText";

export default function SlidingReveal() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000) // Wait for 2 seconds before starting the reveal animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-100 " style={{ fontFamily: "Poppins" }}>
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold text-center"
            >
             <BlurText 
             text="Quick Easy and Secure"
             delay={200}
             animateBy="words"
             direction="bottom"
             />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`${showContent ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
        <Mainpage />
      </div>
    </div>
  )
}