"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Truck, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="Reciclaje de chatarra metálica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Recycle className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Reciclaje responsable</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transformamos tu{" "}
            <span className="text-emerald-400">chatarra</span>{" "}
            en valor
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Somos líderes en reciclaje de metales en Buenos Aires. Compramos chatarra al mejor precio y 
            contribuimos al cuidado del medio ambiente con más de 25 años de experiencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8">
              <Link href="#contacto" className="flex items-center gap-2">
                Solicitar cotización
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8">
              <Link href="#servicios">Ver servicios</Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-white font-semibold block">Retiro gratis</span>
                <span className="text-gray-400 text-sm">En toda la zona</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-white font-semibold block">25+ años</span>
                <span className="text-gray-400 text-sm">De experiencia</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                <Recycle className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-white font-semibold block">Eco-friendly</span>
                <span className="text-gray-400 text-sm">100% reciclable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
