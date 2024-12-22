import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Loxbix
            </Link>
            <p className="mt-2">Crafting digital experiences for Nigerian businesses</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400"><Facebook size={24} /></a>
            <a href="#" className="hover:text-green-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-green-400"><Instagram size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Loxbix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

