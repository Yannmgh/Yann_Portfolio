import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Wrench } from "lucide-react"

export function AboutSection() {
  const skillCategories = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "TypeScript", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP"],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "VS Code"],
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Passionate about web and full stack development, skilled in React.js, Node.js, PHP, and MySQL. Built
              projects like <span className="text-primary font-semibold">RetinaML</span> (AI medical platform) and{" "}
              <span className="text-primary font-semibold">Jobsyn</span> (intelligent recruitment platform).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking a full stack apprenticeship starting September 2025 to apply my technical skills in a
              professional environment and contribute to innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">{category.icon}</div>
                    <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-sm text-muted-foreground">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
