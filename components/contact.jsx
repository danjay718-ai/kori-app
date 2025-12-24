"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "korilee760@gmail.com",
      href: "mailto:korilee760@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(760) 789-3639",
      href: "tel:+17607893639",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Serving Southern California",
      href: null,
    },
    {
      icon: Clock,
      label: "Hours",
      value: "24/7 Emergency Service",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Let's Talk
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Ready to discuss your refrigeration needs? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card p-6 sm:p-10 rounded-2xl border border-border shadow-xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">Send us a Message</h3>
            <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you shortly</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="rounded-xl resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full shadow-lg hover:shadow-xl transition-all">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 sm:p-10 rounded-2xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Contact Information</h3>
              <p className="text-muted-foreground mb-8">Reach out to Kori Lee and the KORI team</p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">{item.label}</div>
                        <div className="text-base font-semibold text-foreground">{item.value}</div>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:bg-secondary/50 p-4 rounded-xl transition-all duration-200 -m-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="p-4 -m-4">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-10 rounded-2xl border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">About the Owner</h3>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Kori Lee brings years of expertise in commercial refrigeration and HVAC systems. Committed to providing
                top-quality service and building lasting relationships with clients across Southern California.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
