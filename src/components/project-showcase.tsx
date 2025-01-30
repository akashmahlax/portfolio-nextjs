"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog } from "@headlessui/react"
import { ExternalLinkIcon, GitHubLogoIcon, Cross2Icon } from "@radix-ui/react-icons"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring server-side rendering and API routes.",
    fullDescription:
      "This e-commerce platform leverages the power of Next.js to deliver a fast, responsive, and SEO-friendly online shopping experience. Key features include dynamic product pages, a shopping cart system, user authentication, and integration with popular payment gateways. The use of server-side rendering ensures quick initial page loads, while API routes handle backend functionality such as inventory management and order processing.",
    image: "/placeholder.svg?height=600&width=800",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Blog CMS",
    description: "A content management system for blogs, leveraging Next.js API routes and server-side rendering.",
    fullDescription:
      "This blog CMS is built on Next.js, providing a seamless experience for both content creators and readers. It features a rich text editor for creating and editing posts, category and tag management, and user authentication for multiple authors. The system uses API routes for data management and server-side rendering for optimal performance and SEO. Additional features include comment functionality, social media sharing, and analytics integration.",
    image: "/placeholder.svg?height=600&width=800",
    tech: ["Next.js", "React", "PostgreSQL", "Prisma", "AWS S3"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A real-time task management application using Next.js, React Query, and WebSockets.",
    fullDescription:
      "This task management application provides real-time collaboration features, allowing teams to manage projects and tasks efficiently. Built with Next.js and enhanced with React Query for efficient data fetching and caching, the app offers a smooth user experience. WebSocket integration enables instant updates across all connected clients. Key features include drag-and-drop task organization, deadline tracking, file attachments, and team member assignment.",
    image: "/placeholder.svg?height=600&width=800",
    tech: ["Next.js", "React Query", "WebSockets", "Express", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
]

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <span className="inline-block h-screen align-middle" aria-hidden="true">
                &#8203;
              </span>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-background shadow-xl rounded-2xl"
              >
                <Dialog.Title as="h3" className="text-2xl font-medium leading-6 mb-4">
                  {selectedProject.title}
                </Dialog.Title>
                <div className="relative h-64 mb-4">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-4">{selectedProject.fullDescription}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Live Demo
                    <ExternalLinkIcon className="ml-1" />
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    GitHub
                    <GitHubLogoIcon className="ml-1" />
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                  <Cross2Icon className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}

