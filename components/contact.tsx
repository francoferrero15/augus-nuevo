'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    empresa: '',
    tipo_residuo: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validateField = (name: string, value: string) => {
    let error = ''
    if (name === 'nombre' && !value.trim()) {
      error = 'El nombre es requerido'
    } else if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Email inválido'
    } else if (name === 'telefono' && !value.trim()) {
      error = 'El teléfono es requerido'
    } else if (name === 'tipo_residuo' && !value.trim()) {
      error = 'Selecciona un tipo de residuo'
    } else if (name === 'mensaje' && !value.trim()) {
      error = 'El mensaje es requerido'
    }
    setErrors(prev => ({ ...prev, [name]: error }))
    return !error
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    validateField(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const isValid = Object.entries(formData).every(([key, value]) => {
      if (key === 'empresa') return true // Optional field
      return validateField(key, value)
    })

    if (!isValid) return

    setIsSubmitting(true)

    try {
      // Save to Supabase
      const supabase = createClient()
      const { error } = await supabase.from('contacts').insert({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        empresa: formData.empresa || null,
        tipo_residuo: formData.tipo_residuo,
        mensaje: formData.mensaje
      })

      if (error) {
        console.error('Error saving contact:', error)
      } else {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 4000)
      }

      // Open WhatsApp
      const whatsappMessage = `Hola, soy ${formData.nombre}${formData.empresa ? ` de ${formData.empresa}` : ''}. Me interesa información sobre ${formData.tipo_residuo}. ${formData.mensaje}. Mi teléfono: ${formData.telefono}, Email: ${formData.email}`
      window.open(`https://wa.me/5491154852128?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
      
      // Reset form
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        empresa: '',
        tipo_residuo: '',
        mensaje: ''
      })
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5491154852128?text=Hola, necesito información sobre sus servicios de reciclaje industrial', '_blank')
  }

  return (
    <section id="contacto" className="py-24 bg-slate-800">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-top-2">
          <CheckCircle className="w-5 h-5" />
          <span>Consulta enviada correctamente</span>
        </div>
      )}

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
            
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Teléfono</h4>
                <p className="text-gray-300">+54 11 5485-2128</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                <p className="text-gray-300">Augustoguilhou@hotmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Ubicación</h4>
                <p className="text-gray-300">Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Horarios</h4>
                <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
              </div>
            </div>

            {/* WhatsApp directo */}
            <div className="bg-green-500 rounded-2xl p-6 mt-8 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-white mr-3" />
                <h4 className="text-white font-bold text-xl">WhatsApp Directo</h4>
              </div>
              <p className="text-white mb-4">
                ¿Necesitas una respuesta rápida? Contáctanos directamente por WhatsApp
              </p>
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-white text-green-500 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                Abrir WhatsApp
              </Button>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-slate-700 rounded-2xl p-8 backdrop-blur-sm hover:ring-1 hover:ring-green-500/30 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-white font-medium mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    onBlur={handleBlur}
                    placeholder="Tu nombre completo"
                    className={`bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${errors.nombre ? 'border-red-500' : ''}`}
                  />
                  {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-white font-medium mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    onBlur={handleBlur}
                    placeholder="Tu número de teléfono"
                    className={`bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${errors.telefono ? 'border-red-500' : ''}`}
                  />
                  {errors.telefono && <p className="text-red-400 text-sm mt-1">{errors.telefono}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onBlur={handleBlur}
                    placeholder="tu@email.com"
                    className={`bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-white font-medium mb-2">
                    Empresa (opcional)
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    placeholder="Nombre de tu empresa"
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tipo_residuo" className="block text-white font-medium mb-2">
                  Tipo de Residuo *
                </label>
                <select
                  id="tipo_residuo"
                  name="tipo_residuo"
                  required
                  value={formData.tipo_residuo}
                  onChange={(e) => setFormData({...formData, tipo_residuo: e.target.value})}
                  onBlur={handleBlur}
                  className={`w-full bg-slate-600 border border-slate-500 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${errors.tipo_residuo ? 'border-red-500' : ''}`}
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Hierro y Acero">Hierro y Acero</option>
                  <option value="Aluminio">Aluminio</option>
                  <option value="Cobre y Bronce">Cobre y Bronce</option>
                  <option value="Metales No Ferrosos">Metales No Ferrosos</option>
                  <option value="Maquinaria Industrial">Maquinaria Industrial</option>
                  <option value="Desguace">Desguace</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.tipo_residuo && <p className="text-red-400 text-sm mt-1">{errors.tipo_residuo}</p>}
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-white font-medium mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  onBlur={handleBlur}
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  className={`bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 ${errors.mensaje ? 'border-red-500' : ''}`}
                />
                {errors.mensaje && <p className="text-red-400 text-sm mt-1">{errors.mensaje}</p>}
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje por WhatsApp'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
