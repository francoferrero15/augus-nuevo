"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hola! Me llamo ${formData.name}. ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/1154852128?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contacto" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contactanos</h2>
          <p className="text-xl text-gray-300">
            Estamos aquí para ayudarte con todas tus necesidades de reciclaje industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                  <p className="text-gray-300">+54 11 5485-2128</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">info@rag.com.ar</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                  <p className="text-gray-300">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <Card className="bg-green-600 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white mr-3" />
                  <h4 className="text-lg font-bold text-white">WhatsApp Directo</h4>
                </div>
                <p className="text-green-100 mb-4">
                  ¿Necesitas una respuesta rápida? Contáctanos directamente por WhatsApp
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                  className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tu número de teléfono"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                >
                  Enviar Mensaje por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
