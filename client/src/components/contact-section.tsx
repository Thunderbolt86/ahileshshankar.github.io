import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const contactMethods = [
  {
    id: "email",
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "ahileshshankar@gmail.com",
    href: "mailto:ahileshshankar@gmail.com"
  },
  {
    id: "phone",
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "(780) 220-7835",
    href: "tel:+17802207835"
  },
  {
    id: "linkedin",
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "#"
  }
];

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="contact-title">Let's Connect</h2>
              <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">
                Ready to discuss opportunities and create value together
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method) => (
                <Card 
                  key={method.id} 
                  className="p-8 border border-border hover:shadow-md transition-shadow"
                  data-testid={`contact-${method.id}`}
                >
                  <CardContent className="p-0 text-center">
                    <div className="flex justify-center mb-4">
                      {method.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`contact-title-${method.id}`}>
                      {method.title}
                    </h3>
                    <a 
                      href={method.href} 
                      className="text-primary hover:underline"
                      data-testid={`contact-link-${method.id}`}
                    >
                      {method.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary to-primary/80 p-8 text-white">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4" data-testid="cta-title">Ready to Drive Results Together?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed" data-testid="cta-description">
                  Whether you're looking for program management expertise, portfolio optimization, 
                  or strategic business development, I'm here to help deliver exceptional outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-white text-primary font-semibold hover:bg-gray-100"
                    size="lg"
                    data-testid="button-send-message"
                  >
                    <a href="mailto:ahileshshankar@gmail.com">Send Message</a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white font-semibold hover:bg-white hover:text-primary"
                    data-testid="button-schedule-call"
                  >
                    <a href="tel:+17802207835">Schedule Call</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2" data-testid="footer-name">Ahilesh Shankar</h3>
              <p className="text-muted-foreground" data-testid="footer-title">Program & Portfolio Management Professional</p>
            </div>
            <div className="flex justify-center space-x-8 mb-6">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-about"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-education"
              >
                Education
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-skills"
              >
                Skills
              </button>
            </div>
            <div className="text-muted-foreground text-sm">
              <p data-testid="footer-copyright">&copy; 2024 Ahilesh Shankar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
