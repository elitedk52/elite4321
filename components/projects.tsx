import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Full-Stack Application",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "SaaS Dashboard",
    category: "React Application",
    description:
      "A comprehensive SaaS dashboard with analytics, user management, and subscription handling built with React and Node.js.",
    image: "/sleek-saas-dashboard-with-charts-graphs-and-data-v.jpg",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
  },
  {
    title: "API Gateway",
    category: "Backend Architecture",
    description:
      "Scalable microservices API gateway with authentication, rate limiting, and real-time monitoring capabilities.",
    image: "/api-architecture-diagram-with-microservices-and-da.jpg",
    tags: ["Node.js", "Docker", "Redis", "GraphQL"],
  },
  {
    title: "Mobile-First PWA",
    category: "Progressive Web App",
    description:
      "A mobile-first progressive web app with offline capabilities, push notifications, and native-like performance.",
    image: "/mobile-progressive-web-app-interface-on-smartphone.jpg",
    tags: ["PWA", "Service Workers", "IndexedDB", "Web APIs"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Each project represents a unique technical challenge, built with modern technologies and best practices to
            deliver scalable, performant, and user-focused solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{project.category}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent"
                >
                  View Project →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
