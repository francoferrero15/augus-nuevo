"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Truck, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-700 via-gray-600 to-green-700 flex items-center justify-center overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          {/* Badge superior */}
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full mb-8">
            <Recycle className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">Líderes en Reciclaje Industrial Buenos Aires</span>
          </div>

          {/* Título principal optimizado para SEO */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">Soluciones</span>
            <br />
            <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Industriales
            </span>
            <br />
            <span className="text-white">de Reciclaje</span>
          </h1>

          {/* Descripción optimizada con palabras clave */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transformamos residuos industriales en oportunidades de valor en Buenos Aires. 
            Servicio profesional de reciclaje de metales, desguace de vehículos y gestión integral 
            de chatarra con certificación ambiental desde hace más de 10 años.
          </p>

          {/* Botón de acción principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/1154852128", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Cotización Gratuita
            </Button>
          </div>
        </div>

        {/* Tarjetas de características principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-600/20 p-4 rounded-full mb-4 mx-auto w-fit group-hover:bg-green-600/30 transition-colors">
                <Recycle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reciclaje Responsable</h3>
              <p className="text-gray-300 text-sm">Procesos certificados ISO 14001 para reciclaje de metales ferrosos y no ferrosos</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-600/20 p-4 rounded-full mb-4 mx-auto w-fit group-hover:bg-green-600/30 transition-colors">
                <Truck className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Logística Integral</h3>
              <p className="text-gray-300 text-sm">Flota propia especializada para recolección y transporte de residuos industriales</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-600/20 p-4 rounded-full mb-4 mx-auto w-fit group-hover:bg-green-600/30 transition-colors">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Servicio Confiable</h3>
              <p className="text-gray-300 text-sm">Más de 10 años de experiencia en desguace industrial y gestión ambiental</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
