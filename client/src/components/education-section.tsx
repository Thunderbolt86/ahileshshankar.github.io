import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    id: "mba",
    degree: "Master of Business Administration (MBA)",
    institution: "University of Alberta, Canada",
    period: "2008 - 2010",
    award: "🏆 Ovintiv MBA Scholarship",
    highlight: true
  },
  {
    id: "masters",
    degree: "Master of Science",
    field: "Computer Integrated Manufacturing (CIM)",
    institution: "Nanyang Technological University, Singapore",
    period: "",
    highlight: false
  },
  {
    id: "bachelors",
    degree: "Bachelor of Technology",
    field: "Mechatronics",
    institution: "SASTRA University, India",
    period: "",
    highlight: false
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="education-title">Education</h2>
            <p className="text-xl text-muted-foreground" data-testid="education-subtitle">
              Strong academic foundation across business and engineering disciplines
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <Card 
                key={edu.id} 
                className={`p-8 border ${
                  edu.highlight 
                    ? 'bg-gradient-to-r from-primary/10 to-secondary border-primary/20' 
                    : 'bg-background border-border'
                }`}
                data-testid={`education-${edu.id}`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`degree-${edu.id}`}>
                        {edu.degree}
                      </h3>
                      {edu.field && (
                        <p className="text-primary font-semibold text-lg" data-testid={`field-${edu.id}`}>
                          {edu.field}
                        </p>
                      )}
                      <p className="text-primary font-semibold text-lg" data-testid={`institution-${edu.id}`}>
                        {edu.institution}
                      </p>
                      {edu.period && (
                        <p className="text-muted-foreground" data-testid={`period-${edu.id}`}>{edu.period}</p>
                      )}
                    </div>
                    {edu.award && (
                      <div className="mt-4 lg:mt-0">
                        <Badge className="bg-accent text-accent-foreground font-semibold" data-testid={`award-${edu.id}`}>
                          {edu.award}
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
