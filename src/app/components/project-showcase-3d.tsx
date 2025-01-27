"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/images/project1.jpg",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media platforms",
    image: "/images/project2.jpg",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "AI-powered Chatbot",
    description: "Intelligent customer service bot using natural language processing",
    image: "/images/project3.jpg",
    link: "https://example.com/project3",
  },
]

export default function ProjectShowcase3D() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-love-100 dark:from-gray-800 dark:to-love-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-love-700 dark:text-love-300">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative w-full h-64 perspective-1000"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-full transition-all duration-500 preserve-3d"
                animate={{ rotateY: hoveredProject === project.id ? 180 : 0 }}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute w-full h-full backface-hidden bg-love-200 dark:bg-love-800 p-6 rounded-lg flex flex-col justify-center items-center text-center transform rotate-y-180">
                  <h3 className="text-xl font-bold mb-2 text-love-700 dark:text-love-300">{project.title}</h3>
                  <p className="text-love-600 dark:text-love-400 mb-4">{project.description}</p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-love-500 text-white px-4 py-2 rounded hover:bg-love-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

