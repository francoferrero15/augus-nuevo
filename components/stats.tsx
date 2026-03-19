'use client'

import { useEffect, useState } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      number: "10+",
      label: "Años de Experiencia",
      description: "Líderes en reciclado de chatarra"
    },
    {
      number: "1000+",
      label: "Toneladas Recicladas",
      description: "Metales procesados mensualmente"
    },
    {
      number: "24/7",
      label: "Disponibilidad",
      description: "Servicio continuo de compra"
    },
    {
      number: "100%",
      label: "Reciclaje Responsable",
      description: "Certificación ISO 14001"
    }
  ]

  return (
    <section id="stats-section" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Números Hablan</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de una década transformando residuos metálicos en recursos valiosos con compromiso ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-green-100 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional con certificaciones */}
        <div className="mt-16 text-center">
          <div className="bg-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Certificaciones y Compromisos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ISO</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">ISO 14001</h4>
                  <p className="text-gray-300 text-sm">Gestión Ambiental</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">♻️</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Reciclaje Responsable</h4>
                  <p className="text-gray-300 text-sm">Compromiso Ambiental</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🏆</span>
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
