"use client"

import { Snowflake, Thermometer, Wind, DoorOpen, Droplets, Container } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Snowflake,
      title: "Cold Storage",
      description: "Custom cold storage solutions for warehouses, distribution centers, and food service facilities.",
      slug: "cold-storage",
    },
    {
      icon: Thermometer,
      title: "Refrigeration Systems",
      description: "Installation, maintenance, and repair of commercial refrigeration systems of all sizes.",
      slug: "refrigeration-systems",
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "Commercial HVAC services including installation, maintenance, and emergency repairs.",
      slug: "air-conditioning",
    },
    {
      icon: DoorOpen,
      title: "Walk-in Coolers",
      description: "Professional installation and service for walk-in coolers and freezers.",
      slug: "walk-in-coolers",
    },
    {
      icon: Droplets,
      title: "Ice Machines",
      description: "Complete ice machine services from installation to regular maintenance and repairs.",
      slug: "ice-machines",
    },
    {
      icon: Container,
      title: "Display Refrigerators",
      description: "Service for reach-in refrigerators, display cases, and merchandising units.",
      slug: "display-refrigerators",
    },
  ]

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            What We Offer
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">KORI Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Comprehensive refrigeration and cooling solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 group-hover:bg-primary group-hover:scale-110 rounded-xl transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-primary group-hover:underline">Learn More →</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
