import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.A.G - Reciclaje Industrial y Desguace de Vehículos en Buenos Aires | Compra de Chatarra",
  description: "Empresa líder en reciclaje industrial, desguace de vehículos y compra de chatarra en Buenos Aires. Más de 10 años transformando residuos industriales en oportunidades. Certificación ISO 14001. Servicio 24/7.",
  keywords: "reciclaje industrial Buenos Aires, desguace vehículos Argentina, compra chatarra metálica, residuos industriales, reciclaje metales ferrosos, gestión residuos empresariales, desmantelamiento industrial, reciclaje aluminio cobre, logística residuos, certificación ambiental ISO 14001, economía circular, valorización residuos, reciclaje sustentable",
    verification: {
    google: "AHXNVObxLjfDqkp03R3Xv8HFs6EuZiq8FWrLv81ex7g" 
  },
  authors: [{ name: "R.A.G Reciclaje y Gestión" }],
  creator: "R.A.G",
  publisher: "R.A.G",
  robots: "index, follow",
  openGraph: {
    title: "R.A.G - Reciclaje Industrial y Desguace en Buenos Aires",
    description: "Líderes en reciclaje industrial y desguace de vehículos. Transformamos residuos en oportunidades con más de 10 años de experiencia en Buenos Aires.",
    url: "https://rag.com.ar",
    siteName: "R.A.G Reciclaje Industrial",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R.A.G - Reciclaje Industrial Buenos Aires",
    description: "Empresa líder en reciclaje industrial y desguace de vehículos en Buenos Aires. Servicio profesional 24/7.",
  },
  alternates: {
    canonical: "https://rag.com.ar",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="canonical" href="https://rag.com.ar" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Buenos Aires" />
        <meta name="geo.position" content="-34.6118;-58.3960" />
        <meta name="ICBM" content="-34.6118, -58.3960" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
