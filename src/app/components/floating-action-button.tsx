"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpIcon } from "@radix-ui/react-icons"

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-4 right-4 bg-love-500 text-white p-3 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

