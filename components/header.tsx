"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#certificaciones", label: "Certificaciones" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "shadow-lg" : ""
    }`}>
      {/* Top Mini Bar */}
      <div className="bg-[#1a2332] text-white py-2.5 text-sm hidden md:block border-b border-[#263547]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+5491154852128" className="flex items-center gap-2 hover:text-[#e85d00] transition-colors duration-200">
              <Phone className="h-4 w-4 text-[#e85d00]" />
              <span className="font-medium">+54 11 5485-2128</span>
            </a>
            <a href="mailto:Augustoguilhou@hotmail.com" className="flex items-center gap-2 hover:text-[#e85d00] transition-colors duration-200">
              <Mail className="h-4 w-4 text-[#e85d00]" />
              <span>Augustoguilhou@hotmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4 text-[#e85d00]" />
            <span>San Francisco Solano, Quilmes</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="font-[family-name:var(--font-barlow-condensed)] text-2xl md:text-3xl font-bold text-[#1a2332] tracking-tight">
                METAL SOLVER
              </span>
              <span className="w-2 h-2 rounded-full bg-[#e85d00] mb-3"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[#1a2332] hover:text-[#e85d00] transition-colors duration-200 font-medium text-sm uppercase tracking-wide after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#e85d00] after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-[#e85d00] hover:bg-[#d45500] text-white font-semibold uppercase tracking-wide px-6 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Link href="#contacto">Solicitar cotización</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1a2332]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-[#1a2332] hover:text-[#e85d00] transition-colors font-medium uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="w-full bg-[#e85d00] hover:bg-[#d45500] text-white font-semibold uppercase tracking-wide mt-4"
              >
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar cotización
                </Link>
              </Button>
              <div className="pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                <a href="tel:+5491154852128" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+54 11 5485-2128</span>
                </a>
                <a href="mailto:Augustoguilhou@hotmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Augustoguilhou@hotmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
