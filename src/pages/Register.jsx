// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import Header from '../components/Header'
// import { getApiUrl } from '../config/api'

// const Register = () => {
//   const [formData, setFormData] = useState({
//     profilePhoto: null,
//     fullName: '',
//     email: '',
//     mobileNumber: '',
//     registrationType: '',
//     password: ''
//   })
//   const [message, setMessage] = useState({ type: '', text: '' })
//   const [isLoading, setIsLoading] = useState(false)
//   const navigate = useNavigate()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       profilePhoto: e.target.files[0] || null
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!formData.profilePhoto) {
//       setMessage({ type: 'error', text: 'Profile photo is required.' })
//       return
//     }

//     setIsLoading(true)
//     setMessage({ type: 'info', text: 'Creating account...' })

//     try {
//       const submitData = new FormData()
//       submitData.append('profilePhoto', formData.profilePhoto)
//       submitData.append('fullName', formData.fullName)
//       submitData.append('email', formData.email)
//       submitData.append('mobileNumber', formData.mobileNumber)
//       submitData.append('registrationType', formData.registrationType)
//       submitData.append('password', formData.password)

//       const res = await fetch(getApiUrl('/api/users/register'), {
//         method: 'POST',
//         body: submitData
//       })

//       const data = await res.json()

//       if (res.ok) {
//         setMessage({
//           type: 'success',
//           text: data.message || 'Registration successful! Redirecting to login...'
//         })
        
//         // Reset form
//         setFormData({
//           profilePhoto: null,
//           fullName: '',
//           email: '',
//           mobileNumber: '',
//           registrationType: '',
//           password: ''
//         })
        
//         // Redirect to login after 2 seconds
//         setTimeout(() => {
//           navigate('/auth/login')
//         }, 2000)
//       } else {
//         setMessage({
//           type: 'error',
//           text: data.message || 'Registration failed. Please try again.'
//         })
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Network error. Please try again.' })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen relative bg-cover bg-center bg-fixed" style={{
//       backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
//     }}>
//       {/* Dot pattern overlay */}
//       <div className="fixed inset-0 pointer-events-none z-10"
//         style={{
//           backgroundImage: 
//             "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)," +
//             "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 1px, transparent 1px)," +
//             "radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.06) 1px, transparent 1px)," +
//             "radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.09) 1px, transparent 1px)",
//           backgroundSize: "300px 300px, 400px 400px, 350px 350px, 450px 450px"
//         }}
//       ></div>

//       <Header />

//       {/* Register Section */}
//       <div className="flex items-center justify-center min-h-[calc(100vh-70px)] py-12 px-5 relative z-20">
//         <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-white/20 max-w-lg w-full relative overflow-hidden animate-fade-in-up">
//           {/* Top accent bar */}
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>

//           {/* Shimmer effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>

//           {/* Header */}
//           <div className="text-center mb-10 relative z-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800" style={{fontSize: 'clamp(1rem, 4vw, 1.25rem)'}}>
//               Join NSS Portal
//             </h1>
//             <p className="text-base md:text-lg text-gray-600 font-medium" style={{fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)'}}>Create your account to get started</p>
//           </div>

//           {/* Register Form */}
//           <form onSubmit={handleSubmit} className="relative z-10" encType="multipart/form-data">
//             <div className="mb-6">
//               <label htmlFor="profilePhoto" className="block mb-3 text-base md:text-lg text-gray-700 font-semibold" style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}>
//                 Profile Photo
//               </label>
//               <input
//                 type="file"
//                 id="profilePhoto"
//                 name="profilePhoto"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 required
//                 className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl transition-all duration-300 bg-white/90 cursor-pointer focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
//                 style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="fullName" className="block mb-3 text-base md:text-lg text-gray-700 font-semibold" style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}>
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl transition-all duration-300 bg-white/90 focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg"
//                 placeholder="Enter your full name"
//                 style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="email" className="block mb-3 text-base md:text-lg text-gray-700 font-semibold" style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}>
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl transition-all duration-300 bg-white/90 focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg"
//                 placeholder="Enter your email address"
//                 style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="mobileNumber" className="block mb-3 text-base md:text-lg text-gray-700 font-semibold" style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}>
//                 Mobile Number
//               </label>
//               <input
//                 type="text"
//                 id="mobileNumber"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl transition-all duration-300 bg-white/90 focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg"
//                 placeholder="Enter your mobile number"
//                 style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="registrationType" className="block mb-3 text-base md:text-lg text-gray-700 font-semibold" style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}>
//                 Admin Type
//               </label>
//               <select
//                 id="registrationType"
//                 name="registrationType"
//                 value={formData.registrationType}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl transition-all duration-300 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 cursor-pointer focus:outline-none focus:border-primary-500 focus:bg-white focus:text-primary-700 focus:shadow-lg appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20fill=%22%23667eea%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20width=%2224%22%20xmlns=%22http://www.w3.org/2000/svg%22><path%20d=%22M7%2010l5%205%205-5z%22/></svg>')] bg-no-repeat bg-[right_18px_center] bg-[length:22px_22px]"
//                 style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}
//               >
//                 <option value="" disabled hidden>
//                   Select Your Role
//                 </option>
//                 <option value="program_officer">Program Officer</option>
//                 <option value="student">Student</option>
//               </select>
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block mb-3 text-base md:text-lg text-gray-700 font-semibold" style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}>
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl transition-all duration-300 bg-white/90 focus:outline-none focus:border-primary-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-lg"
//                 placeholder="Enter your password"
//                 style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-4.5 md:py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-bold uppercase tracking-wide transition-all duration-400 mt-4 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:from-primary-600 hover:to-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
//               style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}
//             >
//               <span className="relative z-10">
//                 {isLoading ? 'Creating Account...' : 'Create Account'}
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-600"></span>
//             </button>
//           </form>

//           {/* Message Display */}
//           {message.text && (
//             <div
//               className={`mt-6 p-4 rounded-2xl text-base font-medium relative z-10 ${
//                 message.type === 'success'
//                   ? 'bg-green-50 text-green-800 border-2 border-green-200'
//                   : message.type === 'error'
//                   ? 'bg-red-50 text-red-800 border-2 border-red-200'
//                   : 'bg-blue-50 text-blue-800 border-2 border-blue-200'
//               }`}
//             >
//               {message.text}
//             </div>
//           )}

//           {/* Login Link */}
//           <div className="mt-8 text-center text-gray-600 relative z-10" style={{fontSize: 'clamp(0.75rem, 1vw, 1.25rem)'}}>
//             <span>
//               Already have an account?{' '}
//               <Link
//                 to="/auth/login"
//                 className="text-primary-500 font-semibold hover:text-primary-700 hover:underline transition-all duration-300"
//               >
//                 Login here
//               </Link>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../components/Header'
import { getApiUrl } from '../config/api'

const Register = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    fullName: '',
    email: '',
    mobileNumber: '',
    registrationType: '',
    password: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profilePhoto: e.target.files[0] || null
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.profilePhoto) {
      setMessage({ type: 'error', text: 'Profile photo is required.' })
      return
    }

    setIsLoading(true)
    setMessage({ type: 'info', text: 'Creating account...' })

    try {
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) =>
        submitData.append(key, value)
      )

      const res = await fetch(getApiUrl('/api/users/register'), {
        method: 'POST',
        body: submitData
      })

      const data = await res.json()
      if (res.ok) {
        setMessage({
          type: 'success',
          text: data.message || 'Registration successful! Redirecting...'
        })
        setFormData({
          profilePhoto: null,
          fullName: '',
          email: '',
          mobileNumber: '',
          registrationType: '',
          password: ''
        })
        setTimeout(() => navigate('/auth/login'), 2000)
      } else {
        setMessage({
          type: 'error',
          text: data.message || 'Registration failed. Please try again.'
        })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative" 
    style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }}>
      <Header />

      <div className="mt-20 bg-white/10 h-[auto] backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg transition-all duration-500 hover:scale-[1.02]">

        {/* Title */}
        <h2 className="text-center text-white text-2xl font-semibold mb-2 tracking-wide">
          CREATE ACCOUNT
        </h2>
        <p className="text-center text-white/80 mb-6 text-sm">
          Join the NSS Portal today
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="profilePhoto"
              className="block text-sm text-white/90 mb-1 font-medium"
            >
              Profile Photo
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 cursor-pointer file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-white/20 file:text-white hover:file:bg-white/30"
            />
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="block text-sm text-white/90 mb-1 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white/90 mb-1 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm text-white/90 mb-1 font-medium"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label
              htmlFor="registrationType"
              className="block text-sm text-white/90 mb-1 font-medium"
            >
              Register As
            </label>
            <select
              id="registrationType"
              name="registrationType"
              value={formData.registrationType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 cursor-pointer"
            >
              <option value="">Select your role</option>
              <option value="program_officer">Program Officer</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-white/90 mb-1 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {message.text && (
          <div
            className={`mt-5 text-center py-2 rounded-md text-sm font-medium ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : message.type === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <p className="text-center text-white/80 text-sm mt-6">
          Already have an account?{' '}
          <Link
            to="/auth/login"
            className="text-white font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
