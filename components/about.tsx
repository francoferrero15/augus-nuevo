import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Leaf, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="nosotros" className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre R.A.G</h2>
            <p className="text-lg text-white mb-6">
              Con más de 10 años de experiencia en el sector del reciclaje industrial en Buenos Aires, somos líderes en 
              la gestión integral de residuos industriales y desguace de vehículos. Nos especializamos en brindar 
              soluciones sustentables y responsables para la valorización de chatarra metálica y residuos empresariales.
            </p>
            <p className="text-white mb-8">
              Nuestro compromiso con la economía circular y la gestión ambiental certificada nos ha posicionado como 
              referentes en la industria del reciclaje en Argentina, trabajando con las principales empresas del país 
              en la transformación de residuos en oportunidades de valor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, title: "Certificación ISO 14001", desc: "Gestión ambiental certificada" },
              { icon: Users, title: "Equipo Especializado", desc: "Profesionales en reciclaje industrial" },
              { icon: Leaf, title: "Procesos Sustentables", desc: "Economía circular y eco-friendly" },
              { icon: Clock, title: "Servicio 24/7", desc: "Disponibilidad total para empresas" },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 text-center">
                  <item.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
