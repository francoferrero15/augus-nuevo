"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Truck, Shield } from "lucide-react"

const images = [
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Industrial background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Soluciones
            <span className="text-green-400 block">Industriales</span>
            de Reciclaje
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transformamos residuos industriales en oportunidades. Servicio profesional, eficiente y comprometido con el
            medio ambiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/1154852128", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reciclaje Responsable</h3>
              <p className="text-gray-300">Procesos certificados y ambientalmente responsables</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Logística Integral</h3>
              <p className="text-gray-300">Retiro, transporte y procesamiento completo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Servicio Confiable</h3>
              <p className="text-gray-300">Más de 10 años de experiencia en el sector</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
