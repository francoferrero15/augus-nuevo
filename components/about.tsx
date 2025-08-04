import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Leaf, Award, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Ofrecer soluciones innovadoras y sostenibles para la gestión de residuos industriales, contribuyendo a un futuro más limpio y eficiente.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser la empresa líder en reciclaje industrial, reconocida por nuestra excelencia operativa y compromiso ambiental.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Integridad, responsabilidad ambiental, innovación continua y compromiso con la satisfacción del cliente.",
  },
]

const achievements = [
  "Más de 10 años de experiencia en el sector",
  "Certificaciones ISO 14001 y 9001",
  "Flota propia de vehículos especializados",
  "Equipo técnico altamente capacitado",
  "Cobertura nacional con base en Buenos Aires",
  "Alianzas estratégicas con fundiciones",
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Quiénes Somos</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">R.A.G - Reciclaje y Gestión</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una empresa comprometida con la excelencia en el reciclaje industrial y la sostenibilidad ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Somos una empresa especializada en la industria del reciclaje y desguace, con un equipo de profesionales
                altamente capacitados y una flota de vehículos y equipos especializados para brindar soluciones
                integrales.
              </p>
              <p>
                Nuestra trayectoria nos ha posicionado como referentes en el sector, trabajando con las principales
                industrias del país y desarrollando procesos innovadores que maximizan la recuperación de materiales.
              </p>
              <p>
                Nos enfocamos en brindar servicios de alta calidad, seguridad y eficiencia, adaptándonos a las
                necesidades específicas de cada cliente y estableciendo relaciones a largo plazo basadas en la confianza
                y la satisfacción.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Nuestros Logros</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Image */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Instalaciones de R.A.G"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Nuestras Instalaciones</h4>
              <p className="text-sm opacity-90">Tecnología de punta para el procesamiento de materiales</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-green-100 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Nuestro Equipo</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contamos con profesionales especializados en ingeniería, logística, medio ambiente y gestión de residuos,
            todos comprometidos con la excelencia y la innovación en cada proyecto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Ingenieros Certificados</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Especialistas Ambientales</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Operadores Expertos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
