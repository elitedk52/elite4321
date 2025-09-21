export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
              Dedicated to Creativity,
              <span className="text-primary"> Culture & Growth</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Enchanted Portfolio (EP) is a creative hub where brands and people come to define who they are, sharpen
                their vision, and carve out what's next in the magical realm of digital storytelling.
              </p>

              <p>
                We help brands find their voice through immersive experiences and enchanting design. And we help
                creatives own their craft, so life and work move in sync; the best ideas don't just happen, they flow.
                That's why we created Fairy Tale Work™, a new way to pause, reset, and spark the thinking that fuels not
                just careers, but whole new worlds of possibility.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-foreground font-medium border-b border-border/30">
                  Our Magical Services
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="py-4 text-muted-foreground">
                  Interactive storytelling, 3D web experiences, immersive brand narratives, and enchanted user
                  interfaces that captivate and inspire.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-foreground font-medium border-b border-border/30">
                  Meet the Storyteller
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="py-4 text-muted-foreground">
                  A passionate creator who believes in the power of digital magic to transform ordinary experiences into
                  extraordinary journeys.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-foreground font-medium border-b border-border/30">
                  Fairy Tale Work™
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="py-4 text-muted-foreground">
                  Our unique methodology that combines creative thinking with technical excellence, ensuring every
                  project tells a compelling story.
                </div>
              </details>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl overflow-hidden">
              <img src="/creative-workspace-with-magical-elements-floating-.jpg" alt="Creative Workspace" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
