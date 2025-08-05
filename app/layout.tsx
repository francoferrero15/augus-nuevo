import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.A.G - Reciclaje y Gestión Industrial",
  description:
    "Líderes en reciclaje industrial con más de 10 años de experiencia. Soluciones integrales para el manejo responsable de residuos industriales.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
