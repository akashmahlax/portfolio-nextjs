"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: 2018,
    title: "Started as Junior Developer",
    company: "TechStart Inc.",
    description: "Began my journey in web development, focusing on front-end technologies.",
  },
  {
    year: 2019,
    title: "Mid-level Developer",
    company: "WebSolutions Co.",
    description: "Expanded skills to full-stack development, specializing in React and Node.js.",
  },
  {
    year: 2020,
    title: "Senior Developer",
    company: "InnovateTech",
    description: "Led development teams and implemented large-scale web applications using Next.js.",
  },
  {
    year: 2021,
    title: "Tech Lead",
    company: "FutureSoft",
    description: "Managed multiple projects and mentored junior developers in modern web technologies.",
  },
  {
    year: 2022,
    title: "Principal Engineer",
    company: "TechGiant Corp.",
    description: "Architected enterprise-level solutions and drove technical decision-making processes.",
  },
]

export default function ResumeTimeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"} cursor-pointer`}
                onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
              >
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{event.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{event.year}</p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedEvent === index ? "auto" : 0,
                      opacity: expandedEvent === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{event.description}</p>
                  </motion.div>
                </div>
              </div>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 ${
                  expandedEvent === index ? "scale-150" : ""
                } transition-transform duration-300`}
                style={{ top: "2rem" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

