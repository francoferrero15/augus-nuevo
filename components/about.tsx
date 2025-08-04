import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Leaf, Clock } from "lucide-react"

export default function About() {
  return (
    <section id="nosotros" className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre R.A.G</h2>
            <p className="text-lg text-gray-300 mb-6">
              Con más de 10 años de experiencia en el sector, somos líderes en reciclaje y desguace industrial. Nos
              especializamos en brindar soluciones integrales y responsables para el manejo de residuos industriales.
            </p>
            <p className="text-gray-300 mb-8">
              Nuestro compromiso con el medio ambiente y la calidad nos ha posicionado como referentes en la industria,
              trabajando con las principales empresas del país.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, title: "Certificación ISO", desc: "Calidad garantizada" },
              { icon: Users, title: "Equipo Experto", desc: "Profesionales capacitados" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Procesos sustentables" },
              { icon: Clock, title: "Servicio 24/7", desc: "Disponibilidad total" },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 text-center">
                  <item.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
