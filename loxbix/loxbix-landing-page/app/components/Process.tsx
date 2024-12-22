import { Lightbulb, Code, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <Lightbulb size={48} />,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals and target audience to create a strategic plan.'
  },
  {
    icon: <Code size={48} />,
    title: 'Design & Development',
    description: 'Our team crafts a beautiful, functional website tailored to your brand and objectives.'
  },
  {
    icon: <Rocket size={48} />,
    title: 'Launch & Growth',
    description: 'We launch your site and provide ongoing support to ensure your online success.'
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
        <p className="text-xl text-center text-gray-600 mb-12">How we bring your vision to life</p>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center max-w-sm text-center">
              <div className="bg-green-600 text-white rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

