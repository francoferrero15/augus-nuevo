"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
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
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R.A.G</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Reciclado
              </span>
              <span className={`block text-xs ${isScrolled ? "text-gray-600" : "text-gray-300"}`}>
                de Chatarra
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5491154852128" className={`flex items-center gap-2 ${isScrolled ? "text-gray-600" : "text-gray-300"}`}>
              <Phone className="h-4 w-4" />
              <span className="text-sm">+54 11 5485-2128</span>
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="#contacto">Cotizar ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mt-2">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+5491154852128" className="flex items-center gap-2 text-gray-600 mb-3">
                  <Phone className="h-4 w-4" />
                  <span>+54 11 5485-2128</span>
                </a>
                <a href="mailto:contacto@rag.com.ar" className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>contacto@rag.com.ar</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
