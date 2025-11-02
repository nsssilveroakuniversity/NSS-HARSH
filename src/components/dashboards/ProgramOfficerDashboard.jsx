import React, { useEffect, useState } from 'react';
import ProgramOfficerSidebar from '../ProgramOfficerSidebar'; // Adjust the path if needed  

const ProgramOfficerDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching user data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex">
      {loading ? (
        <div>Loading...</div> // Show a loading indicator
      ) : (
        <ProgramOfficerSidebar />
      )}
      <div className="flex-1 p-6">
        {/* Main content will go here */}
      </div>
    </div>
  )
}

export default ProgramOfficerDashboard