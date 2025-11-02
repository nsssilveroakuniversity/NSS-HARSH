import { Link } from 'react-router-dom'

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52a4c85a-719f-43ba-88cb-6de1007ee59b.png',
      title: 'Tree Plantation Drive',
      description: 'Students actively participating in our green campus initiative.'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9cb1fef5-2a69-4589-b9cb-a5cd80157652.png',
      title: 'Cleanliness Campaign',
      description: 'NSS volunteers working together for a cleaner environment.'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2f5bbdc-6305-47a8-8211-853bc9ba1e74.png',
      title: 'Blood Donation Camp',
      description: 'Successful blood donation drive with community participation.'
    }
  ]

  return (
    <section id="gallery" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 text-gradient-title tracking-tight">
          Gallery of Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 relative card-hover group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/gallery" 
            className="inline-block px-9 py-4.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-500"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
