import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "RetinaML",
      description:
        "AI web platform predicting diabetic retinopathy from retina images using machine learning algorithms and medical imaging analysis.",
      stack: ["React", "Tailwind", "TypeScript", "Node.js", "MySQL", "FHIR/HL7"],
      image: "/medical-ai-interface-with-retina-scan-analysis.jpg",
      github: "https://github.com/Yannmgh/Retina_ML",
      demo: "#",
    },
    {
      title: "Jobsyn",
      description:
        "Intelligent recruitment platform with dynamic job scraping, automated matching algorithms, and comprehensive candidate management system.",
      stack: ["Node.js", "PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
      image: "/modern-recruitment-platform-dashboard.jpg",
      github: "https://github.com/Yannmgh/Jobsyn",
      demo: "#",
    },
    {
      title: "Train Ticket Management",
      description:
        "Object-oriented console application for train ticket reservation system with seat management and booking functionality.",
      stack: ["C++"],
      image: "/console-application-interface-for-ticket-booking.jpg",
      github: "https://github.com/Yannmgh/TGV_Project",
      demo: "#",
    },
    {
      title: "Pacman Game in C",
      description:
        "Classic Pacman-inspired game implementation featuring maze navigation, ghost AI, and score tracking system.",
      stack: ["C"],
      image: "/retro-pacman-game-interface-with-maze.jpg",
      github: "https://github.com/Yannmgh/Allegro_Project-Pacman-",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, AI integration, and
            problem-solving skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
