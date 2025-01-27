"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: 2018,
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript, building small projects to hone my skills.",
  },
  {
    year: 2019,
    title: "Discovered React",
    description: "Fell in love with React and started creating more complex single-page applications.",
  },
  {
    year: 2020,
    title: "Adopted Next.js",
    description: "Recognized the power of Next.js for building performant, SEO-friendly web applications.",
  },
  {
    year: 2021,
    title: "First Major Project",
    description: "Led the development of a large-scale e-commerce platform using Next.js and GraphQL.",
  },
  {
    year: 2022,
    title: "Embraced Fullstack Development",
    description: "Expanded skills to include backend development with Node.js and database management.",
  },
  {
    year: 2023,
    title: "Specializing in Performance Optimization",
    description: "Focused on advanced Next.js features and web vitals to create lightning-fast web experiences.",
  },
]

export default function CareerTimeline() {
  const [activeEvent, setActiveEvent] = useState(timelineEvents[timelineEvents.length - 1])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          My Journey
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-900" />

          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="order-1 w-5/12" />
                <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                  <h3 className="mx-auto font-semibold text-lg text-white">{event.year}</h3>
                </div>
                <div className="order-1 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-100 text-xl">{event.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

