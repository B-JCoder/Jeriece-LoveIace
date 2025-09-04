"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold" style={{ color: "#A36ACB" }}>
            Jeriece LoveIace, PMHNP-BC
          </div>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            style={{ color: "#A36ACB" }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile/Desktop Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div
            className="fixed right-0 top-0 h-full w-80 shadow-xl transform transition-transform duration-300 ease-in-out"
            style={{ backgroundColor: "#FAF9F6", boxShadow: "0 0 25px #D4C3ED" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 pt-20">
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-opacity-10 transition-colors"
                  style={{ color: "#D8AFE7", backgroundColor: "transparent" }}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-opacity-10 transition-colors"
                  style={{ color: "#D8AFE7", backgroundColor: "transparent" }}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-opacity-10 transition-colors"
                  style={{ color: "#D8AFE7", backgroundColor: "transparent" }}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-opacity-10 transition-colors"
                  style={{ color: "#D8AFE7", backgroundColor: "transparent" }}
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-opacity-10 transition-colors"
                  style={{ color: "#D8AFE7", backgroundColor: "transparent" }}
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-opacity-10 transition-colors"
                  style={{ color: "#D8AFE7", backgroundColor: "transparent" }}
                >
                  Testimonials
                </button>

                {/* Call Now Button */}
                <div className="pt-4 border-t" style={{ borderColor: "#D4C3ED" }}>
                  <Button
                    className="w-full text-white font-semibold"
                    style={{ backgroundColor: "#A36ACB" }}
                    onClick={() => window.open("tel:+17722721699")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
