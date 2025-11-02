import React from 'react';
import StudentSidebar from './StudentSidebar';
import { Outlet } from 'react-router-dom';

const StudentLayout = () => {
  return (
    <div className="flex">
      <StudentSidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;