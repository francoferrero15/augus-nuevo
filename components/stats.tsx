"use client"

import { useEffect, useState } from "react"
import { Users, Truck, Recycle, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Clientes Satisfechos",
    description: "Empresas que confían en nosotros",
  },
  {
    icon: Truck,
    number: 1000,
    suffix: "+",
    label: "Toneladas Procesadas",
    description: "Material reciclado mensualmente",
  },
  {
    icon: Recycle,
    number: 95,
    suffix: "%",
    label: "Tasa de Reciclaje",
    description: "Eficiencia en recuperación",
  },
  {
    icon: Award,
    number: 10,
    suffix: "+",
    label: "Años de Experiencia",
    description: "Liderando el sector",
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return Math.min(prev + Math.ceil(target / 50), target)
        }
        return target
      })
    }, 50)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Números que Hablan por Nosotros</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nuestra trayectoria y compromiso se reflejan en estos resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
