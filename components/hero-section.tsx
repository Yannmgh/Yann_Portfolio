"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-primary/20">
            <AvatarImage src="/young-developer-headshot.png" alt="Yann HOUNDJO" />
            <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">YH</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Hello, I'm <span className="text-primary">Yann HOUNDJO</span> 👋
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">
            Web & Full Stack Developer – Bachelor CDA student at ECE Paris
          </p>

          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Looking for an apprenticeship starting September 2025
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="min-w-[160px]">
              View Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="min-w-[160px]">
              Contact Me
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
