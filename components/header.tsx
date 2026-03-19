'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5491154852128?text=Hola, me interesa conocer más sobre sus servicios de reciclaje industrial', '_blank')
  }

  return (
    <header className="w-full bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      {/* Green accent line at top */}
      <div className="h-0.5 bg-green-500"></div>
      
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
              <span>Augustoguilhou@hotmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <MapPin className="h-4 w-4" />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className={`bg-slate-700/90 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
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

            {/* Botón WhatsApp with pulse */}
            <div className="hidden md:block relative">
              <Button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                WhatsApp
              </Button>
              {/* Pulse indicator */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
              </span>
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
