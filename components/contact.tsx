'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}. Mi teléfono: ${formData.phone}, Email: ${formData.email}`
    window.open(`https://wa.me/5491154852128?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5491154852128?text=Hola, necesito información sobre sus servicios de reciclaje industrial', '_blank')
  }

  return (
    <section id="contacto" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contactanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades de reciclaje industrial en Buenos Aires
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Teléfono</h4>
                <p className="text-gray-300">+54 11 5485-2128</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                <p className="text-gray-300">info@rag.com.ar</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Ubicación</h4>
                <p className="text-gray-300">Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Horarios</h4>
                <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
              </div>
            </div>

            {/* WhatsApp directo */}
            <div className="bg-green-500 rounded-2xl p-6 mt-8">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-white mr-3" />
                <h4 className="text-white font-bold text-xl">WhatsApp Directo</h4>
              </div>
              <p className="text-white mb-4">
                ¿Necesitas una respuesta rápida? Contáctanos directamente por WhatsApp
              </p>
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-white text-green-500 hover:bg-gray-100 font-semibold rounded-full"
              >
                Abrir WhatsApp
              </Button>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu nombre completo"
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Tu número de teléfono"
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="tu@email.com"
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full"
              >
                Enviar Mensaje por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
