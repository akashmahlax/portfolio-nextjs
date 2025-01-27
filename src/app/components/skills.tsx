"use client"

import { motion } from "framer-motion"
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGraphql } from "react-icons/si"

const skills = [
  { name: "Next.js", icon: SiNextdotjs, level: 95 },
  { name: "React", icon: SiReact, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
  { name: "Node.js", icon: SiNodedotjs, level: 80 },
  { name: "GraphQL", icon: SiGraphql, level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center mb-2">
                <skill.icon className="text-3xl mr-4 text-blue-600" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700">
                <motion.div
                  className="bg-blue-600 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

