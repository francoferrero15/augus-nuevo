import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: "R.A.G - Reciclado de Chatarra | Reciclaje Industrial Buenos Aires",
  description: "Reciclaje responsable de metales ferrosos y no ferrosos en Buenos Aires. Empresa líder en desguace industrial, compra de chatarra y gestión de residuos. Servicio 24/7 con certificación ISO 14001.",
  keywords: "reciclaje industrial Buenos Aires, desguace vehículos Argentina, compra chatarra metálica, residuos industriales, reciclaje metales ferrosos, gestión residuos empresariales, desmantelamiento industrial, reciclaje aluminio cobre, logística residuos, certificación ambiental ISO 14001, economía circular, valorización residuos, reciclaje sustentable",
  authors: [{ name: "R.A.G Reciclaje y Gestión" }],
  creator: "R.A.G",
  publisher: "R.A.G",
  robots: "index, follow",
  openGraph: {
    title: "R.A.G - Reciclado de Chatarra | Reciclaje Industrial Buenos Aires",
    description: "Reciclaje responsable de metales. Líderes en desguace industrial y compra de chatarra en Buenos Aires. Más de 10 años de experiencia.",
    url: "https://rag.com.ar",
    siteName: "R.A.G Reciclaje Industrial",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R.A.G - Reciclado de Chatarra Buenos Aires",
    description: "Reciclaje responsable de metales. Empresa líder en desguace industrial y compra de chatarra en Buenos Aires.",
  },
  alternates: {
    canonical: "https://rag.com.ar",
  },
  verification: {
    google: "AHXNVObxLjfDqkp03R3Xv8HFs6EuZiq8FWrLv81ex7g",
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
        <meta name="google-site-verification" content="AHXNVObxLjfDqkp03R3Xv8HFs6EuZiq8FWrLv81ex7g" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "R.A.G - Reciclado de Chatarra",
              "description": "Reciclaje responsable de metales ferrosos y no ferrosos en Buenos Aires",
              "url": "https://rag.com.ar",
              "telephone": "+54 11 5485-2128",
              "email": "info@rag.com.ar",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.6118,
                "longitude": -58.3960
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -34.6118,
                  "longitude": -58.3960
                },
                "geoRadius": "100000"
              },
              "sameAs": [
                "https://wa.me/5491154852128"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
