import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const services = [
    "Destrucción certificada",
    "Valorización de scrap",
    "Logística especializada",
    "Gestión integral",
    "Certificados de disposición"
  ]

  return (
    <footer className="bg-[#0f1419] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold text-white tracking-tight">
                METAL SOLVER
              </span>
              <span className="w-2 h-2 rounded-full bg-[#e85d00] mb-3"></span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empresa argentina con 25 años de trayectoria en gestión, valorización 
              y destrucción certificada de scrap metálico industrial.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white uppercase mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#servicios" 
                    className="text-gray-400 hover:text-[#e85d00] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white uppercase mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+5491154852128" 
                className="flex items-center gap-3 text-gray-400 hover:text-[#e85d00] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+54 11 5485-2128</span>
              </a>
              <a 
                href="mailto:Augustoguilhou@hotmail.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-[#e85d00] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Augustoguilhou@hotmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av. Monteverde 2191, San Francisco Solano, Quilmes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Metal Solver SRL. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              San Francisco Solano, Quilmes, Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
