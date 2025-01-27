"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTranslation } from "next-i18next"

const skills = [
  { name: "Next.js", level: 95, color: "bg-blue-500" },
  { name: "React", level: 90, color: "bg-cyan-500" },
  { name: "TypeScript", level: 85, color: "bg-blue-600" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "GraphQL", level: 75, color: "bg-pink-500" },
  { name: "AWS", level: 70, color: "bg-yellow-500" },
]

export default function SkillShowcase() {
  const { t } = useTranslation("common")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                      {t("skills.level")}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary-600">{skill.level}%</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                  <motion.div
                    style={{ width: `${skill.level}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
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

