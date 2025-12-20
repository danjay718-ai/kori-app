"use client"

import { Snowflake, Thermometer, Wind, DoorOpen, Droplets, Container, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: Snowflake,
      title: "Cold Storage",
      description: "Custom cold storage solutions for warehouses, distribution centers, and food service facilities.",
      slug: "cold-storage",
      features: ["Temperature-controlled warehousing", "Custom design & installation", "24/7 monitoring systems"],
    },
    {
      icon: Thermometer,
      title: "Refrigeration Systems",
      description: "Installation, maintenance, and repair of commercial refrigeration systems of all sizes.",
      slug: "refrigeration-systems",
      features: ["New system installation", "Preventive maintenance", "Emergency repairs"],
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "Commercial HVAC services including installation, maintenance, and emergency repairs.",
      slug: "air-conditioning",
      features: ["Commercial HVAC installation", "System upgrades", "Energy efficiency optimization"],
    },
    {
      icon: DoorOpen,
      title: "Walk-in Coolers",
      description: "Professional installation and service for walk-in coolers and freezers.",
      slug: "walk-in-coolers",
      features: ["Custom walk-in design", "Freezer installation", "Repair & maintenance"],
    },
    {
      icon: Droplets,
      title: "Ice Machines",
      description: "Complete ice machine services from installation to regular maintenance and repairs.",
      slug: "ice-machines",
      features: ["Commercial ice maker setup", "Regular maintenance", "Part replacement"],
    },
    {
      icon: Container,
      title: "Display Refrigerators",
      description: "Service for reach-in refrigerators, display cases, and merchandising units.",
      slug: "display-refrigerators",
      features: ["Display case installation", "Reach-in refrigerators", "Merchandising units"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Refrigeration Solutions
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Professional installation, maintenance, and repair services for all your commercial cooling needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group relative bg-card p-10 rounded-2xl border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 group-hover:bg-primary group-hover:scale-110 rounded-xl transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button size="sm" variant="ghost" className="group-hover:bg-primary/10 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
