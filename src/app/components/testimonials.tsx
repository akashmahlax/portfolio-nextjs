"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with this Next.js developer was an absolute pleasure. Their expertise and attention to detail resulted in a website that exceeded our expectations.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    content:
      "The developer's proficiency in Next.js and related technologies helped us create a high-performance web application that has significantly improved our user engagement.",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Director, GrowthCo",
    content:
      "The developer's ability to optimize our Next.js application for SEO has led to a noticeable increase in our organic traffic. Their work has been invaluable to our online presence.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

