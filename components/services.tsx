"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Recycle, Truck, Factory } from "lucide-react"

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
]

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para el manejo responsable de residuos industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="bg-green-600 p-4 rounded-full mb-4 mx-auto w-fit">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
