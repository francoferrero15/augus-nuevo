"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Recycle, Truck, Factory, Shield, Wrench, Users } from "lucide-react"

const services = [
  {
    icon: Recycle,
    title: "Reciclaje de Metales",
    description: "Procesamiento especializado de chatarra ferrosa y no ferrosa con certificación ambiental.",
    features: ["Hierro y Acero", "Aluminio", "Cobre", "Bronce"],
  },
  {
    icon: Truck,
    title: "Logística y Transporte",
    description: "Servicio integral de retiro, transporte y logística con flota propia especializada.",
    features: ["Retiro en planta", "Transporte especializado", "Documentación completa", "Seguimiento GPS"],
  },
  {
    icon: Factory,
    title: "Desguace Industrial",
    description: "Desmantelamiento profesional de maquinaria y estructuras industriales.",
    features: ["Maquinaria pesada", "Estructuras metálicas", "Equipos industriales", "Demolición selectiva"],
  },
  {
    icon: Shield,
    title: "Gestión Ambiental",
    description: "Manejo responsable de residuos con certificaciones ambientales vigentes.",
    features: ["ISO 14001", "Certificados de disposición", "Trazabilidad completa", "Informes ambientales"],
  },
  {
    icon: Wrench,
    title: "Servicios Técnicos",
    description: "Asesoramiento técnico especializado para optimizar procesos de reciclaje.",
    features: ["Consultoría técnica", "Análisis de materiales", "Optimización de procesos", "Capacitación"],
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Servicio 24/7 con atención personalizada para cada cliente y proyecto.",
    features: ["Atención 24/7", "Cotizaciones rápidas", "Seguimiento personalizado", "Soporte técnico"],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para el manejo responsable de residuos industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-500 transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent"
                  onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/1154852128", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
          >
            Solicitar Cotización Personalizada
          </Button>
        </div>
      </div>
    </section>
  )
}
