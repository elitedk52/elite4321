import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Enchanted E-commerce",
    category: "Interactive Shopping Experience",
    description: "A magical online store that transforms product browsing into an immersive fairy tale journey.",
    image: "/magical-ecommerce-website-with-floating-products-a.jpg",
    tags: ["3D Design", "WebGL", "Interactive UI"],
  },
  {
    title: "Storybook Portfolio",
    category: "Creative Showcase",
    description:
      "A portfolio website that unfolds like a children's storybook, with animated characters and interactive elements.",
    image: "/storybook-style-portfolio-website-with-animated-ch.jpg",
    tags: ["Animation", "Storytelling", "Creative Dev"],
  },
  {
    title: "Mystical Dashboard",
    category: "Data Visualization",
    description:
      "Transforming complex data into beautiful, crystal ball-inspired visualizations that make analytics magical.",
    image: "/mystical-dashboard-with-crystal-ball-data-visualiz.jpg",
    tags: ["Data Viz", "UI/UX", "Interactive"],
  },
  {
    title: "Fairy Tale CMS",
    category: "Content Management",
    description:
      "A content management system designed like a magical library, making content creation feel like writing stories.",
    image: "/magical-library-interface-for-content-management-s.jpg",
    tags: ["CMS", "User Experience", "Creative Interface"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Magical <span className="text-primary">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Each project is a unique story, crafted with love, imagination, and cutting-edge technology to create
            experiences that enchant and inspire.
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
                  Explore Project →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full">
            View All Magical Works
          </Button>
        </div>
      </div>
    </section>
  )
}
