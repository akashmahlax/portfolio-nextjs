"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiDocker,
  SiAwsamplify,
} from "react-icons/si"

const skills = [
  { name: "Next.js", icon: SiNextdotjs, level: 95 },
  { name: "React", icon: SiReact, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
  { name: "Node.js", icon: SiNodedotjs, level: 80 },
  { name: "GraphQL", icon: SiGraphql, level: 75 },
  { name: "Docker", icon: SiDocker, level: 70 },
  { name: "AWS", icon: SiAwsamplify, level: 65 },
]

export default function SkillsGraph() {
  const { t } = useTranslation("common")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-love-100 dark:from-gray-800 dark:to-love-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-love-700 dark:text-love-300"
        >
          {t("skills.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-love-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="flex items-center mb-4">
                <motion.div animate={{ rotate: hoveredSkill === skill.name ? 360 : 0 }} transition={{ duration: 0.5 }}>
                  <skill.icon className="w-8 h-8 mr-4 text-love-500 dark:text-love-300" />
                </motion.div>
                <h3 className="text-xl font-semibold text-love-700 dark:text-love-200">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-love-600 bg-love-200 dark:text-love-200 dark:bg-love-700">
                      {t("skills.level")}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-love-600 dark:text-love-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-love-200 dark:bg-love-700">
                  <motion.div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-love-500 dark:bg-love-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

