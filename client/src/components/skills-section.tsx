import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    id: "management",
    title: "Management & Strategy",
    icon: "📊",
    bgColor: "bg-primary/10",
    badgeColor: "bg-primary/10 text-primary",
    skills: ["P&L Management", "Portfolio Management", "Category Management", "Strategic Planning", "Business Acumen"]
  },
  {
    id: "technical",
    title: "Technical & Analytics",
    icon: "⚙️",
    bgColor: "bg-accent/10",
    badgeColor: "bg-accent/10 text-accent-foreground",
    skills: ["Power BI", "SQL", "Operational Analytics", "Product Engineering", "IoT Systems"]
  },
  {
    id: "leadership",
    title: "Leadership & Collaboration",
    icon: "👥",
    bgColor: "bg-secondary/50",
    badgeColor: "bg-secondary text-secondary-foreground",
    skills: ["Team Leadership", "Cross-functional Collaboration", "Change Management", "Problem Solving", "Account Management"]
  }
];

const certifications = [
  {
    id: "pmp",
    title: "PMP",
    description: "Project Management Professional"
  },
  {
    id: "mba-cert",
    title: "MBA",
    description: "Master of Business Administration"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="skills-title">Core Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
              Comprehensive skill set spanning business management, technology, and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card key={category.id} className="p-8 border border-border" data-testid={`skill-category-${category.id}`}>
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground" data-testid={`category-title-${category.id}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className={`${category.badgeColor} text-sm rounded-full mr-2 mb-2`}
                        data-testid={`skill-${category.id}-${index}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8" data-testid="certifications-title">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <Card key={cert.id} className="px-8 py-4 border border-border shadow-sm" data-testid={`certification-${cert.id}`}>
                  <CardContent className="p-0">
                    <div className="text-lg font-semibold text-primary" data-testid={`cert-title-${cert.id}`}>
                      {cert.title}
                    </div>
                    <p className="text-muted-foreground text-sm" data-testid={`cert-desc-${cert.id}`}>
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
