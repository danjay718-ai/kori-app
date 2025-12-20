"use client"

import { ArrowLeft, Calendar, MapPin, Building, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const projectsData = {
  "restaurant-chain-refrigeration": {
    title: "Restaurant Chain Refrigeration",
    category: "Commercial",
    location: "Multiple locations, Southern California",
    date: "Completed Q2 2023",
    description:
      "Complete refrigeration system overhaul for a growing restaurant chain across 5 locations. Each site received custom walk-in coolers, freezers, and emergency backup systems to ensure uninterrupted operation.",
    overview:
      "This project involved coordinating installations across multiple locations while maintaining operational continuity for busy restaurant kitchens. We designed systems that maximized storage capacity while minimizing energy consumption.",
    systemType: "Walk-in Coolers & Freezers with Backup Systems",
    challenges: [
      "Tight installation schedule to minimize business disruption",
      "Custom sizing for each unique kitchen layout",
      "Integration with existing electrical systems",
      "Training staff at each location on proper usage",
    ],
    solutions: [
      "After-hours installation to avoid disrupting service",
      "Detailed on-site measurements and custom designs",
      "Professional electrical upgrades where needed",
      "Comprehensive training and documentation provided",
    ],
    results: [
      "Zero downtime during installation at all locations",
      "30% reduction in energy costs compared to old systems",
      "Increased storage capacity by 40%",
      "100% client satisfaction rating",
    ],
    images: [
      "/modern-commercial-restaurant-walk-in-cooler-instal.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "warehouse-cold-storage": {
    title: "Warehouse Cold Storage",
    category: "Industrial",
    location: "Riverside County, CA",
    date: "Completed Q4 2022",
    description:
      "Designed and implemented a 10,000 square foot cold storage facility with advanced temperature monitoring and automated control systems for a major food distribution center.",
    overview:
      "This large-scale industrial project required careful planning and execution to create a reliable cold storage facility capable of maintaining precise temperatures across a vast space.",
    systemType: "Large-Scale Industrial Cold Storage",
    challenges: [
      "Managing temperature consistency across 10,000 sq ft",
      "Energy efficiency for continuous operation",
      "Automated monitoring and alerts",
      "Meeting strict food safety compliance standards",
    ],
    solutions: [
      "Multi-zone cooling with advanced sensors",
      "High-efficiency compressors and insulation",
      "24/7 cloud-based monitoring system",
      "Full documentation for regulatory compliance",
    ],
    results: [
      "Maintains ±1°F temperature accuracy throughout facility",
      "25% lower energy costs than industry average",
      "Real-time alerts prevent product loss",
      "Passed all food safety inspections",
    ],
    images: [
      "/large-industrial-warehouse-cold-storage-facility.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "grocery-store-hvac": {
    title: "Grocery Store HVAC",
    category: "Retail",
    location: "San Diego, CA",
    date: "Completed Q1 2023",
    description:
      "Complete HVAC system replacement and display refrigeration upgrade for a 15,000 sq ft grocery store, improving both customer comfort and product preservation.",
    overview:
      "This comprehensive project combined climate control for customer areas with specialized refrigeration for product displays, creating an efficient and comfortable shopping environment.",
    systemType: "Commercial HVAC & Display Refrigeration",
    challenges: [
      "Maintaining operations during renovation",
      "Balancing customer comfort with refrigeration needs",
      "Energy efficiency across multiple systems",
      "Coordinating HVAC and refrigeration controls",
    ],
    solutions: [
      "Phased installation to keep store open",
      "Zone-based climate control system",
      "Energy-efficient equipment throughout",
      "Integrated control system for all units",
    ],
    results: [
      "40% reduction in energy costs",
      "Improved product shelf life by 15%",
      "Enhanced customer comfort ratings",
      "ROI achieved within 3 years",
    ],
    images: [
      "/modern-grocery-store-refrigeration-display-cases.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "medical-facility-climate-control": {
    title: "Medical Facility Climate Control",
    category: "Healthcare",
    location: "Orange County, CA",
    date: "Completed Q3 2023",
    description:
      "Precision temperature control systems for pharmaceutical storage and medical equipment rooms requiring strict environmental conditions.",
    overview:
      "Healthcare facilities require precise climate control to protect sensitive pharmaceuticals and medical equipment. This project delivered reliable, compliant systems with redundant safety features.",
    systemType: "Precision Climate Control & Pharmaceutical Storage",
    challenges: [
      "Meeting strict pharmaceutical storage requirements",
      "Redundancy for critical areas",
      "Documentation for regulatory compliance",
      "Integration with facility monitoring systems",
    ],
    solutions: [
      "Dual-system redundancy for critical areas",
      "Precision temperature and humidity control",
      "Complete validation documentation",
      "Integration with hospital management system",
    ],
    results: [
      "100% regulatory compliance achieved",
      "Zero temperature excursions since installation",
      "Reduced pharmaceutical waste by 20%",
      "Improved equipment reliability",
    ],
    images: [
      "/medical-facility-hvac-system.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "hotel-kitchen-refrigeration": {
    title: "Hotel Kitchen Refrigeration",
    category: "Hospitality",
    location: "Palm Springs, CA",
    date: "Completed Q2 2024",
    description:
      "Commercial kitchen walk-in coolers, freezers, and display refrigeration for a luxury hotel with multiple dining venues and banquet facilities.",
    overview:
      "Luxury hotels demand reliable refrigeration systems to support multiple restaurants, bars, and event spaces. This project delivered comprehensive cooling solutions across all food service areas.",
    systemType: "Multi-Zone Commercial Kitchen Refrigeration",
    challenges: [
      "Multiple kitchens with different needs",
      "High-volume banquet operations",
      "Coordinating with hotel renovations",
      "Noise control for guest comfort",
    ],
    solutions: [
      "Custom systems for each venue",
      "Scalable capacity for events",
      "Installation during off-season",
      "Ultra-quiet equipment selected",
    ],
    results: [
      "Support for 500+ person events",
      "20% reduction in food waste",
      "Quieter than previous systems",
      "Enhanced kitchen efficiency",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "brewery-cooling-systems": {
    title: "Brewery Cooling Systems",
    category: "Industrial",
    location: "San Bernardino County, CA",
    date: "Completed Q1 2024",
    description:
      "Custom glycol cooling system for fermentation tanks and cold storage solutions for a craft brewery producing 5,000 barrels annually.",
    overview:
      "Breweries require precise temperature control during fermentation and storage. This project delivered specialized cooling systems tailored to the brewing process.",
    systemType: "Glycol Cooling & Cold Storage for Brewing",
    challenges: [
      "Precise temperature control for fermentation",
      "Glycol system for multiple tanks",
      "Cold storage for finished products",
      "Energy efficiency for 24/7 operation",
    ],
    solutions: [
      "Custom glycol chiller with zone controls",
      "Individual temperature management per tank",
      "Dedicated cold storage room",
      "High-efficiency equipment selection",
    ],
    results: [
      "Consistent fermentation temperatures within 1°F",
      "30% faster batch cooling times",
      "Increased production capacity",
      "Lower operating costs than expected",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <div className="space-y-6">
            <div className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              {project.category}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">{project.title}</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-muted-foreground text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary shrink-0" />
                <span>{project.systemType}</span>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{project.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                        <p className="text-muted-foreground text-sm sm:text-base">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Solutions</h2>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                        <p className="text-muted-foreground text-sm sm:text-base">{solution}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Results</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                      <p className="text-foreground font-medium text-sm sm:text-base">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 sm:p-8 bg-primary/5 border border-primary/20 rounded-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Start Your Project</h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Ready to discuss a similar project for your business? Get in touch with us today.
                  </p>
                  <Button size="lg" className="w-full rounded-full" asChild>
                    <Link href="/#contact">Get a Free Quote</Link>
                  </Button>
                </div>

                <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Project Details</h3>
                  <div className="space-y-4 text-sm sm:text-base">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="font-medium text-foreground">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Completion</p>
                      <p className="font-medium text-foreground">{project.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">System Type</p>
                      <p className="font-medium text-foreground">{project.systemType}</p>
                    </div>
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
