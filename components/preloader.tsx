"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Total visibility time roughly 1.5s to 2s
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800) // 1.5s typing + some hold

    return () => clearTimeout(timer)
  }, [])

  const text = "Welcome to Strategic Digital Partner"
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Fast typing
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f55733]"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h1 
            className="text-white text-4xl md:text-6xl font-bold px-4 text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
