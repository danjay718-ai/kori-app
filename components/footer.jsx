import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">KORI</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional refrigeration and cooling solutions for businesses across Southern California.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+17607893639" className="hover:text-primary-foreground transition-colors">
                  Phone: (760) 789-3639
                </a>
              </li>
              <li>
                <a href="mailto:korilee760@gmail.com" className="hover:text-primary-foreground transition-colors">
                  Email: korilee760@gmail.com
                </a>
              </li>
              <li>24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80 text-sm">{new Date().getFullYear()} KORI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
