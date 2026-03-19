'use client'

import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Truck, Recycle, Clock } from 'lucide-react'

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])
  
  return count
}

export default function QuienesSomos() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const yearsCount = useCountUp(10, 2000, isVisible)
  const tonCount = useCountUp(1000, 2000, isVisible)
  const companiesCount = useCountUp(375, 2000, isVisible)

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="nosotros" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            {/* Green pill */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm mb-6">
              <span className="text-green-400 text-sm font-medium">Sobre R.A.G</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Más de 10 años transformando residuos en recursos
            </h2>
            
            {/* Body text */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              R.A.G es líder en reciclado de chatarra y desguace industrial en Buenos Aires, 
              comprometidos con la economía circular y el medio ambiente. Ofrecemos soluciones 
              integrales para la gestión responsable de metales ferrosos y no ferrosos.
            </p>

            {/* Stats 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {yearsCount}+
                </div>
                <p className="text-gray-400 text-sm">Años de Experiencia</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {tonCount}+
                </div>
                <p className="text-gray-400 text-sm">Toneladas Recicladas/mes</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  24/7
                </div>
                <p className="text-gray-400 text-sm">Disponibilidad</p>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {companiesCount}+
                </div>
                <p className="text-gray-400 text-sm">Empresas Clientes</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={scrollToContact}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Right Column - Feature Cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 rounded-2xl p-6 border border-white/10 hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
              <MapPin className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Cobertura en GBA</h3>
              <p className="text-gray-400 text-sm">
                Servicio en todo el Gran Buenos Aires
              </p>
            </div>

            <div className="bg-slate-700 rounded-2xl p-6 border border-white/10 hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
              <Truck className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Logística Propia</h3>
              <p className="text-gray-400 text-sm">
                Flota especializada para retiro y transporte
              </p>
            </div>

            <div className="bg-slate-700 rounded-2xl p-6 border border-white/10 hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
              <Recycle className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Reciclaje Responsable</h3>
              <p className="text-gray-400 text-sm">
                Compromiso ambiental certificado
              </p>
            </div>

            <div className="bg-slate-700 rounded-2xl p-6 border border-white/10 hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30">
              <Clock className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Servicio 24/7</h3>
              <p className="text-gray-400 text-sm">
                Disponibilidad total para empresas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
