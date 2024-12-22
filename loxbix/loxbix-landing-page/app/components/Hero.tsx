import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Bringing Nigerian Businesses to Life Online
            </h1>
            <p className="text-xl mb-8">
              Loxbix is a premier website design agency based in Nigeria, crafting beautiful and functional websites that drive results for businesses across the nation.
            </p>
            <div className="flex space-x-4">
              <Link href="#contact" className="bg-white text-green-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300">
                Get Started
              </Link>
              <Link href="#portfolio" className="border-2 border-white text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition duration-300">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg?height=600&width=600" 
              alt="Digital Illustration of Web Design" 
              width={600} 
              height={600} 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

