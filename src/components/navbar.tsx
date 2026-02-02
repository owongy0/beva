import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo - left side */}
        <Link href="/" className="text-xl font-bold">
          Brain & Endovascular Associates
        </Link>

        {/* Navigation links - middle/right */}
        <nav className="flex items-center gap-6">
          <Link href="/procedures" className="text-sm font-medium hover:text-blue-600">
            Procedures
          </Link>
          <Link href="/team" className="text-sm font-medium hover:text-blue-600">
            Our Team
          </Link>
          <Button asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </nav>

      </div>
    </header>
  )
}