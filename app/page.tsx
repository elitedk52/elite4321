import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
