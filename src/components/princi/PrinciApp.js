import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pcomponents/LandingPage';
import Navbar from './pcomponents/Navbar';
import { Sidebar, SidebarProvider } from './pcomponents/Sidebar';
import Task from './pcomponents/Tasks';
import Userid from './pcomponents/Userid';
import { default as Users, default as UserSB } from './pcomponents/Users';

export default function PrinciApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className={`app-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="content">
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/principal/' element={<LandingPage />} />
              <Route path='principal/landingpage' element={<LandingPage />} />
              <Route path='principal/alltasks' element={<Task />} />
              <Route path='principal/pendingtasks' element={<Task filterType="progress" />} />
              <Route path='principal/completedtasks' element={<Task filterType="completed" />} />
              <Route path='principal/yettasks' element={<Task filterType="yet" />} />
              <Route path='principal/users' element={<UserSB />} />
              <Route path='principal/users/user/:userName' element={<Userid />} />
              <Route path='principal/allusers' element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}