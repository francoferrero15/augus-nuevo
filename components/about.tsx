"use client"

import Image from "next/image"
import { CheckCircle2, Leaf, Award, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: "Compromiso ambiental",
      description: "Reciclamos de manera responsable, reduciendo el impacto ambiental y promoviendo la economía circular."
    },
    {
      icon: Award,
      title: "Calidad garantizada",
      description: "Procesamos materiales bajo estrictos estándares de calidad para garantizar la satisfacción de nuestros clientes."
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description: "Brindamos un servicio cercano y profesional, adaptándonos a las necesidades de cada cliente."
    }
  ]

  const benefits = [
    "Mejor precio del mercado",
    "Retiro sin costo en zona",
    "Pago inmediato",
    "Pesaje certificado",
    "Facturación legal",
    "Servicio 24/7 disponible"
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.jpg"
                alt="Instalaciones de R.A.G"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">25+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Años de experiencia</p>
                  <p className="text-sm text-gray-600">en el mercado argentino</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-emerald-600 font-semibold uppercase tracking-wide">Sobre nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Líderes en reciclaje de metales en Buenos Aires
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              En R.A.G nos especializamos en la compra y reciclaje de chatarra metálica. 
              Con más de 25 años de experiencia, somos tu mejor opción para convertir tus 
              materiales en valor mientras contribuyes al cuidado del medio ambiente.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Beneficios de trabajar con nosotros:</h4>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
