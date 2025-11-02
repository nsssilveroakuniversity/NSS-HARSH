import { Link } from 'react-router-dom'

const Events = () => {
  const events = [
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc5443d7-9443-4116-a575-ba5452d3b137.png',
      title: 'Blood Donation Camp',
      date: '24th July 2023 • Main Campus',
      description: 'Join our annual blood donation drive in collaboration with Red Cross Society.',
      buttonText: 'Register Now',
      buttonClass: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 shadow-[0_6px_20px_rgba(229,62,62,0.4)] hover:shadow-[0_10px_25px_rgba(229,62,62,0.5)]'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/860432be-eff4-4823-bba4-ef1dc6e6cff0.png',
      title: 'Green Campus Drive',
      date: '5th August 2023 • University Garden',
      description: 'Participate in our tree plantation campaign to make our campus greener.',
      buttonText: 'Learn More',
      buttonClass: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-600 shadow-[0_6px_20px_rgba(56,161,105,0.4)] hover:shadow-[0_10px_25px_rgba(56,161,105,0.5)]'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78d32504-03cb-4329-b9d1-0803bac5348b.png',
      title: 'Rural Development Program',
      date: '12th-18th August 2023 • Vadgam Village',
      description: '7-day residential program for village development and community service.',
      buttonText: 'Join Team',
      buttonClass: 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 shadow-[0_6px_20px_rgba(49,130,206,0.4)] hover:shadow-[0_10px_25px_rgba(49,130,206,0.5)]'
    }
  ]

  return (
    <section id="events" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 text-gradient-title tracking-tight">
          Upcoming Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 relative card-hover group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4 font-medium">{event.date}</p>
                <p className="text-gray-200 mb-6 leading-relaxed">{event.description}</p>
                <button 
                  className={`px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white transition-all duration-400 hover:-translate-y-1 ${event.buttonClass}`}
                >
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/activities" 
            className="inline-block px-9 py-4.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-500"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Events
