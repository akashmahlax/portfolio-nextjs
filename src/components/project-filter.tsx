"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "web",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Mobile App",
    category: "mobile",
    description: "React Native app for iOS and Android",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "Dashboard Design",
    category: "design",
    description: "Responsive admin dashboard with dark mode",
    image: "/images/project3.jpg",
  },
  {
    id: 4,
    title: "API Integration",
    category: "web",
    description: "RESTful API integration with Next.js",
    image: "/images/project4.jpg",
  },
  {
    id: 5,
    title: "IoT Solution",
    category: "iot",
    description: "Smart home automation system",
    image: "/images/project5.jpg",
  },
]

const categories = ["all", "web", "mobile", "design", "iot"]

export default function ProjectFilter() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  return (
    <section className="py-20 bg-gradient-to-b from-love-100 to-white dark:from-love-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-love-700 dark:text-love-300"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === category
                  ? "bg-love-500 text-white"
                  : "bg-love-100 text-love-700 dark:bg-love-800 dark:text-love-300"
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-love-800 rounded-lg overflow-hidden shadow-lg"
              >
                <motion.div className="relative h-48" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-love-700 dark:text-love-300">{project.title}</h3>
                  <p className="text-love-500 dark:text-love-400 mb-4">{project.description}</p>
                  <motion.span
                    className="inline-block bg-love-100 text-love-600 dark:bg-love-700 dark:text-love-200 rounded-full px-3 py-1 text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.category}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

