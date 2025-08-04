"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    content: "+54 11 5485-2128",
    action: "tel:+541154852128",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@rag.com.ar",
    action: "mailto:info@rag.com.ar",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Buenos Aires, Argentina",
    action: "#",
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lun - Dom: 24/7",
    action: "#",
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para una cotización personalizada o consulta técnica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-600 p-3 rounded-full">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://www.instagram.com/tuusuario", "_blank")}
                  className="border-gray-600 text-white hover:bg-gray-800 flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Button>
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-red-900 border-red-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Servicio de Emergencia 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-100 mb-4">Para situaciones urgentes que requieren atención inmediata</p>
                <Button
                  className="bg-red-600 hover:bg-red-700 w-full"
                  onClick={() => window.open("tel:+541154852128", "_blank")}
                >
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Solicitar Cotización</CardTitle>
                <p className="text-gray-300">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nombre *</label>
                    <Input
                      placeholder="Tu nombre completo"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                    <Input
                      placeholder="Nombre de tu empresa"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono *</label>
                    <Input
                      placeholder="+54 11 1234-5678"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Material</label>
                  <Input
                    placeholder="Ej: Chatarra ferrosa, maquinaria industrial, etc."
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                  <Textarea
                    placeholder="Describe tu proyecto, cantidad estimada, ubicación y cualquier detalle relevante..."
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Solicitud
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-center">Nuestra Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-300">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Buenos Aires, Argentina</p>
                  <p className="text-sm">Cobertura en todo el país</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
