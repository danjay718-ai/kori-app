"use client"

import { Snowflake, Thermometer, Wind, DoorOpen, Droplets, Container, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const servicesData = {
  "cold-storage": {
    icon: Snowflake,
    title: "Cold Storage",
    description:
      "Custom cold storage solutions designed for warehouses, distribution centers, and food service facilities. Our expert team designs and installs temperature-controlled storage systems that maintain precise conditions for your products.",
    overview:
      "Whether you need a small walk-in cooler or a large warehouse-scale cold storage facility, KORI provides end-to-end solutions tailored to your business requirements. We specialize in creating efficient, reliable systems that meet all food safety regulations.",
    scope: [
      "Temperature-controlled warehouse design",
      "Custom cold storage installation",
      "24/7 monitoring systems",
      "Energy-efficient cooling solutions",
      "Compliance with food safety standards",
      "Emergency backup systems",
    ],
    products: ["Walk-in coolers", "Freezer systems", "Temperature monitoring equipment", "Backup generators"],
    images: [
      "/large-industrial-warehouse-cold-storage-facility.jpg",
      "/commercial-cold-storage-interior.jpg",
      "/temperature-control-system.jpg",
    ],
  },
  "refrigeration-systems": {
    icon: Thermometer,
    title: "Refrigeration Systems",
    description:
      "Professional installation, maintenance, and repair of commercial refrigeration systems of all sizes. From small businesses to large industrial facilities, we handle everything.",
    overview:
      "Our refrigeration services cover the complete lifecycle of your cooling systems. We install new equipment, provide preventive maintenance to avoid breakdowns, and offer emergency repair services to minimize downtime.",
    scope: [
      "New refrigeration system installation",
      "Preventive maintenance programs",
      "Emergency repair services",
      "System upgrades and retrofits",
      "Energy efficiency assessments",
      "Refrigerant handling and recovery",
    ],
    products: [
      "Commercial refrigeration units",
      "Industrial cooling systems",
      "Compressors and condensers",
      "Control systems",
    ],
    images: [
      "/commercial-refrigeration-system.jpg",
      "/industrial-refrigeration-equipment.jpg",
      "/refrigeration-maintenance.jpg",
    ],
  },
  "air-conditioning": {
    icon: Wind,
    title: "Air Conditioning",
    description:
      "Commercial HVAC services including installation, maintenance, and emergency repairs. Keep your business comfortable year-round with reliable climate control.",
    overview:
      "We provide comprehensive HVAC solutions for commercial and industrial spaces. Our services ensure optimal indoor climate control, energy efficiency, and air quality for your business environment.",
    scope: [
      "Commercial HVAC installation",
      "System design and engineering",
      "Preventive maintenance contracts",
      "Energy efficiency optimization",
      "Air quality improvement",
      "Emergency repair services",
    ],
    products: ["Commercial AC units", "Rooftop HVAC systems", "Split systems", "Ductwork and ventilation"],
    images: ["/commercial-hvac-installation.jpg", "/rooftop-air-conditioning-unit.jpg", "/hvac-maintenance.png"],
  },
  "walk-in-coolers": {
    icon: DoorOpen,
    title: "Walk-in Coolers",
    description:
      "Professional installation and service for walk-in coolers and freezers. Custom-designed solutions for restaurants, grocery stores, and food service businesses.",
    overview:
      "Walk-in coolers and freezers are essential for many businesses. We design, install, and maintain walk-in units that provide reliable temperature control and maximize your storage space.",
    scope: [
      "Custom walk-in cooler design",
      "Walk-in freezer installation",
      "Door and seal replacement",
      "Insulation upgrades",
      "Temperature control systems",
      "Repair and maintenance services",
    ],
    products: ["Walk-in cooler panels", "Freezer doors and hardware", "Refrigeration systems", "Shelving solutions"],
    images: [
      "/modern-commercial-restaurant-walk-in-cooler-instal.jpg",
      "/walk-in-cooler-interior.jpg",
      "/walk-in-freezer-installation.jpg",
    ],
  },
  "ice-machines": {
    icon: Droplets,
    title: "Ice Machines",
    description:
      "Complete ice machine services from installation to regular maintenance and repairs. Ensure your business always has the ice supply it needs.",
    overview:
      "Commercial ice machines require proper installation and regular maintenance to operate reliably. We service all major brands and can help you choose the right ice machine for your business needs.",
    scope: [
      "Commercial ice maker installation",
      "Regular cleaning and maintenance",
      "Ice machine repair services",
      "Water filtration system installation",
      "Part replacement and upgrades",
      "Capacity assessments",
    ],
    products: ["Commercial ice makers", "Ice bins and storage", "Water filtration systems", "Ice dispensers"],
    images: ["/commercial-ice-machine.jpg", "/ice-maker-installation.jpg", "/ice-machine-maintenance.jpg"],
  },
  "display-refrigerators": {
    icon: Container,
    title: "Display Refrigerators",
    description:
      "Service for reach-in refrigerators, display cases, and merchandising units. Keep your products at the perfect temperature while maximizing visibility.",
    overview:
      "Display refrigeration is crucial for retail and food service businesses. We install and maintain display cases, reach-in refrigerators, and merchandising units that keep products at optimal temperatures while attracting customers.",
    scope: [
      "Display case installation",
      "Reach-in refrigerator service",
      "Glass door replacement",
      "LED lighting upgrades",
      "Temperature control optimization",
      "Merchandising unit maintenance",
    ],
    products: ["Glass door refrigerators", "Open-air display cases", "Deli cases", "Beverage coolers"],
    images: [
      "/modern-grocery-store-refrigeration-display-cases.jpg",
      "/retail-refrigerated-display-case.jpg",
      "/reach-in-refrigerator.jpg",
    ],
  },
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-xl shrink-0">
              <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Service Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{service.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Image Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {service.images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Scope & Inclusions</h2>
                <div className="grid grid-cols-1 gap-4">
                  {service.scope.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-primary/10 rounded-full shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.products.map((product, index) => (
                    <div key={index} className="p-4 bg-card border border-border rounded-xl">
                      <p className="text-card-foreground font-medium text-sm sm:text-base">{product}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 sm:p-8 bg-primary/5 border border-primary/20 rounded-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Request a Quote</h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Get a free consultation and quote for your {service.title.toLowerCase()} needs.
                  </p>
                  <Button size="lg" className="w-full rounded-full" asChild>
                    <Link href="/#contact">Contact Us</Link>
                  </Button>
                </div>

                <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Need Help?</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    Contact us for emergency service or inquiries
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Phone:</span>{" "}
                      <a href="tel:+17607893639" className="hover:text-primary transition-colors">
                        (760) 789-3639
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Email:</span>{" "}
                      <a href="mailto:korilee760@gmail.com" className="hover:text-primary transition-colors">
                        korilee760@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
