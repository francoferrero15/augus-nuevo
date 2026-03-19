'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Send, CheckCircle, Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function Hero() {
  const [formData, setFormData] = useState({ nombre: '', telefono: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!formData.nombre.trim() || !formData.telefono.trim()) {
      setError('Por favor completá todos los campos')
      return
    }

    setIsSubmitting(true)

    try {
      const supabase = createClient()
      const { error: dbError } = await supabase.from('contacts').insert({
        nombre: formData.nombre,
        telefono: formData.telefono,
        mensaje: 'Lead rápido desde Hero'
      })

      if (dbError) throw dbError

      setIsSubmitted(true)
      setFormData({ nombre: '', telefono: '' })
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setError('Error al enviar. Intentá de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      {/* Dot pattern background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md mb-8">
          <span className="text-green-300 text-sm font-medium">Líderes en Reciclado de Chatarra</span>
        </div>

        {/* Título principal optimizado para SEO */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Reciclado</span>
          <br />
          <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Responsable
          </span>
          <br />
          <span className="text-white">de Metales</span>
        </h1>

        {/* Descripción optimizada con palabras clave */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transformamos chatarra en oportunidades. Reciclaje responsable de metales ferrosos y no ferrosos 
          en Buenos Aires con más de 10 años de experiencia y compromiso ambiental.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Cotización
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={scrollToServices}
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            Ver Servicios
          </Button>
        </div>

        {/* Mini formulario de captura de leads */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-white/90 text-sm mb-4 font-medium">
              Dejanos tus datos y te contactamos en menos de 24hs
            </p>
            
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 py-4 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Recibimos tu consulta. Te contactamos pronto.</span>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-green-500 focus:border-green-500"
                  disabled={isSubmitting}
                />
                <Input
                  type="tel"
                  placeholder="Tu teléfono"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-green-500 focus:border-green-500"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar
                    </>
                  )}
                </Button>
              </form>
            )}
            
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </div>
        </div>

        {/* Tarjetas de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">10+</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Años de Experiencia</h3>
            <p className="text-gray-300 text-sm">Líderes en reciclado de chatarra y desguace industrial</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">24/7</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Servicio Continuo</h3>
            <p className="text-gray-300 text-sm">Disponibilidad total para compra de metales</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">GBA</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Cobertura Total</h3>
            <p className="text-gray-300 text-sm">Servicio en todo el Gran Buenos Aires</p>
          </div>
        </div>
      </div>
    </section>
  )
}
