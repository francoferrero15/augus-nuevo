import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social proof line */}
        <div className="text-center mb-8 pb-8 border-b border-green-500/30">
          <p className="text-green-400 font-semibold text-lg">Más de 375 empresas confían en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">R.A.G</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Líderes en reciclado de chatarra y desguace industrial en Buenos Aires. 
              Más de 10 años ofreciendo reciclaje responsable de metales con compromiso ambiental.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Compromiso Ambiental
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Reciclaje Responsable
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <div className="h-0.5 w-12 bg-green-500 mb-4"></div>
            <ul className="space-y-2 text-gray-400">
              <li>Reciclado de Metales</li>
              <li>Compra de Chatarra</li>
              <li>Desguace Industrial</li>
              <li>Logística de Residuos</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="h-0.5 w-12 bg-green-500 mb-4"></div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-sm">+54 11 5485-2128</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-sm">Augustoguilhou@hotmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 R.A.G - Reciclado de Chatarra. Todos los derechos reservados. 
            Empresa especializada en reciclaje responsable de metales en Buenos Aires.
          </p>
        </div>
      </div>
    </footer>
  )
}
