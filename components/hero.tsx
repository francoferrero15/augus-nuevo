"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Truck, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-green-700"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-green-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-green-600/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ✨ Líderes en Reciclaje Industrial
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white block">Soluciones</span>
            <span className="text-green-400 block drop-shadow-lg">Industriales</span>
            <span className="text-white block">de Reciclaje</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transformamos residuos industriales en oportunidades. Servicio profesional, eficiente y comprometido con el
            medio ambiente desde hace más de 10 años.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/1154852128", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-lg px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-6 rounded-full"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Recycle, title: "Reciclaje Responsable", desc: "Procesos certificados ISO 14001" },
              { icon: Truck, title: "Logística Integral", desc: "Flota propia especializada" },
              { icon: Shield, title: "Servicio Confiable", desc: "Más de 10 años de experiencia" },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full mb-4 mx-auto w-fit group-hover:shadow-lg transition-shadow">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
