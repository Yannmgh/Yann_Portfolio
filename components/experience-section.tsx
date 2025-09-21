import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      year: "2025",
      company: "Quick Champs Élysées",
      role: "Crew Member",
      description:
        "Developed teamwork and organizational skills in a fast-paced environment, demonstrating rigor and attention to detail.",
      skills: ["Teamwork", "Time Management", "Customer Service"],
    },
    {
      year: "2024",
      company: "ISOCEL Telecom Benin",
      role: "Network Intern",
      description:
        "Gained hands-on experience with network infrastructure, fiber optic installations, router configurations, and antenna systems.",
      skills: ["Network Infrastructure", "Fiber Optics", "Router Configuration", "Hardware"],
    },
    {
      year: "2023",
      company: "Modernitic Benin",
      role: "App Development Intern",
      description:
        "Contributed to stock management system development, implemented geolocation features, and optimized database performance.",
      skills: ["App Development", "Database Optimization", "Geolocation", "Stock Management"],
    },
    {
      year: "2020",
      company: "RHOF Multi Services",
      role: "Trainer Intern",
      description:
        "Provided training on IT fundamentals and office software, developing communication and teaching skills.",
      skills: ["Training", "IT Support", "Communication", "Office Software"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey showcasing diverse experiences in technology and development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className="md:ml-16 w-full">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-card-foreground">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 sm:mt-0 w-fit">
                          {exp.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
