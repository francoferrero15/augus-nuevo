"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, ShoppingCart, Truck, Factory, Shield, Clock, MapPin } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Trabajos que Realizamos",
    items: [
      "Retiro de scraps industriales",
      "Desguace industrial completo",
      "Corte de maquinaria pesada",
      "Desmantelamiento de buques",
      "Prensado automotriz",
      "Demolición controlada",
    ],
    color: "bg-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "Materiales que Compramos",
    items: [
      "Chatarra ferrosa y no ferrosa",
      "Desguace industrial",
      "Maquinaria en desuso",
      "Metales preciosos",
      "Viruta metálica",
      "Equipos electrónicos",
    ],
    color: "bg-green-600",
  },
]

const features = [
  {
    icon: Truck,
    title: "Logística Integral",
    description: "Retiro, transporte y procesamiento con flota propia",
  },
  {
    icon: Factory,
    title: "Capacidad Industrial",
    description: "Equipos especializados para grandes volúmenes",
  },
  {
    icon: Shield,
    title: "Certificaciones",
    description: "Cumplimos todas las normativas ambientales",
  },
  {
    icon: Clock,
    title: "Servicio 24/7",
    description: "Disponibilidad completa para emergencias",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para la gestión de residuos industriales y reciclaje de materiales
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`${service.color} text-white`}>
                <div className="flex items-center gap-3">
                  <service.icon className="w-8 h-8" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Solicitar Cotización</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">¿Necesitas una Solución Personalizada?</h3>
            <p className="text-xl mb-6 text-green-100">
              Nuestro equipo de expertos está listo para evaluar tu proyecto y ofrecerte la mejor propuesta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                className="bg-green-50 text-green-600 hover:bg-green-100"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Visita Técnica Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
