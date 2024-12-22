import Image from 'next/image'

const testimonials = [
  {
    name: 'Chidi Okonkwo',
    role: 'CEO, TechNaija',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Loxbix transformed our online presence. Their design is not only beautiful but also highly functional.'
  },
  {
    name: 'Amina Bello',
    role: 'Founder, Naija Eats',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Working with Loxbix was a pleasure. They understood our vision and delivered beyond our expectations.'
  },
  {
    name: 'Oluwaseun Adebayo',
    role: 'Marketing Director, Lagos Luxe',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'The team at Loxbix are true professionals. They created a website that perfectly captures our brand essence.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Don't just take our word for it</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

