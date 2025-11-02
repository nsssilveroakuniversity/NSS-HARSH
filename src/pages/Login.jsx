import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../components/Header'
import { getApiUrl } from '../config/api'

// Add 'export' keyword before the component definition
export const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: 'info', text: 'Signing in...' })

    try {
      const res = await fetch(getApiUrl('/api/users/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      console.log('Login response:', data)

      if (res.ok) {
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' })

        // Save authentication data
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('registrationType', data.user.registrationType)
        localStorage.setItem('userName', data.user.fullName)
        localStorage.setItem('userData', JSON.stringify(data.user))

        // Add delay before redirect to ensure state is updated
        setTimeout(() => {
          handleRedirect(data.user.registrationType)
        }, 500)
      } else {
        throw new Error(data.message || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setMessage({
        type: 'error',
        text: error.message || 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRedirect = (registrationType) => {
    console.log('Redirecting to:', registrationType) // Add this for debugging
    
    try {
      switch (registrationType) {
        case 'admin':
          navigate('/admin-dashboard', { replace: true })
          break
        case 'program_officer':
          navigate('/program-officer-dashboard', { replace: true })
          break
        case 'student':
          navigate('/student-dashboard', { replace: true })
          break
        default:
          throw new Error('Invalid user type')
      }
    } catch (error) {
      console.error('Navigation error:', error)
      setMessage({
        type: 'error',
        text: 'Navigation failed. Please try again or contact support.'
      })
    }
  }

  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)," +
            "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 1px, transparent 1px)," +
            "radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.06) 1px, transparent 1px)," +
            "radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.09) 1px, transparent 1px)",
          backgroundSize:
            '300px 300px, 400px 400px, 350px 350px, 450px 450px'
        }}
      ></div>

      <Header />

      {/* Login Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-70px)] py-12 px-5 relative z-20">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-white/20 max-w-md w-full relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>

          <div className="text-center mb-10 relative z-10">
            <h1 className="font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
              Welcome Back
            </h1>
            <p className="text-gray-600 font-medium" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>
              Sign in to your NSS Portal account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-6">
              <label htmlFor="identifier" className="block mb-3 text-lg md:text-xl font-semibold">
                Email or Mobile
              </label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                value={formData.identifier}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 md:py-5 border-2 text-black border-gray-200 rounded-2xl text-lg md:text-xl transition-all duration-300 bg-white/90 focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg"
                placeholder="Enter your email or mobile"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-3 text-lg md:text-xl font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 md:py-5 border-2 text-black border-gray-200 rounded-2xl text-lg md:text-xl transition-all duration-300 bg-white/90 focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4.5 md:py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl text-lg md:text-xl font-bold uppercase tracking-wide transition-all duration-400 mt-4 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:from-primary-600 hover:to-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isLoading ? 'Signing in...' : 'Sign In'}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-600"></span>
            </button>
          </form>

          {message.text && (
            <div
              className={`mt-6 p-4 rounded-2xl text-base font-medium relative z-10 ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border-2 border-green-200'
                  : message.type === 'error'
                  ? 'bg-red-50 text-red-800 border-2 border-red-200'
                  : 'bg-blue-50 text-blue-800 border-2 border-blue-200'
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="mt-8 text-center text-gray-600 text-base relative z-10">
            <span>
              Don't have an account?{' '}
              <Link
                to="/auth/register"
                className="text-primary-500 font-semibold hover:text-primary-700 hover:underline transition-all duration-300"
              >
                Register now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
