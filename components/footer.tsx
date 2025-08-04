"use client"

import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, MessageCircle, Instagram, Recycle, Shield, Award } from "lucide-react"

const quickLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
]

const services = [
  "Retiro de Scraps",
  "Desguace Industrial",
  "Corte de Maquinaria",
  "Prensado Automotriz",
  "Reciclaje de Metales",
  "Logística Integral",
]

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">R.A.G</div>
              <div>
                <div className="font-semibold">Reciclaje y Gestión</div>
                <div className="text-sm text-gray-400">Soluciones Industriales</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Líderes en reciclaje industrial con más de 10 años de experiencia. Comprometidos con la excelencia y la
              sostenibilidad ambiental.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => window.open("https://wa.me/1154852128", "_blank")}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open("https://www.instagram.com/tuusuario", "_blank")}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+54 11 5485-2128</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">info@rag.com.ar</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">CERTIFICACIONES</h4>
              <div className="flex gap-2">
                <div className="bg-gray-800 p-2 rounded flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-xs">ISO 14001</span>
                </div>
                <div className="bg-gray-800 p-2 rounded flex items-center gap-1">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-xs">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 R.A.G - Reciclaje y Gestión. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Recycle className="w-4 h-4 text-green-400" />
              Comprometidos con el medio ambiente
            </span>
            <span>Servicio 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
