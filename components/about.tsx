export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre R.A.G</h2>
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                Con más de <strong className="text-green-300">10 años de experiencia</strong> en el reciclado de chatarra, somos líderes en Buenos Aires especializados en el procesamiento responsable de metales ferrosos y no ferrosos.
              </p>
              <p className="text-lg leading-relaxed">
                Nos especializamos en brindar <strong className="text-green-300">soluciones integrales</strong> para el reciclaje de metales, trabajando con certificación ambiental ISO 14001 y comprometidos con prácticas sustentables.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestro compromiso con el <strong className="text-green-300">reciclaje responsable</strong> nos ha posicionado como referentes en la industria, trabajando con las principales empresas industriales de Buenos Aires y el área metropolitana.
              </p>
            </div>
          </div>

          {/* Tarjetas de características */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Certificación ISO</h3>
              <p className="text-gray-300 text-sm">Reciclaje responsable certificado</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Equipo Experto</h3>
              <p className="text-gray-300 text-sm">Especialistas en metales</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Eco-Friendly</h3>
              <p className="text-gray-300 text-sm">Procesos sustentables</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Servicio 24/7</h3>
              <p className="text-gray-300 text-sm">Disponibilidad total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
