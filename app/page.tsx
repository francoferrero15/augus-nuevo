import dynamic from 'next/dynamic'

// Importar componentes dinámicamente para evitar problemas de hidratación
const Header = dynamic(() => import('@/components/header'), { ssr: false })
const Hero = dynamic(() => import('@/components/hero'), { ssr: false })
const Stats = dynamic(() => import('@/components/stats'), { ssr: false })
const About = dynamic(() => import('@/components/about'), { ssr: false })
const Services = dynamic(() => import('@/components/services'), { ssr: false })
const Contact = dynamic(() => import('@/components/contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <Stats />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
