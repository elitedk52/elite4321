import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Ready to Create <span className="text-primary">Magic Together?</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Let's start planning your next enchanted digital experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ask us anything.</h3>
                <p className="text-muted-foreground">
                  Are you a company or brand looking to create something magical? Or perhaps looking to create a new
                  digital experience, a coach looking to build your online presence, or a startup ready to make your
                  mark? Let's connect.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your magical project idea..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl"
              >
                Send Message ✨
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-6xl font-serif font-bold text-primary">EPF</div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">© 2024 Enchanted Portfolio. All rights reserved.</p>
              <div className="flex gap-6 justify-center md:justify-end">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
