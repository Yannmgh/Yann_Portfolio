"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Hello, I'm <span className="text-primary">Yann HOUNDJO</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">
              Full Stack Developer – Bachelor CDA student at ECE Paris
            </p>

            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Looking for an internship starting March or April 2026 (4-6 months)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="min-w-[160px]">
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="min-w-[160px]">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 ring-4 ring-primary/20 shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/profile-photo.jpg"
                alt="Yann HOUNDJO"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16 animate-bounce text-center">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
