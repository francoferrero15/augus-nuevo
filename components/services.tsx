import { Button } from '@/components/ui/button'

export default function Services() {
  const openWhatsApp = (service: string) => {
    const message = `Hola, me interesa conocer más sobre el servicio de ${service}`
    window.open(`https://wa.me/5491154852128?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para el manejo responsable de residuos industriales en Buenos Aires y área metropolitana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reciclaje de Metales */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Reciclaje de Metales</h3>
            <p className="text-gray-300 mb-6 text-center">
              Procesamiento especializado de chatarra ferrosa y no ferrosa con certificación ambiental y mejores precios del mercado.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Hierro y Acero
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Aluminio
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Cobre
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Bronce
              </li>
            </ul>
            <Button 
              onClick={() => openWhatsApp('Reciclaje de Metales')}
              className="w-full bg-green-500 hover:bg-green-600 text-white border border-green-400 rounded-full"
            >
              Consultar
            </Button>
          </div>

          {/* Logística y Transporte */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Logística y Transporte</h3>
            <p className="text-gray-300 mb-6 text-center">
              Servicio integral de retiro, transporte y logística con flota propia especializada y seguimiento GPS.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Retiro en planta
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Transporte especializado
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Documentación completa
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Seguimiento GPS
              </li>
            </ul>
            <Button 
              onClick={() => openWhatsApp('Logística y Transporte')}
              className="w-full bg-green-500 hover:bg-green-600 text-white border border-green-400 rounded-full"
            >
              Consultar
            </Button>
          </div>

          {/* Desguace Industrial */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Desguace Industrial</h3>
            <p className="text-gray-300 mb-6 text-center">
              Desmantelamiento profesional de maquinaria y estructuras industriales con recuperación de materiales valiosos.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Maquinaria pesada
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Estructuras metálicas
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Equipos industriales
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Demolición selectiva
              </li>
            </ul>
            <Button 
              onClick={() => openWhatsApp('Desguace Industrial')}
              className="w-full bg-green-500 hover:bg-green-600 text-white border border-green-400 rounded-full"
            >
              Consultar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
