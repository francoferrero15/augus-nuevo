'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, Award, Truck, Recycle } from 'lucide-react'

export default function About() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="nosotros" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🏭 Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Más de 10 años transformando 
              <span className="text-green-400"> residuos en recursos</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              R.A.G es una empresa líder en reciclado de chatarra y desguace industrial en Buenos Aires. 
              Nos especializamos en la compra, procesamiento y reciclaje responsable de metales ferrosos y no ferrosos.
            </p>

            {/* Lista de características */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Experiencia Comprobada</h4>
                  <p className="text-gray-300 text-sm">Más de una década en el sector del reciclaje industrial</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Certificación Ambiental</h4>
                  <p className="text-gray-300 text-sm">Procesos certificados ISO 14001 para gestión ambiental</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Logística Integral</h4>
                  <p className="text-gray-300 text-sm">Flota propia y servicio completo de retiro y transporte</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Mejores Precios</h4>
                  <p className="text-gray-300 text-sm">Cotizaciones competitivas para todos los tipos de metales</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Grid de características visuales */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <Award className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Certificación ISO</h3>
              <p className="text-green-100 text-sm">
                Gestión ambiental certificada para reciclaje responsable
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-6 text-white border border-slate-500">
              <Truck className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Logística Propia</h3>
              <p className="text-gray-300 text-sm">
                Flota especializada para retiro y transporte de materiales
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-6 text-white border border-slate-500">
              <Recycle className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Reciclaje Total</h3>
              <p className="text-gray-300 text-sm">
                Procesamiento completo de metales ferrosos y no ferrosos
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <h3 className="text-xl font-bold mb-2">Disponibilidad</h3>
              <p className="text-green-100 text-sm">
                Servicio continuo para atender tus necesidades
              </p>
            </div>
          </div>
        </div>

        {/* Sección de misión y visión */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
            <p className="text-gray-300 leading-relaxed">
              Transformar residuos metálicos en recursos valiosos a través de procesos de reciclaje responsables, 
              contribuyendo a la economía circular y la preservación del medio ambiente en Buenos Aires.
            </p>
          </div>

          <div className="bg-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
            <p className="text-gray-300 leading-relaxed">
              Ser la empresa líder en reciclado de chatarra en Argentina, reconocida por nuestra excelencia operativa, 
              compromiso ambiental y contribución al desarrollo sostenible de la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
