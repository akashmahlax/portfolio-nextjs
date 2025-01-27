"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-love-100 dark:bg-love-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-love-600 dark:text-love-300">
              © {new Date().getFullYear()} NextDev. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <SocialLink href="#" label="GitHub">
              GitHub
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              LinkedIn
            </SocialLink>
            <SocialLink href="#" label="Twitter">
              Twitter
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      className="text-love-600 dark:text-love-300 hover:text-love-800 dark:hover:text-love-100 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {children}
    </motion.a>
  )
}

