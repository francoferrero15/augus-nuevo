"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Procesamiento de chatarra industrial",
    category: "Procesamiento",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Grúa cargando material",
    category: "Logística",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Desmantelamiento de maquinaria",
    category: "Desguace",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Instalaciones de reciclaje",
    category: "Instalaciones",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Equipo de trabajo especializado",
    category: "Equipo",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Materiales clasificados",
    category: "Procesamiento",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Camión industrial cargando",
    category: "Logística",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Desguace de embarcaciones",
    category: "Desguace",
  },
]

const categories = ["Todos", "Procesamiento", "Logística", "Desguace", "Instalaciones", "Equipo"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

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
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería de Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más destacados y las instalaciones donde operamos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
                  <span className="text-sm bg-green-600 px-2 py-1 rounded">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{filteredImages[selectedImage].alt}</h3>
                <span className="text-sm bg-green-600 px-2 py-1 rounded">{filteredImages[selectedImage].category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
