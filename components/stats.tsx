'use client'

import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4">
        {/* Servicios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Reciclaje Responsable</h3>
            <p className="text-gray-300">Procesamiento especializado de chatarra ferrosa y no ferrosa con certificación ambiental ISO 14001</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Logística Integral</h3>
            <p className="text-gray-300">Flota propia especializada para retiro, transporte y logística con seguimiento GPS en tiempo real</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Servicio Confiable</h3>
            <p className="text-gray-300">Más de 10 años de experiencia brindando soluciones integrales a empresas industriales</p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <Counter end={500} duration={2000} suffix="+" />
            </div>
            <p className="text-gray-300 font-medium">Clientes Satisfechos</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <Counter end={10000} duration={2500} suffix="T" />
            </div>
            <p className="text-gray-300 font-medium">Toneladas Procesadas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <Counter end={10} duration={1500} suffix="+" />
            </div>
            <p className="text-gray-300 font-medium">Años de Experiencia</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-gray-300 font-medium">Servicio Disponible</p>
          </div>
        </div>
      </div>
    </section>
  )
}
