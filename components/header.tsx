"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
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

      {/* Main Navigation */}
      <nav className="bg-gradient-to-br from-gray-700 via-gray-600 to-green-700 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">R.A.G</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-white hover:text-green-300 transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-white hover:text-green-300 transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-white hover:text-green-300 transition-colors duration-200"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-white hover:text-green-300 transition-colors duration-200"
              >
                Contacto
              </button>
              <Button
                onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-green-300 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-white hover:text-green-300 transition-colors duration-200 text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-white hover:text-green-300 transition-colors duration-200 text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-white hover:text-green-300 transition-colors duration-200 text-left"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-white hover:text-green-300 transition-colors duration-200 text-left"
                >
                  Contacto
                </button>
                <Button
                  onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full w-fit"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
