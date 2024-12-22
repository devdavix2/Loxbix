import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
        <p className="text-xl mb-8">Let's create a website that truly represents your brand and drives results.</p>
        <Link href="#contact" className="bg-white text-green-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300">
          Get Your Free Consultation
        </Link>
      </div>
    </section>
  )
}

