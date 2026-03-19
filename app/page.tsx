import Header from '@/components/header'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import About from '@/components/about'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

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
