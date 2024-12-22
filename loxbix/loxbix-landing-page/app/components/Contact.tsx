import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-xl text-center text-gray-600 mb-12">We'd love to hear from you</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-green-600 mr-2" />
                <span>info@loxbix.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-green-600 mr-2" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-green-600 mr-2" />
                <span>123 Tech Street, Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" required></textarea>
              </div>
              <div>
                <button type="submit" className="bg-green-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-green-700 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

