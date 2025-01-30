"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const aboutContent = [
  {
    title: "Background",
    content:
      "I'm a passionate Next.js developer with over 5 years of experience in building modern, high-performance web applications.",
    icon: "👨‍💻",
  },
  {
    title: "Skills",
    content:
      "My expertise extends beyond just Next.js. I'm proficient in TypeScript, Tailwind CSS, and Node.js, allowing me to build full-stack applications.",
    icon: "🚀",
  },
  {
    title: "Philosophy",
    content:
      "I believe in creating web experiences that are not only visually appealing but also robust, scalable, and accessible to all users.",
    icon: "🧠",
  },
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-love-100 to-white dark:from-love-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-love-700 dark:text-love-300"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            {aboutContent.map((item, index) => (
              <motion.button
                key={item.title}
                className={`w-full text-left p-4 mb-4 rounded-lg transition-all ${
                  activeIndex === index
                    ? "bg-love-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-love-700 dark:text-love-300 hover:shadow-md"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="text-2xl mr-4"
                  animate={{ rotate: activeIndex === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.span>
                {item.title}
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-love-600 dark:text-love-400 text-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                {aboutContent[activeIndex].content}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

