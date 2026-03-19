'use client'

import { useEffect, useState, useRef } from 'react'

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

export default function Stats() {
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

  return (
    <section ref={sectionRef} id="stats-section" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Números Hablan</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de una década transformando residuos metálicos en recursos valiosos con compromiso ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30 border-b-4 border-green-400">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {yearsCount}+
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Años de Experiencia
              </h3>
              <p className="text-green-100 text-sm">
                Líderes en reciclado de chatarra
              </p>
            </div>
          </div>

          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30 border-b-4 border-green-400">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {tonCount}+
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Toneladas Recicladas
              </h3>
              <p className="text-green-100 text-sm">
                Metales procesados mensualmente
              </p>
            </div>
          </div>

          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30 border-b-4 border-green-400">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Disponibilidad
              </h3>
              <p className="text-green-100 text-sm">
                Servicio continuo de compra
              </p>
            </div>
          </div>

          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30 border-b-4 border-green-400">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {companiesCount}+
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Empresas Clientes
              </h3>
              <p className="text-green-100 text-sm">
                Confían en nosotros
              </p>
            </div>
          </div>
        </div>

        {/* Sección adicional con certificaciones */}
        <div className="mt-16 text-center">
          <div className="bg-slate-700 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-1 hover:ring-1 hover:ring-green-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Compromisos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">GBA</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Cobertura Total</h4>
                  <p className="text-gray-300 text-sm">Gran Buenos Aires</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Reciclaje Responsable</h4>
                  <p className="text-gray-300 text-sm">Compromiso Ambiental</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Líderes del Sector</h4>
                  <p className="text-gray-300 text-sm">Buenos Aires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Recycle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function Trophy({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15c-3.866 0-7-1.79-7-4V5a2 2 0 012-2h10a2 2 0 012 2v6c0 2.21-3.134 4-7 4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 00-2 2v1a2 2 0 002 2h1m13-5a2 2 0 012 2v1a2 2 0 01-2 2h-1m-6 8v2m-3 0h6" />
    </svg>
  )
}
