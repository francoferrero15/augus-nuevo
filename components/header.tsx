'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5491154852128?text=Hola, me interesa conocer más sobre sus servicios de reciclaje industrial', '_blank')
  }

  return (
    <header className="w-full bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      {/* Barra superior de contacto */}
      <div className="bg-green-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+54 11 5485-2128</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@rag.com.ar</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <MapPin className="h-4 w-4" />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="bg-slate-700/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">R.A.G</h1>
              <p className="text-xs text-green-300">Reciclaje y Gestión</p>
            </div>

            {/* Navegación desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="hidden md:block">
              <Button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                WhatsApp
              </Button>
            </div>

            {/* Botón menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-300 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white hover:text-green-300 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-white hover:text-green-300 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-white hover:text-green-300 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-white hover:text-green-300 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Contacto
                </button>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white w-full mt-2 rounded-full"
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
