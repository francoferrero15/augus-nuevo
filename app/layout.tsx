import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.A.G - Reciclaje y Gestión Industrial",
  description:
    "Líderes en reciclaje industrial y gestión de residuos. Soluciones profesionales para desguace, chatarra y materiales industriales.",
  keywords: "reciclaje industrial, desguace, chatarra, gestión residuos, Buenos Aires",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
