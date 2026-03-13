import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="nosotros">
        <About />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="certificaciones">
        <Certifications />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
