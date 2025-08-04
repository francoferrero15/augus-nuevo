import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Recycle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Recycle className="w-8 h-8 text-green-400 mr-2" />
              <h3 className="text-2xl font-bold">R.A.G</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Líderes en reciclaje y desguace industrial con más de 10 años de experiencia. Comprometidos con el medio
              ambiente y la calidad de servicio.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-gray-300">+54 11 5485-2128</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-gray-300">info@rag.com.ar</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Reciclaje de Metales</li>
              <li>Desguace Industrial</li>
              <li>Logística y Transporte</li>
              <li>Gestión Ambiental</li>
              <li>Consultoría Técnica</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Certificaciones</h4>
            <ul className="space-y-2 text-gray-300">
              <li>ISO 14001</li>
              <li>Gestión Ambiental</li>
              <li>Transporte Especializado</li>
              <li>Manejo de Residuos</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 R.A.G - Reciclaje y Desguace. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Servicio 24/7 disponible</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
