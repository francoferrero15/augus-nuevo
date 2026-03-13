"use client"

import Link from "next/link"
import { Recycle, Truck, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Recycle,
      title: "Destrucción y valorización de scrap",
      description: "Destrucción certificada y valorización de materiales metálicos industriales con venta como materia prima. Sin proceso de recupero de producto terminado.",
      features: [
        "Destrucción certificada",
        "Venta como materia prima",
        "Certificado de disposición final",
        "Scrap metálico de todo tipo"
      ]
    },
    {
      icon: Truck,
      title: "Logística especializada",
      description: "Flota propia para retiro, transporte y procesamiento de materiales en planta del cliente o en nuestras instalaciones.",
      features: [
        "Equipos Roll Off / Roll On",
        "Hidrogrúas especializadas",
        "Semirremolques",
        "Prensas móviles in situ"
      ]
    },
    {
      icon: Settings,
      title: "Gestión integral de materiales",
      description: "Gestión completa del proceso desde el retiro hasta la disposición final, con trazabilidad documentada y auditorías disponibles.",
      features: [
        "Auditorías de clientes",
        "Trazabilidad documental",
        "Scrap mixto aceptado",
        "Todos los metales"
      ]
    }
  ]

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#059669]"></div>
              <span className="text-[#059669] font-semibold uppercase text-sm tracking-wide">
                Nuestros servicios
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] uppercase">
              Soluciones <span className="text-[#059669]">integrales</span> para tu empresa
            </h2>
          </div>
          <Button 
            asChild
            className="bg-[#059669] hover:bg-[#047857] text-white font-semibold uppercase tracking-wide px-8 w-fit"
          >
            <Link href="#contacto">Solicitar cotización</Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="bg-[#1a2332] p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold text-white uppercase leading-tight">
                  {service.title}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-[#059669] rounded-full flex-shrink-0"></span>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
