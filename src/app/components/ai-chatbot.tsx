"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

export default function AIChatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const { t } = useTranslation("common")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { text: input, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Here you would typically make an API call to your AI service
    // For this example, we'll use a mock response
    setTimeout(() => {
      const botMessage = { text: `You said: "${input}". This is a mock AI response.`, sender: "bot" }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("chatbot.title")}</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 max-w-md mx-auto"
        >
          <div className="h-80 overflow-y-auto mb-4 p-4 bg-gray-100 dark:bg-gray-600 rounded">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-500 text-gray-800 dark:text-white"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chatbot.inputPlaceholder")}
              className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-r hover:bg-primary-dark transition-colors"
            >
              {t("chatbot.sendButton")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

