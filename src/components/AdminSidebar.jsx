import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Program Officer Management', path: '/admin/program-officers'},
    { name: 'Student Management', path: '/admin/students'},
    { name: 'Event Management', path: '/admin/events'},
    { name: 'Attendance Management', path: '/admin/attendance' },
    { name: 'Certificates Management', path: '/admin/certificates' },
    { name: 'Reports Management', path: '/admin/reports'},
    { name: 'Announcement Management', path: '/admin/announcements' },
    { name: 'Gallery Management', path: '/admin/gallery' },
    { name: 'Contact Queries', path: '/admin/contact-queries'},
    { name: 'Site Settings', path: '/admin/settings'},
    { name: 'User Management', path: '/admin/users'},
    { name: 'System Logs', path: '/admin/logs'},
    { name: 'Notifications', path: '/admin/notifications' },
  ]

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/')
  }

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-3 bg-primary-700 text-white rounded-lg shadow-lg hover:bg-primary-600 transition-all duration-300"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-primary-800 to-primary-900 text-white z-40 transform transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-primary-700/50 sticky top-0 bg-primary-800/95 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-gradient-title">
            Admin Panel
          </h2>
          <p className="text-sm text-primary-300 mt-1">Management Dashboard</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1 px-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg transform scale-[1.02]'
                      : 'text-primary-200 hover:bg-primary-700/50 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-primary-700/50 sticky bottom-0 bg-primary-900/95 backdrop-blur-sm">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-red-600/20 text-red-300 hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar

