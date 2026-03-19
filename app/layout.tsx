import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Script from 'next/script'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "R.A.G - Reciclado de Chatarra | Compra de Metales Buenos Aires",
  description: "Reciclaje responsable de metales ferrosos y no ferrosos en Buenos Aires. Compra de chatarra, desguace industrial y logística especializada. +10 años de experiencia.",
  keywords: "reciclado chatarra, compra metales, desguace industrial, reciclaje responsable, Buenos Aires, hierro, acero, aluminio, cobre",
  authors: [{ name: "R.A.G Reciclado" }],
  creator: "R.A.G",
  publisher: "R.A.G",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rag-reciclado.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "R.A.G - Reciclado de Chatarra | Compra de Metales Buenos Aires",
    description: "Reciclaje responsable de metales ferrosos y no ferrosos en Buenos Aires. Compra de chatarra, desguace industrial y logística especializada.",
    url: 'https://rag-reciclado.vercel.app',
    siteName: 'R.A.G Reciclado',
    images: [
      {
        url: '/hero-background.png',
        width: 1200,
        height: 630,
        alt: 'R.A.G Reciclado de Chatarra',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "R.A.G - Reciclado de Chatarra | Compra de Metales Buenos Aires",
    description: "Reciclaje responsable de metales ferrosos y no ferrosos en Buenos Aires. Compra de chatarra, desguace industrial y logística especializada.",
    images: ['/hero-background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "AHXNVObxLjfDqkp03R3Xv8HFs6EuZiq8FWrLv81ex7g",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="AHXNVObxLjfDqkp03R3Xv8HFs6EuZiq8FWrLv81ex7g" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "R.A.G Reciclado",
              "description": "Reciclaje responsable de metales ferrosos y no ferrosos en Buenos Aires",
              "url": "https://rag-reciclado.vercel.app",
              "logo": "https://rag-reciclado.vercel.app/hero-background.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-11-5485-2128",
                "contactType": "customer service",
                "areaServed": "AR",
                "availableLanguage": "Spanish"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
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
