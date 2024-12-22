import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              Loxbix
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-green-600">Services</Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-green-600">Portfolio</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-green-600">Testimonials</Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

