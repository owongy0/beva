"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-slate-900">
          Brain & Endovascular Associates
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/procedures" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Procedures
          </Link>
          <Link href="/team" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Our Team
          </Link>
          <Button asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="/procedures" 
              className="text-base font-medium text-slate-600 hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Procedures
            </Link>
            <Link 
              href="/team" 
              className="text-base font-medium text-slate-600 hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link href="/book">Book Appointment</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
