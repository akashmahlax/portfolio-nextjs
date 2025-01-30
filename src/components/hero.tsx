"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import AnimatedText from "@/components/animated-text";
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-r from-love-400 to-love-600 dark:from-love-700 dark:to-love-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-conic from-love-500 via-love-300 to-love-500 opacity-30"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tight"
        >
          Next-Level Web Development
        </motion.h1>
        <AnimatedText />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="bg-white text-love-600 px-8 py-3 rounded-full inline-flex items-center hover:bg-love-100 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowRightIcon className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 right-0 md:right-20 w-64 h-64 md:w-96 md:h-96"
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww"
            alt="Web Developer"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-love-400 mix-blend-overlay"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

