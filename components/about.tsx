export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
              Dedicated to Code,
              <span className="text-primary"> Innovation & Excellence</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                DevCraft Studio is a cutting-edge development hub where brands and startups come to build their digital
                presence, refine their technical vision, and architect what's next in the ever-evolving world of web
                development.
              </p>

              <p>
                We help businesses scale through robust web applications and modern development practices. And we help
                developers master their craft, so innovation and execution move in perfect harmony; the best solutions
                don't just happen, they're engineered. That's why we created CodeFlow™, a methodology to architect,
                build, and deploy applications that fuel not just businesses, but entire digital ecosystems.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-foreground font-medium border-b border-border/30">
                  Our Development Services
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="py-4 text-muted-foreground">
                  Full-stack web applications, React/Next.js development, API design, database architecture, and modern
                  DevOps practices that scale with your business needs.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-foreground font-medium border-b border-border/30">
                  Meet the Developer
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="py-4 text-muted-foreground">
                  A passionate full-stack developer who believes in clean code, scalable architecture, and the power of
                  modern web technologies to transform business ideas into digital reality.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-foreground font-medium border-b border-border/30">
                  CodeFlow™ Methodology
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="py-4 text-muted-foreground">
                  Our proven development approach that combines agile practices with technical excellence, ensuring
                  every project delivers performant, maintainable, and scalable solutions.
                </div>
              </details>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl overflow-hidden">
              <img src="/modern-developer-workspace-with-multiple-monitors-.jpg" alt="Developer Workspace" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
