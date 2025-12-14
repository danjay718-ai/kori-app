"use client"

import { CheckCircle2, Award, Clock } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience in commercial refrigeration",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for urgent repairs and maintenance",
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "All work backed by our comprehensive warranty and satisfaction guarantee",
    },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Why Choose Us
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Excellence in Every Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            With decades of combined experience, we deliver exceptional refrigeration and cooling solutions that keep
            your business running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-card p-10 rounded-2xl border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 group-hover:bg-primary group-hover:scale-110 rounded-2xl mb-6 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
