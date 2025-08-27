import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: "current",
    title: "Program Manager",
    company: "Deloitte - Strategy & Operations",
    period: "2022 - Present",
    status: "current",
    achievements: [
      "Delivered $2M revenue growth with 12% market expansion",
      "Negotiated $10M Fortune 500 multi-year contract",
      "Achieved 35% YoY revenue increase through strategic upselling",
      "Led globally distributed team of 80+ across 6 workstreams"
    ],
    responsibilities: [
      "P&L accountability for portfolio initiatives",
      "Comprehensive product roadmap development",
      "Data-driven insights using Power BI & SQL",
      "KPI implementation and performance tracking"
    ]
  },
  {
    id: "altaml",
    title: "Senior Business Solutions Consultant",
    company: "AltaML (Edmonton, Canada)",
    period: "2021 - 2022",
    status: "",
    highlight: "Secured $30M 5-year government contract",
    achievements: [
      "Structured value-based proposals and led complex negotiations",
      "Developed category strategies through ROI analysis and user journey mapping",
      "Orchestrated cross-functional projects balancing client requirements and profitability",
      "Functioned as trusted advisor for business case development and revenue projections"
    ]
  },
  {
    id: "technipfmc",
    title: "Product Lead - Control Systems & Topside Hydraulics",
    company: "TechnipFMC (Singapore)",
    period: "2014 - 2020 (6 years)",
    status: "",
    leadership: [
      "Managed large-scale project tenders and multimillion-dollar contracts",
      "Directed cross-functional teams and engineering gate reviews",
      "Category/portfolio manager for control systems products"
    ],
    technical: [
      "Authored four Master Specification procedures",
      "Reduced engineering time by 20% through process optimization",
      "Technical Authority for Electrohydraulic Products"
    ]
  },
  {
    id: "delphitvs",
    title: "New Product Introduction Engineer",
    company: "DelphiTVS (Chennai, India)",
    period: "2011 - 2014",
    status: "",
    achievements: [
      "Designed manufacturing processes for Common Rail Unit Pump in SUVs and LMVs",
      "Equipment selection, qualification, and installation management",
      "Achieved desired process capability index through systematic approach"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="experience-title">Professional Experience</h2>
            <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
              A journey of continuous growth across leading global organizations
            </p>
          </div>

          <div className="timeline-line space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-12" data-testid={`experience-${exp.id}`}>
                <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center ${
                  exp.status === 'current' ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-muted'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <Card className="p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`title-${exp.id}`}>{exp.title}</h3>
                        <p className="text-primary font-semibold text-lg" data-testid={`company-${exp.id}`}>{exp.company}</p>
                        <p className="text-muted-foreground" data-testid={`period-${exp.id}`}>{exp.period}</p>
                      </div>
                      {exp.status === 'current' && (
                        <Badge className="bg-green-100 text-green-800 mt-2 lg:mt-0" data-testid={`status-${exp.id}`}>
                          Current Role
                        </Badge>
                      )}
                    </div>
                    
                    {exp.highlight && (
                      <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 mb-4">
                        <p className="text-accent-foreground font-semibold" data-testid={`highlight-${exp.id}`}>
                          Major Achievement: {exp.highlight}
                        </p>
                      </div>
                    )}

                    <div className="space-y-4">
                      {exp.achievements && exp.responsibilities ? (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} data-testid={`achievement-${exp.id}-${i}`}>• {achievement}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Responsibilities:</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              {exp.responsibilities.map((responsibility, i) => (
                                <li key={i} data-testid={`responsibility-${exp.id}-${i}`}>• {responsibility}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : exp.leadership && exp.technical ? (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Leadership & Management:</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              {exp.leadership.map((item, i) => (
                                <li key={i} data-testid={`leadership-${exp.id}-${i}`}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Technical Excellence:</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              {exp.technical.map((item, i) => (
                                <li key={i} data-testid={`technical-${exp.id}-${i}`}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.achievements?.map((achievement, i) => (
                            <li key={i} data-testid={`achievement-${exp.id}-${i}`}>• {achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
