"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "Working with this developer was an absolute pleasure. Their expertise in Next.js is unmatched.",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    content: "The web application they built for us exceeded our expectations in both performance and design.",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Founder, StartupX",
    content: "Their ability to translate our vision into a functional, beautiful website was impressive.",
    avatar: "/images/avatar3.jpg",
  },
]

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonials[currentTestimonial].content}"</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

