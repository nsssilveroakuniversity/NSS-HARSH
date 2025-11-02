import React, { useEffect, useState } from 'react';
import StudentSidebar from '../StudentSidebar';

const StudentDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Refresh the page once per login/session
    const hasRefreshed = localStorage.getItem('studentDashboardRefreshed');

    if (!hasRefreshed) {
      localStorage.setItem('studentDashboardRefreshed', 'true');
      window.location.reload(); // trigger refresh once
    }

    // Simulate loading (e.g. API call delay)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen text-lg font-semibold">
          Loading...
        </div>
      ) : (
        <>
          <StudentSidebar />
          <div className="flex-1 p-6">
            {/* Main dashboard content */}
            <h1 className="text-2xl font-bold mb-4">Welcome to Student Dashboard</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDashboard;
