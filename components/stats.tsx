"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: 500, suffix: "+", label: "Clientes Satisfechos", description: "Empresas que confían en nosotros" },
  { number: 10000, suffix: "T", label: "Toneladas Procesadas", description: "De residuos industriales reciclados" },
  { number: 10, suffix: "+", label: "Años de Experiencia", description: "En el sector del reciclaje industrial" },
  { number: 24, suffix: "/7", label: "Servicio Disponible", description: "Atención continua para emergencias" },
]

export default function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.number / 100
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.number) {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.number)
          }
          return newCounters
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {Math.floor(counters[index])}
                  {stat.suffix}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
