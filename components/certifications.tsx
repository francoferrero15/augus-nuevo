"use client"

import { X, Check, FileText } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      label: "N/A",
      title: "Sin certificación ISO",
      description: "No contamos con certificación ISO 14001. Operamos bajo estándares propios de calidad y procesos internos auditables.",
      icon: X,
      iconBg: "bg-gray-500"
    },
    {
      label: "✓",
      title: "Auditorías de clientes",
      description: "Aceptamos auditorías por parte de los clientes para verificar nuestra operatoria, equipamiento e instalaciones.",
      icon: Check,
      iconBg: "bg-[#059669]"
    },
    {
      label: "DOC",
      title: "Certificados privados",
      description: "Emitimos certificados de disposición final, tratamiento y trazabilidad de forma privada (no bajo resolución OPDS).",
      icon: FileText,
      iconBg: "bg-[#059669]"
    }
  ]

  return (
    <div className="bg-[#1a2332] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-4">
            Transparencia y <span className="text-[#059669]">confianza</span> operativa
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Conocé los detalles de nuestra operatoria para evaluar si se ajusta a los requerimientos de tu empresa.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#3a4a5f] rounded-xl overflow-hidden">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-[#1a2332] p-8 md:p-10 hover:bg-[#263547] transition-all duration-300 text-center group"
            >
              {/* Label */}
              <div className="mb-6">
                <span className="font-[family-name:var(--font-barlow-condensed)] text-4xl md:text-5xl font-bold text-[#059669] group-hover:scale-110 inline-block transition-transform duration-300">
                  {cert.label}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold text-white uppercase mb-4">
                {cert.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
