import type React from "react"
import type { Metadata } from "next"
import { Barlow, Barlow_Condensed } from 'next/font/google'
import "./globals.css"

const barlow = Barlow({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow"
})

const barlowCondensed = Barlow_Condensed({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed"
})

export const metadata: Metadata = {
  title: "Metal Solver SRL | Gestión de Scrap Metálico Industrial en Buenos Aires | 25 Años",
  description: "Metal Solver SRL: empresa argentina con más de 25 años en gestión integral, destrucción certificada y valorización de scrap metálico industrial. Flota propia. San Francisco Solano, Quilmes. Cotizá ahora.",
  keywords: "scrap metálico, gestión de scrap, destrucción certificada de materiales, valorización de chatarra, reciclaje industrial Buenos Aires, compra scrap metal, scrap mixto, gestión residuos industriales, Quilmes, AMBA",
  authors: [{ name: "Metal Solver SRL" }],
  creator: "Metal Solver SRL",
  publisher: "Metal Solver SRL",
  robots: "index, follow",
  openGraph: {
    title: "Metal Solver SRL | Gestión de Scrap Metálico Industrial",
    description: "25 años en gestión integral, destrucción certificada y valorización de scrap metálico. Flota propia. San Francisco Solano, Quilmes.",
    url: "https://metalsolversrl.com.ar",
    siteName: "Metal Solver SRL",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal Solver SRL | Gestión de Scrap Metálico Industrial",
    description: "25 años en gestión integral, destrucción certificada y valorización de scrap metálico. Flota propia. San Francisco Solano, Quilmes.",
  },
  alternates: {
    canonical: "https://metalsolversrl.com.ar",
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
      <head>
        <link rel="canonical" href="https://metalsolversrl.com.ar/" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="San Francisco Solano, Quilmes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Metal Solver SRL",
              "description": "Empresa argentina especializada en gestión integral, destrucción certificada y valorización de scrap metálico industrial con más de 25 años de experiencia.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Monteverde 2191",
                "addressLocality": "San Francisco Solano",
                "addressRegion": "Buenos Aires",
                "addressCountry": "AR"
              },
              "telephone": "+5491154852128",
              "email": "Augustoguilhou@hotmail.com",
              "foundingDate": "1999",
              "areaServed": "Gran Buenos Aires",
              "serviceType": ["Gestión de scrap metálico", "Destrucción certificada", "Valorización de materiales", "Logística industrial"]
            })
          }}
        />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
