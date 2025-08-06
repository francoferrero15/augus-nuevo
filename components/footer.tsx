import { Recycle, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Recycle className="w-8 h-8 text-green-400 mr-3" />
              <span className="text-2xl font-bold text-white">R.A.G</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Líderes en reciclaje industrial y desguace de vehículos en Buenos Aires. 
              Más de 10 años transformando residuos en oportunidades con certificación ambiental ISO 14001.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-600 px-3 py-1 rounded-full">
                <span className="text-white text-xs font-semibold">ISO 14001</span>
              </div>
              <div className="bg-green-600 px-3 py-1 rounded-full">
                <span className="text-white text-xs font-semibold">Certificado</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Reciclaje de Metales</li>
              <li>Desguace de Vehículos</li>
              <li>Logística Industrial</li>
              <li>Gestión de Residuos</li>
              <li>Consultoría Ambiental</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>+54 11 5485-2128</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@rag.com.ar</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 R.A.G - Reciclaje y Gestión Industrial. Todos los derechos reservados. 
            Empresa especializada en reciclaje industrial, desguace de vehículos y gestión de residuos en Buenos Aires.
          </p>
        </div>
      </div>
    </footer>
  )
}
