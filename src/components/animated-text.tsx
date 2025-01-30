"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const phrases = [
  "Building responsive web apps",
  "Crafting seamless user experiences",
  "Optimizing for performance",
  "Creating scalable solutions",
]

export default function AnimatedText() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText === phrases[currentPhrase]) {
          setTimeout(() => setIsDeleting(true), 1500)
          return
        }

        if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentPhrase((current) => (current + 1) % phrases.length)
          return
        }

        const delta = isDeleting ? 50 : 100
        const text = phrases[currentPhrase].substring(0, currentText.length + (isDeleting ? -1 : 1))
        setCurrentText(text)
      },
      Math.random() * 50 + 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentPhrase, isDeleting])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl md:text-2xl mb-8 text-white/80 h-8"
    >
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="inline-block w-1 h-6 ml-1 bg-white"
      />
    </motion.div>
  )
}

