'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloating() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5491154852128?text=Hola, necesito información sobre sus servicios de reciclaje industrial', '_blank')
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {/* Pulse ring animation */}
      <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30"></span>
    </button>
  )
}
