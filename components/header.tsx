"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+54 11 5485-2128</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@rag.com.ar</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Servicio 24/7 - Cobertura Nacional</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-green-50 shadow-lg" : "bg-green-50/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl">R.A.G</div>
              <div className="ml-3 hidden md:block">
                <div className="text-gray-800 font-semibold">Reciclaje y Gestión</div>
                <div className="text-gray-600 text-sm">Soluciones Industriales</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Contacto
              </button>
              <Button
                onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                className="bg-green-600 hover:bg-green-700"
              >
                Cotizar Ahora
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-green-50 border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium w-full text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium w-full text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium w-full text-left"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("galeria")}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium w-full text-left"
                >
                  Galería
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium w-full text-left"
                >
                  Contacto
                </button>
                <div className="px-3 py-2">
                  <Button
                    onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                    className="bg-green-600 hover:bg-green-700 w-full"
                  >
                    Cotizar Ahora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
