"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    tipoMaterial: "",
    volumen: "",
    mensaje: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola! Soy ${formData.nombre} de ${formData.empresa}. 
    
Consulta: ${formData.mensaje}

Tipo de material: ${formData.tipoMaterial}
Volumen estimado: ${formData.volumen}
Teléfono: ${formData.telefono}
Email: ${formData.email}`
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/5491154852128?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 11 5485-2128",
      link: "tel:+5491154852128"
    },
    {
      icon: Mail,
      title: "Email",
      value: "Augustoguilhou@hotmail.com",
      link: "mailto:Augustoguilhou@hotmail.com"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Av. Monteverde 2191, San Francisco Solano, Quilmes",
      link: null
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Lun–Vie 8:00–18:00",
      link: null
    }
  ]

  return (
    <div className="bg-[#f4f5f6] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#059669]"></div>
            <span className="text-[#059669] font-semibold uppercase text-sm tracking-wide">
              Contacto
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] uppercase mb-4">
            Solicitar <span className="text-[#059669]">cotización</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Completá el formulario o contactanos directamente. Respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Contact Info Card */}
          <div className="bg-[#1a2332] rounded-xl p-8 md:p-10 shadow-xl">
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#059669] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 hover:text-[#059669] transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Button
              onClick={() => window.open("https://wa.me/5491154852128", "_blank")}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg">
            <div className="mb-6 pb-4 border-b-2 border-[#059669]">
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold text-[#1a2332] uppercase">
                Envianos tu consulta
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <Input
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <Input
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de material
                </label>
                <Select 
                  value={formData.tipoMaterial} 
                  onValueChange={(value) => setFormData({ ...formData, tipoMaterial: value })}
                >
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Seleccionar tipo de material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ferrosos">Ferrosos</SelectItem>
                    <SelectItem value="no-ferrosos">No ferrosos</SelectItem>
                    <SelectItem value="scrap-mixto">Scrap mixto</SelectItem>
                    <SelectItem value="maquinaria">Maquinaria</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Volumen estimado
                </label>
                <Input
                  name="volumen"
                  value={formData.volumen}
                  onChange={handleChange}
                  placeholder="Ej: 500 kg, 2 toneladas, etc."
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Contanos sobre tu consulta..."
                  className="border-gray-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-semibold uppercase tracking-wide py-6 text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                Enviar consulta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
