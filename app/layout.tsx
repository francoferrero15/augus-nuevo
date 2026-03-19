import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.A.G - Reciclado de Chatarra",
  description: "Reciclaje responsable de metales. Empresa argentina especializada en la compra y reciclaje de chatarra metálica con más de 25 años de experiencia.",
  keywords: "reciclaje, chatarra, metales, Buenos Aires, Argentina, compra chatarra, reciclado metales",
  authors: [{ name: "R.A.G" }],
  creator: "R.A.G",
  publisher: "R.A.G",
  robots: "index, follow",
  verification: {
    google: "AHXNVObxLjfDqkp03R3Xv8HFs6EuZiq8FWrLv81ex7g"
  },
  openGraph: {
    title: "R.A.G - Reciclado de Chatarra",
    description: "Reciclaje responsable de metales. Empresa argentina especializada en la compra y reciclaje de chatarra metálica.",
    url: "https://v0-augusmaster.vercel.app",
    siteName: "R.A.G",
    locale: "es_AR",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
