import { Link } from 'react-router-dom'

const Team = () => {
  const teamMembers = [
    {
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Dr. Mahendra Singh Solanki',
      role: 'Program Coordinator',
      description: 'Leads the NSS programs and ensures smooth execution of all activities.'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      name: 'Mr. Vishal Kumar Parmar',
      role: 'Program Officer',
      description: 'Manages volunteer recruitment and engagement for NSS events.'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Student Coordinator',
      role: 'Student Representative',
      description: 'Coordinates logistics and planning for NSS events and campaigns.'
    }
  ]

  return (
    <section id="team" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 text-gradient-title tracking-tight">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 relative card-hover group text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="h-64 bg-gray-50 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-4 font-medium">{member.role}</p>
                <p className="text-gray-200 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-block px-9 py-4.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-500"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Team
