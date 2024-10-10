import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar'; // Correct import for the named export SideBar

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      {/* Sidebar is positioned on the left for larger screens */}
      <SideBar/>
      {/* Outlet is used for nested routes */}
      <Outlet/>
    </div>
  );
}

export default DashboardLayout;
