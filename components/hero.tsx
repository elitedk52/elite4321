"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseTrails, setMouseTrails] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() }
      setMouseTrails((prev) => [...prev.slice(-8), newTrail])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMouseTrails((prev) => prev.slice(-5))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden custom-cursor">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        {/* Matrix rain effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30 text-xs font-mono matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 0.5}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        ))}
      </div>

      {mouseTrails.map((trail, index) => (
        <div
          key={trail.id}
          className="mouse-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
            opacity: ((index + 1) / mouseTrails.length) * 0.5,
            transform: `scale(${(index + 1) / mouseTrails.length})`,
          }}
        />
      ))}

      <div
        className="code-cursor cursor-blink"
        style={{
          left: mousePosition.x,
          top: mousePosition.y - 10,
        }}
      />

      {/* Interactive cursor glow */}
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none transition-all duration-500"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 flex items-center justify-center code-float-animation overflow-hidden">
              {/* Code editor mockup */}
              <div className="w-full h-full p-6 font-mono text-xs">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-secondary">const developer = {`{`}</div>
                <div className="text-primary ml-4">name: "Creative Coder",</div>
                <div className="text-accent ml-4">skills: ["React", "Next.js"],</div>
                <div className="text-primary ml-4">passion: "Building Magic"</div>
                <div className="text-secondary">{`}`}</div>
                <div className="text-muted-foreground mt-2">
                  <span className="cursor-blink">|</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 text-primary digital-glitch-animation font-mono text-lg">
              &lt;/&gt;
            </div>
            <div
              className="absolute -bottom-2 -left-6 w-6 h-6 text-secondary digital-glitch-animation font-mono"
              style={{ animationDelay: "1s" }}
            >
              {}
            </div>
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 text-accent digital-glitch-animation font-mono text-sm"
              style={{ animationDelay: "2s" }}
            >
              []
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-mono font-bold mb-6 text-balance">
          <span className="block text-foreground">FULL-STACK</span>
          <span className="block text-primary code-shimmer-text">DEVELOPER</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          Crafting immersive digital experiences through clean code, innovative solutions, and cutting-edge web
          technologies that bring ideas to life.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg text-sm text-muted-foreground font-mono">
            React & Next.js
          </span>
          <span className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg text-sm text-muted-foreground font-mono">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg text-sm text-muted-foreground font-mono">
            Full-Stack Development
          </span>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 font-mono"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View My Code →
        </Button>

        <div className="mt-16 text-right">
          <h3 className="text-lg font-semibold text-foreground mb-2 font-mono">The Developer Portfolio</h3>
          <p className="text-sm text-muted-foreground max-w-md ml-auto text-balance">
            A modern, interactive portfolio showcasing full-stack development skills through immersive web experiences
            and clean, efficient code architecture.
          </p>
        </div>
      </div>
    </section>
  )
}
