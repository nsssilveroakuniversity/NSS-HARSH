import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'

const About = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const cardRefs = useRef([])

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'history', label: 'History' },
    { id: 'activities', label: 'Activities' },
    { id: 'impact', label: 'Impact' }
  ]

  const timelineEvents = [
    {
      year: '1950',
      content: (
        <>
          <strong>CABE Recommendation:</strong> The Central Advisory Board of Education recommended that students should
          devote time to manual work on a voluntary basis, with active teacher participation.
        </>
      )
    },
    {
      year: '1952',
      content: (
        <>
          <strong>First Five Year Plan:</strong> Emphasized the need for social and labour service, leading to the
          implementation of service camps and village apprenticeship schemes across educational institutions.
        </>
      )
    },
    {
      year: '1958',
      content: (
        <>
          <strong>Nehru's Vision:</strong> Prime Minister Jawaharlal Nehru proposed making social service a prerequisite
          for graduation and directed the Ministry of Education to develop a comprehensive scheme.
        </>
      )
    },
    {
      year: '1959',
      content: (
        <>
          <strong>National Service Committee:</strong> Dr. C.D. Deshmukh chaired a committee to develop concrete
          recommendations for implementing national service in educational institutions.
        </>
      )
    },
    {
      year: '1964-66',
      content: (
        <>
          <strong>Kothari Commission:</strong> The Education Commission recommended integrating social service at all
          educational levels, providing the framework for systematic implementation.
        </>
      )
    },
    {
      year: '1969',
      content: (
        <>
          <strong>Official Launch:</strong> On September 24, 1969, Dr. V.K.R.V. Rao launched NSS in 37 universities
          during Gandhi Centenary Year with ₹5 crores allocation under the Fourth Five Year Plan.
        </>
      )
    }
  ]

  const activityCards = [
    {
      title: 'Rural & Urban Development',
      description:
        'Systematic adoption of villages and urban slums for comprehensive development work, including infrastructure improvement, sanitation, and community organization.'
    },
    {
      title: 'Healthcare Services',
      description:
        'Conducting medico-social surveys, establishing medical centers, organizing mass immunization drives, and providing assistance to patients in hospitals and healthcare facilities.'
    },
    {
      title: 'Educational Initiatives',
      description:
        'Adult literacy programs for marginalized communities, awareness campaigns on social issues, and educational support for underprivileged children.'
    },
    {
      title: 'Disaster Management',
      description:
        'Emergency response and relief operations during natural calamities including cyclones, floods, earthquakes, tsunamis, and other disaster situations nationwide.'
    },
    {
      title: 'Environmental Conservation',
      description:
        'Eco-development programs, watershed management initiatives, tree plantation drives, waste management, and sustainable development projects.'
    },
    {
      title: 'Social Awareness',
      description:
        'Campaigns against social evils, AIDS awareness through "Universities Talk AIDS" (UTA), blood donation drives, and promotion of national values and integration.'
    }
  ]

  const stats = [
    { number: 'All', label: 'States & UTs Covered' },
    { number: '55+', label: 'Years of Service' },
    { number: '1969', label: 'Year Established' },
    { number: 'Millions', label: 'Lives Impacted' }
  ]

  useEffect(() => {
    // Scroll animations for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-5')
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700')
        observer.observe(card)
      }
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [activeTab])

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    // Smooth scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Header Section */}
      <section
        className="relative bg-cover bg-center bg-fixed text-white overflow-hidden pt-32 pb-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 tracking-tight text-gradient-title hero-title-glow">
            National Service Scheme
          </h1>
          <div className="text-xl md:text-2xl font-normal opacity-95 mb-4 animate-fade-in-up">
            Building Character Through Service
          </div>
          <div className="text-lg md:text-xl italic opacity-90 border-t-2 border-white/30 pt-5 mt-5 inline-block text-gold-500 gold-text-shadow animate-fade-in-up">
            "Not Me But You"
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg sticky top-16 md:top-20 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-8 md:px-10 py-6 md:py-7 font-semibold transition-all duration-300 relative overflow-hidden border-b-4 ${
                  activeTab === tab.id
                    ? 'text-primary-800 border-primary-800 bg-gray-50 -translate-y-0.5'
                    : 'text-gray-600 border-transparent hover:text-primary-800 hover:bg-gray-50'
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                About NSS
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Fostering social responsibility and national integration through meaningful community service
              </p>
            </div>

            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-8 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              <h3 className="text-3xl font-bold text-primary-700 mb-6 relative z-10">Our Foundation</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg relative z-10">
                The National Service Scheme (NSS) embodies the visionary ideals of Mahatma Gandhi, who emphasized that
                students should view their education not as an opportunity for intellectual luxury, but as preparation
                for dedicated service to society. The scheme represents a commitment to developing socially conscious
                citizens who understand their responsibility toward national development.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                Established as a means to bridge the gap between academic learning and practical social service, NSS has
                evolved into a powerful instrument for character building, national integration, and community
                development.
              </p>
            </div>

            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-primary-800 p-10 md:p-12 mb-8 rounded-r-3xl relative transition-all duration-400 hover:translate-x-2 hover:shadow-xl group"
            >
              <div className="absolute top-4 left-6 text-6xl text-primary-800 opacity-20">"</div>
              <p className="text-xl md:text-2xl italic text-gray-800 ml-12 leading-relaxed mb-6">
                Students should do something positive so that the life of the villagers might be raised to a higher
                material and moral level.
              </p>
              <p className="text-right font-bold text-primary-700 text-lg">— Mahatma Gandhi</p>
            </div>

            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-3xl p-12 md:p-16 mb-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-50"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Our Mission</h3>
              <p className="text-lg md:text-xl opacity-95 leading-relaxed relative z-10">
                To develop social consciousness among students and provide them with opportunities to work with the
                community in solving problems concerning the country and developing wholesome contacts between students
                and teachers on one hand and establishing a constructive linkage between the campus and the community on
                the other.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[3 + index] = el)}
                  className="bg-white text-center p-8 md:p-10 rounded-3xl shadow-xl border-t-4 border-primary-800 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                  <span className="text-4xl md:text-5xl font-extrabold block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                    {stat.number}
                  </span>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History Section */}
        {activeTab === 'history' && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                Historical Evolution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From Gandhi's vision to nationwide implementation
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line - Desktop */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-800 to-primary-600 rounded-full transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Timeline line - Mobile */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-800 to-primary-600 rounded-full md:hidden"></div>

              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`relative mb-10 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%] md:ml-[45%]'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute top-8 w-5 h-5 bg-gradient-to-br from-primary-800 to-primary-600 rounded-full border-4 border-white shadow-lg z-10 ${
                      index % 2 === 0 ? 'right-[calc(55%-10px)]' : 'left-[calc(-45%-10px)]'
                    }`}
                  ></div>

                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute left-4 top-8 w-5 h-5 bg-gradient-to-br from-primary-800 to-primary-600 rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2"></div>

                  <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="bg-gradient-to-r from-primary-800 to-primary-600 text-white px-6 py-2 rounded-full font-bold text-sm md:text-base inline-block mb-5 shadow-lg">
                      {event.year}
                    </div>
                    <div className="text-gray-600 leading-relaxed text-base md:text-lg">{event.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activities Section */}
        {activeTab === 'activities' && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                Our Activities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive community service programs addressing diverse social needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {activityCards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-l-4 border-primary-800 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                  <h4 className="text-2xl font-bold text-primary-700 mb-5 relative z-10">{card.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg relative z-10">{card.description}</p>
                </div>
              ))}
            </div>

            <div
              ref={(el) => (cardRefs.current[6] = el)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              <h3 className="text-3xl font-bold text-primary-700 mb-6 relative z-10">Special Thematic Campaigns</h3>
              <div className="space-y-3 text-gray-600 leading-relaxed text-lg relative z-10">
                <p>
                  <strong>Youth Against Famine (1973):</strong> Addressing food security and hunger issues
                </p>
                <p>
                  <strong>Youth Against Dirt & Disease (1974-75):</strong> Public health and sanitation initiatives
                </p>
                <p>
                  <strong>Youth for Literacy (1985-93):</strong> Educational empowerment and adult education
                </p>
                <p>
                  <strong>Youth for National Integration (1993-95):</strong> Promoting communal harmony and unity
                </p>
                <p>
                  <strong>Youth for Sustainable Development (1995-96 onwards):</strong> Focus on watershed management
                  and environmental conservation
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Impact Section */}
        {activeTab === 'impact' && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transforming communities and building responsible citizens
              </p>
            </div>

            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-8 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              <h3 className="text-3xl font-bold text-primary-700 mb-6 relative z-10">Nationwide Presence</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg relative z-10">
                NSS has expanded to cover all states and Union Territories, reaching universities, colleges, and +2
                level institutions across India. The program has successfully created a network of socially conscious
                students and educators committed to national development.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                The scheme has earned appreciation, respect, and confidence from communities nationwide, with numerous
                instances of exemplary work by NSS units demonstrating the program's effectiveness in creating meaningful
                social change.
              </p>
            </div>

            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-3xl p-12 md:p-16 mb-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-50"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Core Values We Promote</h3>
              <p className="text-lg md:text-xl opacity-95 leading-relaxed relative z-10">
                Nationalism • Democracy • Secularism • Social Harmony • Scientific Temper • Community Service •
                National Integration • Environmental Consciousness
              </p>
            </div>

            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-8 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              <h3 className="text-3xl font-bold text-primary-700 mb-6 relative z-10">International Recognition</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                The "Universities Talk AIDS" (UTA) campaign launched in 1991-92 has earned international attention and
                appreciation for its innovative approach to AIDS awareness and prevention education among youth.
              </p>
            </div>

            <div
              ref={(el) => (cardRefs.current[3] = el)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              <h3 className="text-3xl font-bold text-primary-700 mb-6 relative z-10">Transformative Outcomes</h3>
              <div className="space-y-3 text-gray-600 leading-relaxed text-lg relative z-10">
                <p>NSS has successfully:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Developed social consciousness and awareness among millions of students</li>
                  <li>Created better understanding and appreciation of community problems</li>
                  <li>Established effective linkages between educational institutions and communities</li>
                  <li>Contributed to national integration and communal harmony</li>
                  <li>Promoted democratic values and scientific temper</li>
                  <li>Provided practical experience in community service and social work</li>
                </ul>
              </div>
            </div>
          </div>
        )}
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

export default About
