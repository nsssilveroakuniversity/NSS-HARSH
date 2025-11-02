import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Check if user is logged in
  const isAuthenticated = location.pathname.includes('/student') || 
                         location.pathname.includes('/admin') || 
                         location.pathname.includes('/program-officer')

  // If user is logged in, don't render the header
  if (isAuthenticated) {
    return null
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-2xl' : 'glass-effect shadow-xl'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 h-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500 hover:scale-105 transition-transform"
        >
          NSS Portal
        </Link>
        
        <ul className={`fixed md:static top-0 left-0 w-80 md:w-auto md:h-auto h-screen md:bg-transparent bg-white md:shadow-none shadow-2xl flex-col md:flex-row flex md:items-center md:gap-0 pt-24 md:pt-0 transition-transform duration-300 ease-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
          <li className="w-full md:w-auto">
            <Link 
              to="/" 
              className={`block px-2 py-1 text-base font-semibold rounded-lg md:rounded-xl transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-primary-700 md:text-gray-700 hover:text-primary-500 hover:bg-primary-50 md:hover:bg-primary-500/10'
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/about" 
              className={`block px-2 py-1 text-base font-semibold rounded-lg md:rounded-xl transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-primary-700 md:text-gray-700 hover:text-primary-500 hover:bg-primary-50 md:hover:bg-primary-500/10'
              }`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/activities" 
              className={`block px-2 py-1 text-base font-semibold rounded-lg md:rounded-xl transition-all duration-300 ${
                location.pathname === '/activities' 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-primary-700 md:text-gray-700 hover:text-primary-500 hover:bg-primary-50 md:hover:bg-primary-500/10'
              }`}
              onClick={handleLinkClick}
            >
              Activities
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/contact" 
              className={`block px-2 py-1 text-base font-semibold rounded-lg md:rounded-xl transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-primary-700 md:text-gray-700 hover:text-primary-500 hover:bg-primary-50 md:hover:bg-primary-500/10'
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/gallery" 
              className={`block px-2 py-1 text-base font-semibold rounded-lg md:rounded-xl transition-all duration-300 ${
                location.pathname === '/gallery' 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' 
                  : 'text-primary-700 md:text-gray-700 hover:text-primary-500 hover:bg-primary-50 md:hover:bg-primary-500/10'
              }`}
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
          </li>
          <div className="md:hidden px-6 mt-4 space-y-3">
            <Link 
              to="/auth/login" 
              className="block w-full py-3 px-1 text-center text-primary-500 font-medium border-2 border-primary-500 rounded-full hover:bg-primary-500 hover:text-white  duration-300"
              onClick={handleLinkClick}
            >
              Login
            </Link>
            <Link 
              to="/auth/register" 
              className="block w-full py-3 px-1 text-center text-white font-medium border-2 border-transparent rounded-full hover:shadow-lg hover:-translate-y-0.5 duration-300"
              onClick={handleLinkClick}
            >
              Register
            </Link>
          </div>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link 
            to="/auth/login" 
            className="py-1 px-5 text-primary-500 font-medium border-2 border-primary-500 rounded-full hover:bg-primary-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-sm"
          >
            Login
          </Link>
          <Link 
            to="/auth/register" 
            className="py-1 px-5 text-primary-500 font-medium border-2 border-primary-500 rounded-full hover:bg-primary-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-sm"
          >
            Register
          </Link>
        </div>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-1.5 z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          ></div>
        )}
      </nav>
    </header>
  )
}

export default Header
