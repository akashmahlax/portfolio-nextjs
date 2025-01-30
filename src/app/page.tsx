import Hero from "@/components/hero"
import About from '@/components/about'
import SkillsGraph from "@/components/skills-graph"
import ProjectFilter from "@/components/project-filter"
import ProjectShowcase3D from "@/components/project-showcase-3d"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ContactForm from "@/components/contact-form"
import LanguageSwitcher from "@/components/language-switcher"

export default function Home() {
  return (
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <SkillsGraph />
        <ProjectFilter />
        <ProjectShowcase3D />
        <TestimonialCarousel />
        <ContactForm />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-love-700 dark:text-love-300">Change Language</h2>
          <LanguageSwitcher />
        </div>
      </main>
  )
}

