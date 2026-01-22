export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Passionate about web and full stack development, skilled in React.js, Next.js, Node.js, Python, and TypeScript. 
            I have built projects like <span className="text-primary font-semibold">MSA Mapping</span> (technician-mission matching platform), 
            <span className="text-primary font-semibold"> Velib Paris</span> (bike station management), and{" "}
            <span className="text-primary font-semibold">RetinaML</span> (AI medical platform).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently a Bachelor CDA student at ECE Paris, I am actively looking for an internship starting March or April 2026 
            (4-6 months) to apply my technical skills in a professional environment and contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  )
}
