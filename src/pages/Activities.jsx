import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const cardRefs = useRef([])

  const activities = [
    {
      icon: '🩺',
      category: 'health',
      title: 'Health & Hygiene',
      items: [
        'Blood Donation Camps',
        'Free Health Check-up Camps',
        'Eye/Ear/Dental Check-up Camps',
        'Sanitation and Cleanliness Drives',
        'Personal Hygiene Awareness Sessions'
      ]
    },
    {
      icon: '🌳',
      category: 'environment',
      title: 'Environment & Sustainability',
      items: [
        'Tree Plantation Drives ("Ek Ped Maa Ke Naam")',
        'Campus and Public Place Cleanliness',
        'Plastic-Free Campaigns',
        'Water Conservation Awareness',
        'E-Waste Collection Drives'
      ]
    },
    {
      icon: '🧠',
      category: 'education',
      title: 'Education & Awareness',
      items: [
        'Literacy Programs in Villages/Slums',
        'Digital Literacy Camps',
        'Voter Awareness Programs',
        'Educational Support for Underprivileged'
      ]
    },
    {
      icon: '💪',
      category: 'fitness',
      title: 'Fitness & Youth Empowerment',
      items: [
        'Yoga Day Celebration',
        'Fitness Awareness Rallies',
        'Self-Defense Training (especially for girls)',
        'Personality Development Programs',
        'Soft Skills/Leadership Workshops'
      ]
    },
    {
      icon: '🧓',
      category: 'social',
      title: 'Social Welfare',
      items: [
        'Orphanage/Old Age Home Visits',
        'Slum Area Visits and Welfare Activities',
        'Clothes/Food Distribution',
        'Helping the Differently Abled',
        'Community Support Programs'
      ]
    },
    {
      icon: '🧹',
      category: 'cleanliness',
      title: 'Clean India Campaigns',
      items: [
        'Clean Campus Initiative',
        'Clean Village/Street Campaigns',
        'Awareness Rally on Waste Management',
        'Swachh Bharat Abhiyan'
      ]
    },
    {
      icon: '⚖️',
      category: 'legal',
      title: 'Legal & Civic Awareness',
      items: [
        'Traffic Rules Awareness Camps',
        'Road Safety Week',
        'Anti-Drug Day Awareness',
        'Legal Rights Education'
      ]
    },
    {
      icon: '🏕️',
      category: 'camps',
      title: 'Special 7-Day NSS Camp',
      items: [
        'Village Survey and Baseline Study',
        'Health & Hygiene Awareness Drives',
        'Construction of Community Infrastructure',
        'Cultural Events with Social Messages',
        'Guest Lectures on Social Themes',
        'Skill Development Workshops',
        'Community Interaction Programs'
      ]
    },
    {
      icon: '🇮🇳',
      category: 'national',
      title: 'National-Level Participation',
      items: [
        'National Integration Camp (NIC)',
        'Republic Day Parade Camp',
        'Pre-RD Camp',
        'Adventure Camp',
        'Youth Summit'
      ]
    },
    {
      icon: '📅',
      category: 'events',
      title: 'Event-Based Activities',
      items: [
        'Independence Day & Republic Day Programs',
        'NSS Foundation Day (24th September)',
        'Gandhi Jayanti Cleanliness Drive',
        'Cultural Competitions',
        'Essay & Poster Making Contests'
      ]
    }
  ]

  const stats = [
    { number: '10+', label: 'Activity Categories' },
    { number: '50+', label: 'Different Programs' },
    { number: '1000+', label: 'Students Involved' },
    { number: '5000+', label: 'Lives Impacted' }
  ]

  // Filter activities based on search term
  const filteredActivities = activities.filter((activity) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      activity.title.toLowerCase().includes(searchLower) ||
      activity.items.some((item) => item.toLowerCase().includes(searchLower))
    )
  })

  useEffect(() => {
    // Scroll animations for activity cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0')
              entry.target.classList.remove('opacity-0', 'translate-y-8')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')
        observer.observe(card)
      }
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [filteredActivities])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Header Section */}
      <section
        className="relative bg-cover bg-center bg-fixed text-white overflow-hidden pt-32 pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-gradient-title hero-title-glow">
            NSS Activities
          </h1>
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 inline-block animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary-800 to-primary-600 px-6 py-2 rounded-full font-bold text-sm md:text-base mb-5 inline-block shadow-lg">
              Established 2020
            </div>
            <div className="space-y-2 text-lg md:text-xl">
              <p className="font-semibold">
                <strong>Coordinator:</strong> Dr. Mahendr Singh Solanki
              </p>
              <p className="font-semibold">
                <strong>Program Officer (Admin):</strong> Mr. Vishal Kumar Parmar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Search Section */}
        <div className="bg-white rounded-3xl p-10 mb-12 shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
            Explore Our Activities
          </h2>
          <div className="max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search activities..."
              className="w-full px-6 py-4 md:py-5 border-2 border-gray-200 rounded-full text-base md:text-lg outline-none transition-all duration-300 bg-gray-50 focus:border-primary-800 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
            />
            <i className="fas fa-search absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-700 mb-10">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                <span className="text-4xl md:text-5xl font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                  {stat.number}
                </span>
                <div className="text-gray-600 font-semibold mt-3 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredActivities.map((activity, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 transition-all duration-400 relative overflow-hidden group"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-700 to-primary-800"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>

              {/* Category Header */}
              <div className="flex items-center mb-8 pb-6 border-b-2 border-gray-100">
                <div className="text-4xl md:text-5xl mr-5 animate-float">{activity.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700">{activity.title}</h3>
              </div>

              {/* Activity List */}
              <ul className="space-y-3">
                {activity.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 text-base md:text-lg pl-6 relative transition-all duration-300 hover:text-primary-800 hover:pl-8 hover:translate-x-1 group/item"
                  >
                    <span className="absolute left-0 text-primary-800 font-bold text-xl top-0">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No activities found matching your search.</p>
          </div>
        )}

        {/* Highlight Section */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Join the Movement
          </h2>
          <p className="text-lg md:text-xl opacity-95 leading-relaxed relative z-10 max-w-3xl mx-auto">
            Be part of India's largest student volunteer program. Make a difference in your community while
            developing leadership skills and social consciousness.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary-700 to-primary-800 text-white text-center py-12 mt-16">
        <div className="max-w-7xl mx-auto px-5">
          <p className="opacity-90 text-base md:text-lg">
            &copy; 2024 National Service Scheme. Committed to building a better India through service and social
            responsibility.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Activities
