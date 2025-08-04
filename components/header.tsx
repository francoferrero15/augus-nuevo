"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-gray-700 via-gray-600 to-green-700 shadow-lg">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+54 11 5485-2128</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@rag.com.ar</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">R.A.G</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Inicio", href: "#inicio" },
              { name: "Servicios", href: "#servicios" },
              { name: "Nosotros", href: "#nosotros" },
              { name: "Galería", href: "#galeria" },
              { name: "Contacto", href: "#contacto" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-green-300 transition-colors duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => window.open("https://wa.me/1154852128", "_blank")}
            className="hidden md:block bg-green-600 hover:bg-green-700"
          >
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Nosotros", href: "#nosotros" },
                { name: "Galería", href: "#galeria" },
                { name: "Contacto", href: "#contacto" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-300 transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                className="bg-green-600 hover:bg-green-700 w-fit"
              >
                WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
