"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Reciclaje de metales industriales",
    category: "Metales",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Procesamiento de residuos electrónicos",
    category: "Electrónicos",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Desmantelamiento de maquinaria",
    category: "Maquinaria",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Clasificación de chatarra",
    category: "Metales",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Planta de procesamiento",
    category: "Instalaciones",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Almacenamiento de materiales",
    category: "Almacén",
  },
]

const categories = ["Todos", "Metales", "Electrónicos", "Maquinaria", "Instalaciones", "Almacén"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "Todos" ? images : images.filter((img) => img.category === selectedCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="galeria" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Proyectos</h2>
          <p className="text-xl text-gray-600 mb-8">Conoce algunos de nuestros trabajos más destacados</p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <X className="h-8 w-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{filteredImages[selectedImage].alt}</p>
                <p className="text-sm opacity-75">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
