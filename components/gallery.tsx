"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/placeholder.svg?height=300&width=400&text=Reciclaje+de+Metales",
    alt: "Reciclaje de Metales",
    category: "reciclaje",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Transporte+Especializado",
    alt: "Transporte Especializado",
    category: "logistica",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Desguace+Industrial",
    alt: "Desguace Industrial",
    category: "desguace",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Maquinaria+Pesada",
    alt: "Maquinaria Pesada",
    category: "desguace",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Chatarra+Clasificada",
    alt: "Chatarra Clasificada",
    category: "reciclaje",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Flota+de+Camiones",
    alt: "Flota de Camiones",
    category: "logistica",
  },
]

const categories = [
  { id: "todos", name: "Todos" },
  { id: "reciclaje", name: "Reciclaje" },
  { id: "logistica", name: "Logística" },
  { id: "desguace", name: "Desguace" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === "todos" ? images : images.filter((img) => img.category === selectedCategory)

  return (
    <section id="galeria" className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Galería de Trabajos</h2>
          <p className="text-lg text-gray-300 mb-8">Conoce algunos de nuestros proyectos y servicios realizados</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-green-600 hover:bg-green-700"
                    : "border-white/30 text-white hover:bg-white/10"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
