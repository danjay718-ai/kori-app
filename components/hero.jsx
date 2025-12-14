"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Snowflake } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
            <Snowflake className="h-4 w-4 animate-spin-slow" />
            Professional Refrigeration Services
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] text-balance">
            Expert Cold Storage &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Refrigeration Solutions
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
            Providing reliable refrigeration, air conditioning, and cold storage services to businesses. Quality
            workmanship you can trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="text-base px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-10 py-6 rounded-full border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="tel:+17607893639">
                <Phone className="mr-2 h-5 w-5" />
                (760) 789-3639
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  )
}
