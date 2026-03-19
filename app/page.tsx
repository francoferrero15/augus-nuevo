import Header from '@/components/header'
import Hero from '@/components/hero'
import QuienesSomos from '@/components/quienes-somos'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppFloating from '@/components/whatsapp-floating'

export default function Home() {
  return (
    <main className="bg-slate-900">
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <QuienesSomos />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </main>
  )
}
