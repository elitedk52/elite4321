"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10" />

      {/* Interactive cursor effect */}
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Floating character placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-card/50 backdrop-blur-sm rounded-full border border-border/30 flex items-center justify-center float-animation">
              <img src="/magical-3d-character-fairy-tale-bunny-with-crown-f.jpg" alt="Magical Character" className="w-48 h-48 object-contain" />
            </div>
            {/* Sparkle effects */}
            <div className="absolute -top-4 -right-4 w-8 h-8 text-primary sparkle-animation">✨</div>
            <div
              className="absolute -bottom-2 -left-6 w-6 h-6 text-accent sparkle-animation"
              style={{ animationDelay: "1s" }}
            >
              ⭐
            </div>
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 text-secondary sparkle-animation"
              style={{ animationDelay: "2s" }}
            >
              💫
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-balance">
          <span className="block text-foreground">IMMERSIVE</span>
          <span className="block text-primary shimmer-text">STORYTELLER</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          Crafting magical digital experiences that blur the line between reality and fairy tales, built with
          cutting-edge technology and boundless imagination.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full text-sm text-muted-foreground">
            Interactive Design
          </span>
          <span className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full text-sm text-muted-foreground">
            3D Experiences
          </span>
          <span className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full text-sm text-muted-foreground">
            Creative Development
          </span>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore My Magical World →
        </Button>

        {/* Project info */}
        <div className="mt-16 text-right">
          <h3 className="text-lg font-semibold text-foreground mb-2">The Enchanted Portfolio</h3>
          <p className="text-sm text-muted-foreground max-w-md ml-auto text-balance">
            A highly immersive and interactive creative portfolio that blurs the line between the real world and fairy
            tales, built with modern web technologies and other magical elements.
          </p>
        </div>
      </div>
    </section>
  )
}
