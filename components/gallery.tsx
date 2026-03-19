"use client"

import Image from "next/image"

export default function Gallery() {
  const images = [
    { src: "/placeholder.jpg", alt: "Instalaciones de reciclaje" },
    { src: "/placeholder.jpg", alt: "Proceso de clasificación" },
    { src: "/placeholder.jpg", alt: "Maquinaria especializada" },
    { src: "/placeholder.jpg", alt: "Materiales reciclados" },
    { src: "/placeholder.jpg", alt: "Camión de retiro" },
    { src: "/placeholder.jpg", alt: "Equipo de trabajo" },
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide">Galería</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Conocé nuestras instalaciones
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contamos con instalaciones modernas y equipamiento de última generación para 
            procesar todo tipo de materiales metálicos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-[400px] md:h-[500px]" : "h-[200px] md:h-[240px]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
