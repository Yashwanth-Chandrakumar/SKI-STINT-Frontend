import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { Sidebar, SidebarProvider } from './components/Sidebar';
import Task from './components/Tasks';
import Task1 from './components/Tasks1';
import Userid from './components/Userid';
import { default as Users, default as UserSB } from './components/Users';

export default function HodApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

 

  return (
    
      <SidebarProvider>
        <Routes>
          
            <Route
              path="*"
              element={
                <div className={`app-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
                  <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                  <div className="main-content">
                    <Navbar toggleSidebar={toggleSidebar} />
                    <div className="content">
                      <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/hod/" element={<LandingPage />} />
                        <Route path="/hod/landingpage" element={<LandingPage />} />
                        <Route path="/hod/alltasks1" element={<Task1 />} />
                        <Route path="/hod/pendingtasks1" element={<Task1 filterType="progress" />} />
                        <Route path="/hod/completedtasks1" element={<Task1 filterType="completed" />} />
                        <Route path="/hod/yettasks1" element={<Task1 filterType="yet" />} />
                        <Route path="/hod/alltasks" element={<Task />} />
                        <Route path="/hod/pendingtasks" element={<Task filterType="progress" />} />
                        <Route path="/hod/completedtasks" element={<Task filterType="completed" />} />
                        <Route path="/hod/yettasks" element={<Task filterType="yet" />} />
                        <Route path="/hod/users" element={<UserSB />} />
                        <Route path="/hod/users/user/:userName" element={<Userid />} />
                        <Route path="/hod/allusers" element={<Users />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              }
            />
        </Routes>
      </SidebarProvider>
    
  );
}
