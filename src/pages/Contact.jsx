import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const cardRefs = useRef([])

  useEffect(() => {
    // Scroll animations for contact cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
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
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactCards = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: (
        <a
          href="mailto:nss@silveroakuni.ac.in"
          className="text-primary-800 font-semibold transition-all duration-300 hover:text-primary-700 hover:underline hover:translate-x-2 inline-block py-2"
        >
          <i className="fas fa-envelope-open mr-2"></i>
          nss@silveroakuni.ac.in
        </a>
      )
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 p-6 rounded-2xl border-l-4 border-primary-800 transition-all duration-400 hover:from-primary-100 hover:to-primary-200/50 hover:translate-x-2">
            <strong className="text-primary-700 block mb-3 text-xl font-bold">
              <i className="fas fa-user-tie mr-2"></i>
              Dr. Mahendr Singh Solanki
            </strong>
            <a
              href="tel:+919998328753"
              className="text-primary-800 font-semibold transition-all duration-300 hover:text-primary-700 hover:underline inline-block"
            >
              <i className="fas fa-phone mr-2"></i>
              +91 99983 28753
            </a>
          </div>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 p-6 rounded-2xl border-l-4 border-primary-800 transition-all duration-400 hover:from-primary-100 hover:to-primary-200/50 hover:translate-x-2">
            <strong className="text-primary-700 block mb-3 text-xl font-bold">
              <i className="fas fa-user mr-2"></i>
              Mr. Vishal Kumar Parmar
            </strong>
            <a
              href="tel:+919909961087"
              className="text-primary-800 font-semibold transition-all duration-300 hover:text-primary-700 hover:underline inline-block"
            >
              <i className="fas fa-phone mr-2"></i>
              +91 99099 61087
            </a>
          </div>
        </div>
      )
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: (
        <div className="text-gray-600 leading-relaxed text-lg space-y-2">
          <strong className="text-primary-700 block mb-3">
            <i className="fas fa-university mr-2"></i>
            Silver Oak University
          </strong>
          <div className="space-y-1">
            <p><i className="fas fa-map-pin mr-2 text-primary-600"></i>352/353, 370/371, near Bhavik Publication</p>
            <p><i className="fas fa-location-arrow mr-2 text-primary-600"></i>Gota Gam, Gota</p>
            <p><i className="fas fa-city mr-2 text-primary-600"></i>Ahmedabad, Gujarat 382481</p>
            <p><i className="fas fa-flag mr-2 text-primary-600"></i>India</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      {/* Hero Header Section */}
      <section
        className="relative bg-cover bg-center bg-fixed text-white overflow-hidden pt-32 pb-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gradient-title hero-title-glow">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-95 font-normal animate-fade-in-up">
            Get in touch with our NSS team
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-24">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {contactCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 transition-all duration-400 relative overflow-hidden group"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-700 to-primary-800"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>

              {/* Icon */}
              <div className="text-6xl mb-8 inline-block">
                <i
                  className={`${card.icon} bg-gradient-to-br from-primary-700 to-primary-800 bg-clip-text text-transparent animate-float`}
                ></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">{card.title}</h3>

              {/* Content */}
              <div className="text-gray-600 leading-relaxed">{card.content}</div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
            <i className="fas fa-map mr-3"></i>
            Find Us
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 border-4 border-primary-800 mt-10 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.185493418099!2d72.53206287405027!3d23.090304579126343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833af6f39347%3A0xf1db9065daea7008!2sSilver%20Oak%20University!5e0!3m2!1sen!2sin!4v1753979763672!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-lg"
              title="Silver Oak University Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
            <i className="fas fa-paper-plane mr-3"></i>
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="form-group">
                <label htmlFor="name" className="block mb-3 font-semibold text-primary-700 text-lg">
                  <i className="fas fa-user mr-2"></i>Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-5 py-5 border-2 border-gray-200 rounded-2xl text-base transition-all duration-300 bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block mb-3 font-semibold text-primary-700 text-lg">
                  <i className="fas fa-envelope mr-2"></i>Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-5 border-2 border-gray-200 rounded-2xl text-base transition-all duration-300 bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="form-group">
                <label htmlFor="phone" className="block mb-3 font-semibold text-primary-700 text-lg">
                  <i className="fas fa-phone mr-2"></i>Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-5 border-2 border-gray-200 rounded-2xl text-base transition-all duration-300 bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="block mb-3 font-semibold text-primary-700 text-lg">
                  <i className="fas fa-tag mr-2"></i>Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-5 border-2 border-gray-200 rounded-2xl text-base transition-all duration-300 bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="nss-activity">NSS Activity Information</option>
                  <option value="volunteer">Volunteer Registration</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-8">
              <label htmlFor="message" className="block mb-3 font-semibold text-primary-700 text-lg">
                <i className="fas fa-comment mr-2"></i>Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your inquiry or message..."
                required
                rows="6"
                className="w-full px-5 py-5 border-2 border-gray-200 rounded-2xl text-base transition-all duration-300 bg-gray-50 resize-y min-h-[160px] focus:outline-none focus:border-primary-800 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block mx-auto px-16 py-5 bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-400 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:from-primary-800 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                <i className="fas fa-paper-plane mr-2"></i>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-600"></span>
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary-700 to-primary-800 text-white text-center py-16 mt-24">
        <div className="max-w-7xl mx-auto px-5">
          <p className="opacity-90 text-lg md:text-xl">
            &copy; 2024 National Service Scheme. Committed to building a better India through service and social
            responsibility.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
