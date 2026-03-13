"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const stats = [
    { value: "25+", label: "Años de experiencia" },
    { value: "100%", label: "Destrucción certificada" },
    { value: "24/7", label: "Servicio disponible" },
    { value: "AMBA", label: "Cobertura operativa" },
  ]

  return (
    <div className="relative min-h-screen bg-[#1a2332] overflow-hidden">
      {/* Orange top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#059669]"></div>
      
      {/* Industrial grid pattern */}
      <div className="absolute inset-0 industrial-pattern"></div>
      
      {/* Diagonal orange accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-[#059669]/10 hidden lg:block"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
      ></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 md:pt-40 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#263547] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
            <span className="text-gray-300 text-sm">25 años en el mercado · Buenos Aires</span>
          </div>
          
          {/* Heading */}
          <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-tight mb-6">
            Gestión integral de{" "}
            <span className="text-[#059669]">scrap metálico</span>{" "}
            industrial
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Destrucción certificada, valorización y comercialización de materiales. 
            Flota propia, logística especializada y más de 25 años de trayectoria en Argentina.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-[#059669] hover:bg-[#047857] text-white font-semibold uppercase tracking-wide px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#contacto">Solicitar cotización</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-[#1a2332] font-semibold uppercase tracking-wide px-8 py-6 text-base bg-transparent transition-all duration-300"
            >
              <Link href="#servicios">Ver servicios</Link>
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[#263547] rounded-lg p-5 text-center border border-[#3a4a5f]/50 hover:border-[#059669]/30 transition-all duration-300"
              >
                <div className="font-[family-name:var(--font-barlow-condensed)] text-3xl md:text-4xl font-bold text-[#059669] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Orange bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#059669]"></div>
    </div>
  )
}
