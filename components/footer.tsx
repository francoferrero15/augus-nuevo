import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R.A.G</span>
              </div>
              <span className="font-bold text-xl">Reciclado de Chatarra</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Líderes en compra y reciclaje de chatarra metálica en Buenos Aires. 
              Más de 25 años transformando residuos en recursos.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5491154852128" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  +54 11 5485-2128
                </a>
              </li>
              <li>
                <a href="mailto:contacto@rag.com.ar" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  contacto@rag.com.ar
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>San Francisco Solano, Buenos Aires</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} R.A.G Reciclado de Chatarra. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              San Francisco Solano, Quilmes, Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
