import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="about-title">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="about-subtitle">
              A results-driven executive with over a decade of experience in program management, 
              portfolio optimization, and strategic business development across multiple industries and continents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-secondary">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-contracts">$30M+</div>
                <p className="text-muted-foreground">Contract Values Secured</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-secondary">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-team">80+</div>
                <p className="text-muted-foreground">Team Members Led</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-secondary">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-growth">35%</div>
                <p className="text-muted-foreground">YoY Revenue Growth</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="global-experience-title">Global Experience</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="global-experience-desc">
                My international experience spans across Canada, Singapore, and India, giving me unique insights into 
                diverse business cultures and market dynamics. This global perspective enables me to build bridges 
                across cultures and drive success in multinational environments.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="country-canada">🇨🇦 Canada</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="country-singapore">🇸🇬 Singapore</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="country-india">🇮🇳 India</span>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="core-expertise-title">Core Expertise</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center" data-testid="expertise-pl">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  P&L Ownership & Revenue Growth
                </li>
                <li className="flex items-center" data-testid="expertise-portfolio">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Portfolio & Category Management
                </li>
                <li className="flex items-center" data-testid="expertise-leadership">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Cross-functional Team Leadership
                </li>
                <li className="flex items-center" data-testid="expertise-business-dev">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Strategic Business Development
                </li>
                <li className="flex items-center" data-testid="expertise-data-driven">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Data-driven Decision Making
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
