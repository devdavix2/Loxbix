import { Monitor, Smartphone, Megaphone, Palette } from 'lucide-react'

const services = [
  {
    icon: <Monitor size={48} />,
    title: 'Web Design',
    description: 'Custom-designed websites that reflect your brand and engage your audience.'
  },
  {
    icon: <Smartphone size={48} />,
    title: 'Mobile Responsive',
    description: 'Websites that look great and function flawlessly on all devices.'
  },
  {
    icon: <Megaphone size={48} />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence.'
  },
  {
    icon: <Palette size={48} />,
    title: 'Branding',
    description: 'Cohesive brand identity design that sets you apart from the competition.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Comprehensive solutions for your digital needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

