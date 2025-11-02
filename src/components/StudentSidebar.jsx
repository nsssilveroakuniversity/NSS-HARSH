import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StudentSidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("registrationType");
    navigate("/auth/login");
    setShowLogoutModal(false);
  };

  const menuItems = [
    { title: "Dashboard", path: "/student/dashboard" },
    { title: "My Profile", path: "/student/profile" },
    { title: "Events / Activities", path: "/student/events"},
    { title: "Attendance", path: "/student/attendance"},
    { title: "Certificates", path: "/student/certificates"},
    { title: "Announcements", path: "/student/announcements"},
    { title: "Gallery", path: "/student/gallery"},
    { title: "Messages", path: "/student/messages"},
    { title: "Feedback", path: "/student/feedback"},
  ];

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
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-primary-800 to-primary-900 text-white z-40 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-primary-700/50">
          <h2 className="text-2xl font-bold text-gradient-title">
            Student Panel
          </h2>
          <p className="text-sm text-primary-300 mt-1">Welcome Back 👋</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg transform scale-105"
                      : "text-primary-200 hover:bg-primary-700/50 hover:text-white hover:translate-x-1"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-primary-700/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-red-600/20 text-red-300 hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Logout Modal */}
      {showLogoutModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowLogoutModal(false)} />
          <div className="fixed top-1/2 h-80 w-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-white rounded-lg shadow-2xl w-80">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Confirm Logout</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Are you sure you want to logout?</p>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 rounded-b-lg">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StudentSidebar;
