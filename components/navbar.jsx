"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoIcon from "@/components/ui/logo-icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-3xl font-bold text-primary tracking-tight hover:text-accent transition-colors drop-shadow-sm"
            >
              <LogoIcon size={32} />
              <span>KORI</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              size="default"
              className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <Link href={isHomePage ? "#contact" : "/#contact"}>Get Quote</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-background/95 backdrop-blur-xl border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button size="default" className="w-full rounded-full" asChild>
              <Link href={isHomePage ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
