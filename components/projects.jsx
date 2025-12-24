"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Chain Refrigeration",
      description:
        "Installed complete walk-in cooler and freezer systems for 5 locations, including emergency backup systems.",
      image: "/modern-commercial-restaurant-walk-in-cooler-instal.jpg",
      category: "Commercial",
      slug: "restaurant-chain-refrigeration",
    },
    {
      title: "Warehouse Cold Storage",
      description: "Designed and implemented a 10,000 sq ft cold storage facility with temperature monitoring systems.",
      image: "/large-industrial-warehouse-cold-storage-facility.jpg",
      category: "Industrial",
      slug: "warehouse-cold-storage",
    },
    {
      title: "Grocery Store HVAC",
      description: "Complete HVAC overhaul including display refrigeration units and store climate control systems.",
      image: "/modern-grocery-store-refrigeration-display-cases.jpg",
      category: "Retail",
      slug: "grocery-store-hvac",
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Our Work
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            See how we've helped businesses maintain optimal cooling and storage solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">{project.description}</p>
                <span className="text-sm font-medium text-primary group-hover:underline">View Project →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
