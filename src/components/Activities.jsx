import { Link } from 'react-router-dom'

const Activities = () => {
  const activities = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Health Awareness',
      description: 'We conduct health camps, blood donation drives, and awareness programs on various health issues including COVID-19 prevention.'
    },
    {
      icon: 'fas fa-tree',
      title: 'Environment',
      description: 'Tree plantation, cleanliness drives, and awareness campaigns about waste management and sustainable development.'
    },
    {
      icon: 'fas fa-book',
      title: 'Education',
      description: 'Teaching underprivileged children, digital literacy programs, and career guidance for rural students.'
    }
  ]

  return (
    <section id="activities" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="font-black text-center mb-16 text-gradient-title tracking-tight" style={{fontSize: 'clamp(1rem, 3vw, 1.25rem)'}}>
          Our Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white/12 backdrop-blur-md rounded-3xl p-8 md:p-10 text-center border border-white/20 shadow-2xl transition-all duration-500 card-hover"
            >
              <div className="text-gold-500 text-6xl md:text-7xl mb-6 animate-float drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]">
                <i className={activity.icon}></i>
              </div>
              <h3 className="font-semibold mb-4 text-white" style={{fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'}}>{activity.title}</h3>
              <p className="text-gray-100 leading-relaxed" style={{fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)'}}>{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/activities" 
            className="inline-block px-9 py-4.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-base md:text-lg uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-500"
          >
            Explore All Activities
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Activities
