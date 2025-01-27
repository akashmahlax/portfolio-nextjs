"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring server-side rendering and API routes.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "web",
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs, leveraging Next.js API routes and server-side rendering.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "cms",
  },
  {
    title: "Task Management App",
    description: "A real-time task management application using Next.js, React Query, and WebSockets.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "app",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "web",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard application using Next.js and integrating with a weather API.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "app",
  },
  {
    title: "Recipe Sharing Platform",
    description: "A social platform for sharing and discovering recipes, built with Next.js and GraphQL.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "web",
  },
]

const categories = ["all", "web", "app", "cms"]

export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Portfolio
        </motion.h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Live Demo
                      <ExternalLinkIcon className="ml-1" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      GitHub
                      <GitHubLogoIcon className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

