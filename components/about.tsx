"use client"

import { Building2, FileText, Truck } from "lucide-react"

export default function About() {
  const features = [
    {
      title: "Equipamiento especializado",
      description: "Camiones, hidrogrúas, prensas móviles y equipos Roll Off/On propios."
    },
    {
      title: "Auditorías de clientes",
      description: "Aceptamos auditorías de clientes para verificar nuestros procesos y operatoria."
    },
    {
      title: "Certificados privados",
      description: "Emitimos certificados de disposición final, tratamiento y trazabilidad de forma privada."
    },
    {
      title: "Scrap mixto aceptado",
      description: "Recibimos todos los tipos de metales y materiales mixtos en cualquier estado."
    }
  ]

  const reasons = [
    {
      icon: Building2,
      title: "25 años de trayectoria",
      description: "Experiencia comprobada en el sector industrial argentino."
    },
    {
      icon: FileText,
      title: "Documentación completa",
      description: "Certificados de disposición final y trazabilidad para cumplimiento corporativo."
    },
    {
      icon: Truck,
      title: "Logística integral",
      description: "Retiro en planta con flota propia: Roll Off/On, hidrogrúas y semirremolques."
    }
  ]

  return (
    <div className="bg-[#f4f5f6] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#e85d00]"></div>
              <span className="text-[#e85d00] font-semibold uppercase text-sm tracking-wide">
                Quiénes somos
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] uppercase mb-6">
              Metal Solver:{" "}
              <span className="text-[#e85d00]">25 años</span>{" "}
              en gestión de scrap
            </h2>
            
            {/* Body Text */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Somos una empresa argentina especializada en la comercialización, gestión integral, 
              valorización y destrucción certificada de scrap metálico. Ubicados en Av. Monteverde 2191, 
              San Francisco Solano, Quilmes, operamos con flota propia y equipamiento especializado 
              para dar respuesta eficiente a grandes volúmenes industriales.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-5 border-l-4 border-[#e85d00] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold text-[#1a2332] uppercase mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Sticky Card */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="bg-[#1a2332] rounded-xl p-8 md:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-[#e85d00] rounded-full"></div>
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl md:text-3xl font-bold text-white uppercase">
                  ¿Por qué elegirnos?
                </h3>
              </div>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e85d00] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold text-white uppercase mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
