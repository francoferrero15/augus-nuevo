'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm mb-8">
          <span className="text-green-300 text-sm font-medium">✨ Líderes en Reciclaje Industrial</span>
        </div>

        {/* Título principal con gradiente */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Soluciones</span>
          <br />
          <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Industriales
          </span>
          <br />
          <span className="text-white">de Reciclaje</span>
        </h1>

        {/* Descripción */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transformamos residuos industriales en oportunidades. Servicio profesional, eficiente y comprometido con el medio ambiente desde hace más de 10 años en Buenos Aires.
        </p>

        {/* Botón de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Cotización
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Tarjetas de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">10+</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Años de Experiencia</h3>
            <p className="text-gray-300 text-sm">Líderes en reciclaje industrial y desguace de vehículos</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">24/7</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Servicio Continuo</h3>
            <p className="text-gray-300 text-sm">Disponibilidad total para atender tus necesidades</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">ISO</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Certificación ISO 14001</h3>
            <p className="text-gray-300 text-sm">Gestión ambiental certificada y responsable</p>
          </div>
        </div>
      </div>
    </section>
  )
}
