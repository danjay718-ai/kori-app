"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
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
    {
      title: "Medical Facility Climate Control",
      description: "Precision temperature control systems for pharmaceutical storage and medical equipment rooms.",
      image: "/medical-facility-hvac-system.jpg",
      category: "Healthcare",
      slug: "medical-facility-climate-control",
    },
    {
      title: "Hotel Kitchen Refrigeration",
      description: "Commercial kitchen walk-in coolers, freezers, and display refrigeration for a luxury hotel.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Hospitality",
      slug: "hotel-kitchen-refrigeration",
    },
    {
      title: "Brewery Cooling Systems",
      description: "Custom cooling solutions for fermentation tanks and cold storage for a craft brewery.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Industrial",
      slug: "brewery-cooling-systems",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              Our Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Featured Projects
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Explore our successful installations across various industries and business types
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
                  <div className="pt-4">
                    <span className="text-sm font-medium text-primary group-hover:underline">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
