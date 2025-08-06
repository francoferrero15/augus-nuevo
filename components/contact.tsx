"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola! Soy ${formData.name}. ${formData.message}. Mi teléfono: ${formData.phone}, Email: ${formData.email}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/1154852128?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contactanos</h2>
          <p className="text-xl text-gray-300">
            Estamos aquí para ayudarte con todas tus necesidades de reciclaje industrial en Buenos Aires
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                  <p className="text-gray-300">+54 11 5485-2128</p>
                  <p className="text-sm text-gray-400">Línea directa para cotizaciones</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">info@rag.com.ar</p>
                  <p className="text-sm text-gray-400">Respuesta en menos de 24hs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                  <p className="text-gray-300">Buenos Aires, Argentina</p>
                  <p className="text-sm text-gray-400">Cobertura en toda la región metropolitana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-sm text-gray-400">Emergencias 24/7 disponibles</p>
                </div>
              </div>
            </div>

            {/* WhatsApp directo */}
            <Card className="mt-8 bg-green-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white mr-3" />
                  <h4 className="text-lg font-bold text-white">WhatsApp Directo</h4>
                </div>
                <p className="text-white mb-4">
                  ¿Necesitas una cotización rápida? Contáctanos directamente por WhatsApp para respuesta inmediata
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

          {/* Formulario de contacto */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                  >
                    Enviar Mensaje por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
