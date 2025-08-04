"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 500, suffix: "+", label: "Clientes Satisfechos" },
  { number: 10000, suffix: "T", label: "Toneladas Procesadas" },
  { number: 10, suffix: "+", label: "Años de Experiencia" },
  { number: 24, suffix: "/7", label: "Servicio Disponible" },
]

export default function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.number / 100
      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timers[index])
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, 20)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-gray-700 via-gray-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
