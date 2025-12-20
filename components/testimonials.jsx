"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      company: "Pacific Fresh Foods",
      feedback:
        "KORI installed our walk-in coolers and the work was impeccable. Their team was professional, on-time, and the system has been running flawlessly for over two years.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      company: "Downtown Market & Deli",
      feedback:
        "We had an emergency refrigeration failure on a Friday night. KORI responded within hours and had us back up and running by morning. Absolutely saved our business.",
      rating: 5,
    },
    {
      name: "James Patterson",
      company: "Valley Distribution Center",
      feedback:
        "From design to installation, KORI handled our 15,000 sq ft cold storage project with expertise. Their attention to detail and commitment to quality is unmatched.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Client Testimonials
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Trusted by businesses across California for reliable refrigeration solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-base italic">"{testimonial.feedback}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-card-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
