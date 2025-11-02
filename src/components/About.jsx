import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="font-black text-center mb-16 text-gradient-title tracking-tight" style={{fontSize: 'clamp(1rem, 3vw, 1.25rem)'}}>
          About NSS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/12 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-500 card-hover">
            <h3 className="font-semibold mb-6 text-white" style={{fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'}}>Our Mission</h3>
            <p className="mb-4 text-gray-100 leading-relaxed" style={{fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)'}}>
              The National Service Scheme (NSS) unit of Silver Oak University is committed to developing students' personality through community service. NSS provides hands-on experience to young students in delivering community service.
            </p>
            <p className="mb-6 text-gray-100 leading-relaxed" style={{fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)'}}>
              Our unit organizes various activities including awareness campaigns, blood donation camps, tree plantation drives, and rural development programs to inculcate social consciousness and responsibility among students.
            </p>
            <Link 
              to="/about" 
              className="inline-block mt-8 px-9 py-4.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-base md:text-lg uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-500"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="bg-white/12 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-500 card-hover">
            <h3 className="font-semibold mb-6 text-white" style={{fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'}}>Key Objectives</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-100 text-lg">
                <i className="fas fa-check text-green-400 mr-3 text-xl"></i>
                <span>Develop leadership qualities</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg md:text-xl">
                <i className="fas fa-check text-green-400 mr-3 text-xl"></i>
                <span>Promote social harmony</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg md:text-xl">
                <i className="fas fa-check text-green-400 mr-3 text-xl"></i>
                <span>Environmental conservation</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg md:text-xl">
                <i className="fas fa-check text-green-400 mr-3 text-xl"></i>
                <span>Rural development</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg md:text-xl">
                <i className="fas fa-check text-green-400 mr-3 text-xl"></i>
                <span>Health awareness</span>
              </li>
              <li className="flex items-center text-gray-100 text-lg md:text-xl">
                <i className="fas fa-check text-green-400 mr-3 text-xl"></i>
                <span>Education promotion</span>
              </li>
            </ul>
            <Link 
              to="/about" 
              className="inline-block mt-8 px-9 py-4.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-base md:text-lg uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-500"
            >
              View Full Objectives
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
