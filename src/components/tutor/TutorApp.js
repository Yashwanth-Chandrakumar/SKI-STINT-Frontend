import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, SidebarProvider } from "./components/Sidebar";
// import LandingPage from "./components/LandingPage";
import Task from "./components/Tasks";
import { default as Users, default as UserSB } from "./components/Users";
// import Userid from './components/Userid';
import Navbar from "./components/Navbar";
// import WebLayout from './components/PrinciComp';

export default function TutorApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <SidebarProvider>
        <div className={`app-wrapper ${sidebarOpen ? "sidebar-open" : ""}`}>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="content">
              <Routes>
                {/* <Route path="/" element={<LandingPage />} /> */}
                {/* <Route path="/landingpage" element={<LandingPage />} /> */}
                <Route path="/" element={<Task />} />
                <Route path="/tutor/" element={<Task />} />
                <Route
                  path="tutor/pendingtasks"
                  element={<Task filterType="progress" />}
                />
                <Route
                  path="tutor/completedtasks"
                  element={<Task filterType="completed" />}
                />
                <Route path="tutor/yettasks" element={<Task filterType="yet" />} />
                <Route path="tutor/users" element={<UserSB />} />
                {/* <Route path="/user/:userName" element={<Userid />} /> */}
                <Route path="tutor/allusers" element={<Users />} />
              </Routes>
            </div>
          </div>
        </div>
      </SidebarProvider>
      </>
      
  );
}
