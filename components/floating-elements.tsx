"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-primary/20 sparkle-animation"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            fontSize: Math.random() * 20 + 10 + "px",
          }}
        >
          {element.id % 4 === 0 ? "✨" : element.id % 4 === 1 ? "⭐" : element.id % 4 === 2 ? "💫" : "🌟"}
        </div>
      ))}

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl float-animation" />
      <div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl float-animation"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/6 w-16 h-16 bg-secondary/5 rounded-full blur-lg float-animation"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
