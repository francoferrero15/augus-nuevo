import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">R.A.G</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Líderes en reciclaje industrial con más de 10 años de experiencia. Comprometidos con el medio ambiente y
              la excelencia en el servicio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#servicios" className="hover:text-green-400 transition-colors">
                  Reciclaje de Metales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-green-400 transition-colors">
                  Desguace Industrial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-green-400 transition-colors">
                  Logística y Transporte
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-green-400 transition-colors">
                  Gestión Ambiental
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                <span>+54 11 5485-2128</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-green-400" />
                <span>info@rag.com.ar</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 R.A.G - Reciclaje y Gestión. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
