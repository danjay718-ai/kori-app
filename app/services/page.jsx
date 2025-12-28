"use client"

import { Snowflake, Package, Wind, Wrench, Settings, Warehouse, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: Snowflake,
      title: "Walk-In Cold Storage Design & Installation",
      description: "Custom walk-in cold storage solutions designed and installed for your specific business needs.",
      slug: "walk-in-cold-storage",
      features: ["Custom design consultation", "Professional installation", "Temperature monitoring systems"],
    },
    {
      icon: Package,
      title: "Refrigeration Systems Installation",
      description: "Professional installation of commercial refrigeration systems for optimal cooling performance.",
      slug: "refrigeration-systems-installation",
      features: ["Commercial system setup", "Energy-efficient solutions", "Quality assurance testing"],
    },
    {
      icon: Wind,
      title: "Airconditioning Systems Services",
      description: "Complete air conditioning services including installation, maintenance, and repairs.",
      slug: "airconditioning-systems-services",
      features: ["HVAC installation", "System maintenance", "Emergency repairs"],
    },
    {
      icon: Wrench,
      title: "Maintenance, Repair & Troubleshooting",
      description: "Expert maintenance, repair, and troubleshooting services to keep your systems running smoothly.",
      slug: "maintenance-repair-troubleshooting",
      features: ["Preventive maintenance", "24/7 emergency repairs", "System diagnostics"],
    },
    {
      icon: Settings,
      title: "Parts & Components Supply",
      description: "High-quality parts and components supply for all your refrigeration and cooling needs.",
      slug: "parts-components-supply",
      features: ["Genuine OEM parts", "Fast delivery", "Competitive pricing"],
    },
    {
      icon: Warehouse,
      title: "Site Preparation & Insulated Panel Assembly",
      description: "Professional site preparation and insulated panel assembly for optimal installation.",
      slug: "site-preparation-panel-assembly",
      features: ["Site assessment", "Panel installation", "Quality insulation"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-5 bg-gradient-to-b from-secondary/30 to-background">
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

      <section className="py-15 bg-background">
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
