"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="relative">
      {/* Barra superior de contacto */}
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

      {/* Navegación principal */}
      <nav className="bg-gray-800 text-white py-4 px-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-green-400">R.A.G</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:text-green-400 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="hover:text-green-400 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="hover:text-green-400 transition-colors font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="hover:text-green-400 transition-colors font-medium"
            >
              Contacto
            </button>
          </div>

          <Button
            onClick={() => window.open("https://wa.me/1154852128", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold"
          >
            WhatsApp
          </Button>
        </div>
      </nav>
    </header>
  )
}
