import { Card, CardContent } from "@/components/ui/card";

const awards = [
  {
    id: "scholarship",
    icon: "🏆",
    title: "Ovintiv MBA Scholarship",
    description: "July 2021 & MBA Entrance Scholarship Award - September 2020",
    bgColor: "bg-gradient-to-r from-accent/10 to-accent/5",
    borderColor: "border-accent/20",
    iconBg: "bg-accent"
  },
  {
    id: "case-competition",
    icon: "🥇",
    title: "MBA Case Competition Winner",
    description: "1st Place Fall & Winter Internal MBA Case Competition - October 2020 & January 2021",
    bgColor: "bg-gradient-to-r from-primary/10 to-primary/5",
    borderColor: "border-primary/20",
    iconBg: "bg-primary"
  },
  {
    id: "innovation",
    icon: "🔬",
    title: "Project Innovation Award",
    description: "Development of \"Assembly & Test cell – IoT Internet of Things\" - 2017 (TechnipFMC)",
    bgColor: "bg-gradient-to-r from-secondary to-secondary/50",
    borderColor: "border-border",
    iconBg: "bg-muted"
  }
];

export default function AwardsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="awards-title">Honors & Awards</h2>
            <p className="text-xl text-muted-foreground" data-testid="awards-subtitle">
              Recognition for excellence in academic and professional achievements
            </p>
          </div>

          <div className="space-y-6">
            {awards.map((award) => (
              <Card 
                key={award.id} 
                className={`p-6 ${award.bgColor} border ${award.borderColor}`}
                data-testid={`award-${award.id}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${award.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl">{award.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`award-title-${award.id}`}>
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`award-desc-${award.id}`}>
                        {award.description}
                      </p>
                    </div>
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
