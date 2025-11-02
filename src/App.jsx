import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Events from './components/Events'
import GallerySection from './components/Gallery'
import Team from './components/Team'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'
import ActivitiesPage from './pages/Activities'
import AboutPage from './pages/About'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import AdminDashboard from './components/dashboards/AdminDashboard'
import ProgramOfficerDashboard from './components/dashboards/ProgramOfficerDashboard'
import StudentDashboard from './components/dashboards/StudentDashboard'
import Login from './pages/Login'  // if using default export

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    // Observe all section cards
    const cards = document.querySelectorAll('.card-hover')
    cards.forEach(card => {
      card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')
      observer.observe(card)
    })

    return () => {
      cards.forEach(card => observer.unobserve(card))
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/program-officer/dashboard" element={<ProgramOfficerDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/program-officer-dashboard" element={<ProgramOfficerDashboard />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Activities />
      <Events />
      <GallerySection />
      <Team />
    </>
  )
}

export default App
