"use client"

import { Recycle, Truck, Scale, FileCheck, Cog, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Recycle,
      title: "Compra de chatarra",
      description: "Compramos todo tipo de metales: hierro, aluminio, cobre, bronce, acero inoxidable y más.",
      features: ["Hierro y acero", "Aluminio", "Cobre y bronce", "Metales no ferrosos"]
    },
    {
      icon: Truck,
      title: "Retiro a domicilio",
      description: "Retiramos la chatarra directamente de tu ubicación sin costo adicional en toda la zona.",
      features: ["Sin cargo en zona", "Camiones equipados", "Horarios flexibles", "Respuesta rápida"]
    },
    {
      icon: Scale,
      title: "Pesaje certificado",
      description: "Contamos con balanzas calibradas y certificadas para garantizar un pesaje justo y transparente.",
      features: ["Balanzas certificadas", "Pesaje en origen", "Transparencia total", "Tickets detallados"]
    },
    {
      icon: FileCheck,
      title: "Facturación legal",
      description: "Emitimos facturas y toda la documentación necesaria para cumplir con los requisitos legales.",
      features: ["Facturas tipo A/B/C", "Remitos oficiales", "Certificados", "Gestión documental"]
    },
    {
      icon: Cog,
      title: "Procesamiento",
      description: "Procesamos y clasificamos los materiales para su posterior reciclaje y reutilización.",
      features: ["Clasificación", "Compactación", "Corte y preparación", "Gestión de residuos"]
    },
    {
      icon: Building2,
      title: "Servicio industrial",
      description: "Soluciones integrales para empresas e industrias con grandes volúmenes de material.",
      features: ["Contratos fijos", "Contenedores", "Logística integral", "Asesoramiento"]
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide">Nuestros servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Soluciones completas en reciclaje
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ofrecemos un servicio integral de compra, retiro y procesamiento de chatarra metálica 
            para particulares y empresas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <service.icon className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
