"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola! Mi nombre es ${formData.name}. ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`
    window.open(`https://wa.me/1154852128?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades de reciclaje industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Teléfono", info: "+54 11 5485-2128", action: "tel:+541154852128" },
                  { icon: Mail, title: "Email", info: "info@rag.com.ar", action: "mailto:info@rag.com.ar" },
                  { icon: MapPin, title: "Ubicación", info: "Buenos Aires, Argentina", action: null },
                  { icon: Clock, title: "Horarios", info: "Lunes a Viernes: 8:00 - 18:00", action: null },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      {item.action ? (
                        <a href={item.action} className="text-gray-300 hover:text-green-400 transition-colors">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-600 border-green-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp Directo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-100 mb-4">
                  ¿Necesitas una respuesta rápida? Contáctanos directamente por WhatsApp
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                  className="bg-white text-green-600 hover:bg-gray-100 w-full"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nombre *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  Enviar Mensaje por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
