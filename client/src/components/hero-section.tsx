import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 gradient-hero text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                Ahilesh <span className="text-accent">Shankar</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-light" data-testid="hero-subtitle">
                Program & Portfolio Management Professional
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm" data-testid="credential-mba">MBA</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm" data-testid="credential-pmp">PMP</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm" data-testid="credential-experience">10+ Years Experience</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-blue-100 leading-relaxed" data-testid="hero-description">
                Seasoned professional with expertise across Insurance, Retail, AI, Energy, Automotive, and Technology Consulting. 
                Proven track record of driving <strong className="text-accent">$30M+ revenue growth</strong> and leading cross-functional teams of 80+ members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  className="bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
                  size="lg"
                  data-testid="button-contact"
                >
                  Get In Touch
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white font-semibold hover:bg-white hover:text-primary"
                  data-testid="button-email"
                >
                  <a href="mailto:ahileshshankar@gmail.com">Email Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animation-float flex items-center justify-center" data-testid="hero-image">
              <div className="text-6xl text-white/30">👤</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
