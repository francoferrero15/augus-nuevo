"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Recycle, Award } from "lucide-react"

const stats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Clientes Satisfechos", color: "text-blue-600" },
  { icon: Recycle, value: 10000, suffix: " Tn", label: "Material Procesado", color: "text-green-600" },
  { icon: Users, value: 50, suffix: "+", label: "Profesionales", color: "text-purple-600" },
  { icon: Award, value: 10, suffix: " Años", label: "de Experiencia", color: "text-orange-600" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < value) {
          return Math.min(prev + Math.ceil(value / 50), value)
        }
        return value
      })
    }, 50)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <CardContent className="p-6">
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
