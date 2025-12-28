"use client"

import { Snowflake, Package, Wind, Wrench, Settings, Warehouse, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const servicesData = {
  "walk-in-cold-storage": {
    icon: Snowflake,
    title: "Walk-In Cold Storage Design & Installation",
    description:
      "Custom walk-in cold storage solutions designed and installed for warehouses, distribution centers, restaurants, and food service facilities. Our expert team creates temperature-controlled storage systems that maintain precise conditions for your products.",
    overview:
      "KORI specializes in designing and installing walk-in cold storage solutions tailored to your business requirements. Whether you need a compact walk-in cooler for a restaurant or a large-scale cold storage facility for a distribution center, we provide end-to-end solutions from initial design consultation to final installation and testing.",
    scope: [
      "Custom cold storage design consultation",
      "Temperature-controlled storage installation",
      "Walk-in cooler and freezer systems",
      "Energy-efficient cooling solutions",
      "Compliance with food safety standards",
      "Temperature monitoring systems",
      "Emergency backup systems",
      "Post-installation support",
    ],
    products: [
      "Walk-in coolers",
      "Walk-in freezers",
      "Temperature monitoring equipment",
      "Insulated panels",
      "Refrigeration units",
    ],
    images: [
     "/cold-storage-indoors.jpg",
      "/cold-storage-indoors-2.jpg",
      "/cold-storage-outdoors.jpg",
    ],
  },
  "refrigeration-systems-installation": {
    icon: Package,
    title: "Refrigeration Systems Installation",
    description:
      "Professional installation of commercial refrigeration systems for businesses of all sizes. From small retail stores to large industrial facilities, we ensure optimal cooling performance.",
    overview:
      "Our refrigeration installation services cover the complete setup of commercial cooling systems. We handle everything from system selection and sizing to professional installation and commissioning. Our experienced technicians ensure your refrigeration system operates efficiently and reliably from day one.",
    scope: [
      "Commercial refrigeration system selection",
      "Professional installation services",
      "System sizing and capacity planning",
      "Electrical connections and wiring",
      "Refrigerant charging and leak testing",
      "System commissioning and testing",
      "Energy efficiency optimization",
      "Compliance with safety regulations",
    ],
    products: [
      "Commercial refrigeration units",
      "Compressors and condensers",
      "Evaporators",
      "Control systems",
      "Display cases",
      "Reach-in coolers",
    ],
    images: [
      "/ref-installation.jpg",
      "/modern-commercial-restaurant-walk-in-cooler-instal.jpg",
      "/refrigeration-maintenance.jpg",
      
    ],
  },
  "airconditioning-systems-services": {
    icon: Wind,
    title: "Airconditioning Systems Services",
    description:
      "Complete air conditioning services including installation, maintenance, and emergency repairs. Keep your business comfortable year-round with reliable HVAC solutions.",
    overview:
      "KORI provides comprehensive air conditioning services for commercial and industrial spaces. Our services include new system installation, regular maintenance programs, system upgrades, and emergency repair services to ensure optimal climate control for your business environment.",
    scope: [
      "Commercial HVAC installation",
      "Air conditioning system design",
      "Preventive maintenance contracts",
      "System repairs and troubleshooting",
      "Energy efficiency assessments",
      "Aircon cleaning and quality improvement",
      "Ductwork installation and repair",
      "On-call emergency service",
    ],
    products: [
      "Commercial AC units",
      "Rooftop HVAC systems",
      "Split systems",
      "VRF systems",
      "Ductwork",
      "Thermostats and controls",
    ],
    images: ["/aircon-cleaning-service.jpg", "/aircon-cleaning-service-2.png", "/aircon-services-3.jpg"],
  },
  "maintenance-repair-troubleshooting": {
    icon: Wrench,
    title: "Maintenance, Repair & Troubleshooting",
    description:
      "Expert maintenance, repair, and troubleshooting services to keep your refrigeration and cooling systems running at peak performance. Minimize downtime and extend equipment life.",
    overview:
      "Our maintenance and repair services are designed to prevent breakdowns, extend equipment life, and minimize operational disruptions. We offer scheduled preventive maintenance programs, emergency repair services, and comprehensive troubleshooting to quickly identify and resolve issues.",
    scope: [
      "Preventive maintenance programs",
      "On-call emergency repair services",
      "System diagnostics and troubleshooting",
      "Component replacement and upgrades",
      "Performance optimization",
      "Refrigerant leak detection and repair",
      "Electrical system repairs",
      "Regular inspections and testing",
    ],
    products: [
      "Replacement parts and components",
      "Filters and belts",
      "Compressor rebuilds",
      "Motor replacements",
      "Control boards",
      "Sensors and thermostats",
    ],
    images: ["", "", ""],
  },
  "parts-components-supply": {
    icon: Settings,
    title: "Parts & Components Supply",
    description:
      "High-quality parts and components supply for all your refrigeration, air conditioning, and cooling system needs. Fast delivery and competitive pricing.",
    overview:
      "KORI supplies genuine OEM parts and high-quality aftermarket components for all major refrigeration and HVAC brands. Our parts and components ensures availability of the parts you need to keep your systems running. We offer competitive pricing and fast delivery to minimize downtime.",
    scope: [
      "Genuine OEM parts supply",
      "Quality aftermarket components",
      "Compressors and condensers",
      "Evaporators and coils",
      "Controls and thermostats",
      "Refrigerants and chemicals",
      "Filters and accessories",
      "Fast delivery service",
    ],
    products: [
      "Compressors",
      "Condensing units",
      "Evaporator coils",
      "Expansion valves",
      "Thermostats",
      "Pressure switches",
      "Refrigerants",
      "Insulation materials",
    ],
    images: [
      "",
      "",
      "",
    ],
  },
  "site-preparation-panel-assembly": {
    icon: Warehouse,
    title: "Site Preparation & Insulated Panel Assembly",
    description:
      "Professional site preparation and insulated panel assembly services for optimal cold storage installation. Ensure proper foundation and insulation for maximum efficiency.",
    overview:
      "Proper site preparation and panel assembly are critical for the success of any cold storage installation. KORI provides comprehensive site assessment, preparation, and insulated panel assembly services to ensure your cold storage facility is built to last with optimal thermal performance.",
    scope: [
      "Site assessment and planning",
      "Foundation preparation",
      "Floor leveling and drainage",
      "Insulated panel assembly",
      "Panel sealing and finishing",
      "Vapor barrier installation",
      "Structural support installation",
      "Quality assurance inspections",
    ],
    products: [
      "Insulated wall panels",
      "Insulated ceiling panels",
      "Floor insulation",
      "Panel sealants",
      "Vapor barriers",
      "Structural supports",
      "Door frames",
      "Installation hardware",
    ],
    images: [
      "",
      "",
      "",
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const service = servicesData[params.slug]

  useEffect(() => {
    if (!service) {
      router.push("/services")
    }
  }, [service, router])

  if (!service) {
    return null
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Service Overview</h2>
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
                      <a href="tel:+639283442044" className="hover:text-primary transition-colors">
                        (63) 928-344-2044
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Email:</span>{" "}
                      <a href="mailto:admin@korisystems.com" className="hover:text-primary transition-colors">
                        admin@korisystems.com
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
