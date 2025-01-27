"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage("Thank you for your message. I will get back to you soon!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Oops! Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label htmlFor="name" className="block text-love-700 dark:text-love-300 mb-2">
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-love-700 dark:text-love-300 bg-white dark:bg-love-800 border border-love-300 dark:border-love-600 rounded-md focus:outline-none focus:ring-2 focus:ring-love-500"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-love-700 dark:text-love-300 mb-2">
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-love-700 dark:text-love-300 bg-white dark:bg-love-800 border border-love-300 dark:border-love-600 rounded-md focus:outline-none focus:ring-2 focus:ring-love-500"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="message" className="block text-love-700 dark:text-love-300 mb-2">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 text-love-700 dark:text-love-300 bg-white dark:bg-love-800 border border-love-300 dark:border-love-600 rounded-md focus:outline-none focus:ring-2 focus:ring-love-500"
          whileFocus={{ scale: 1.02 }}
        ></motion.textarea>
      </motion.div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-love-500 text-white py-2 px-4 rounded-md hover:bg-love-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
      <AnimatePresence>
        {submitMessage && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-center text-love-600 dark:text-love-400"
          >
            {submitMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  )
}

