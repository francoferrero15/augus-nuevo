"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Recycle, Truck, Factory } from 'lucide-react'

const services = [
  {
    icon: Recycle,
    title: "Reciclaje de Metales Ferrosos y No Ferrosos",
    description: "Procesamiento especializado de chatarra metálica con certificación ambiental ISO 14001. Compramos y procesamos todo tipo de metales industriales.",
    features: ["Hierro y Acero Industrial", "Aluminio y Aleaciones", "Cobre y Bronce", "Metales Preciosos"],
  },
  {
    icon: Truck,
    title: "Logística y Transporte de Residuos",
    description: "Servicio integral de recolección, transporte y logística de residuos industriales con flota propia especializada y documentación completa.",
    features: ["Retiro en Planta Industrial", "Transporte Certificado", "Documentación Ambiental", "Seguimiento GPS en Tiempo Real"],
  },
  {
    icon: Factory,
    title: "Desguace y Desmantelamiento Industrial",
    description: "Desmantelamiento profesional de maquinaria industrial, estructuras metálicas y equipos obsoletos con valorización máxima de materiales.",
    features: ["Maquinaria Pesada Industrial", "Estructuras Metálicas", "Equipos y Líneas de Producción", "Demolición Selectiva Certificada"],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios de Reciclaje Industrial</h2>
          <p className="text-xl text-white max-w-4xl mx-auto">
            Ofrecemos soluciones integrales para la gestión responsable de residuos industriales en Buenos Aires. 
            Servicios certificados de reciclaje de metales, desguace de vehículos y valorización de chatarra con 
            compromiso ambiental y económico.
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
                  Consultar Servicio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección adicional de beneficios SEO */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">¿Por qué elegir R.A.G para tu empresa?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <h4 className="font-semibold mb-2">Experiencia Comprobada</h4>
                <p className="text-sm text-gray-300">Más de 10 años especializados en reciclaje industrial en Buenos Aires</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Certificación Ambiental</h4>
                <p className="text-sm text-gray-300">Procesos certificados ISO 14001 y cumplimiento normativo</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mejores Precios</h4>
                <p className="text-sm text-gray-300">Cotizaciones competitivas para compra de chatarra y metales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
