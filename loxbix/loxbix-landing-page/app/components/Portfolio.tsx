import Image from 'next/image'

const projects = [
  { name: 'E-commerce Website', image: '/placeholder.svg?height=400&width=600', category: 'E-commerce' },
  { name: 'Corporate Website', image: '/placeholder.svg?height=400&width=600', category: 'Corporate' },
  { name: 'NGO Website', image: '/placeholder.svg?height=400&width=600', category: 'Non-Profit' },
  { name: 'Tech Startup Landing Page', image: '/placeholder.svg?height=400&width=600', category: 'Startup' }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Showcasing our best work across industries</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <Image src={project.image} alt={project.name} width={600} height={400} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-green-400">{project.category}</p>
                  <a href="#" className="mt-4 inline-block bg-white text-green-600 py-2 px-4 rounded-full font-bold text-sm hover:bg-green-600 hover:text-white transition duration-300">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

