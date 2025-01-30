"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const socialLinks = [
  {
    name: "GitHub",
    icon: GitHubLogoIcon,
    url: "https://github.com/akashmahlax",
    image: "/images/github-preview.jpg",
    info: "Check out my open-source projects and contributions.",
  },
  {
    name: "LinkedIn",
    icon: LinkedInLogoIcon,
    url: "https://linkedin.com/in/akashmahlax",
    image: "/images/linkedin-preview.jpg",
    info: "Connect with me on LinkedIn for professional networking.",
  },
  {
    name: "Twitter",
    icon: TwitterLogoIcon,
    url: "https://twitter.com/akashmahlax",
    image: "/images/twitter-preview.jpg",
    info: "Follow me on Twitter for web development tips and updates.",
  },
]

export default function SocialLinks() {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <div key={link.name} className="relative">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
            onMouseEnter={() => setActiveLink(link.name)}
            onMouseLeave={() => setActiveLink(null)}
          >
            <link.icon className="w-6 h-6" />
          </a>
          <AnimatePresence>
            {activeLink === link.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-48 bg-popover rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={link.image || "/placeholder.svg"}
                  alt={link.name}
                  width={192}
                  height={108}
                  className="w-full h-24 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-semibold">{link.name}</h3>
                  <p className="text-sm text-muted-foreground">{link.info}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

