import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HodApp from './components/hod/HodApp';
import Login1 from './components/Login1';
import PrinciApp from './components/princi/PrinciApp';
import TutorApp from './components/tutor/TutorApp';

const ProtectedRoute = ({ element, allowedRoles, ...rest }) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  const userRole = localStorage.getItem("userRole");
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }
  
  return element;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login1 />} />
        <Route path="/principal/*" element={
          <ProtectedRoute 
            element={<PrinciApp />} 
            allowedRoles={['principal']}
          />
        } />
        <Route path="/hod/*" element={
          <ProtectedRoute 
            element={<HodApp />} 
            allowedRoles={['hod']}
          />
        } />
        <Route path="/tutor/*" element={
          <ProtectedRoute 
            element={<TutorApp />} 
            allowedRoles={['tutor']}
          />
        } />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React, { useState } from 'react';
// import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import LandingPage from './components/LandingPage';
// import Login1 from './components/Login1';
// import Navbar from './components/Navbar';
// import { Sidebar, SidebarProvider } from './components/Sidebar';
// import Task from './components/Tasks';
// import Task1 from './components/Tasks1';
// import Userid from './components/Userid';
// import { default as Users, default as UserSB } from './components/Users';


// const ProtectedRoute = ({ element, ...rest }) => {
//   const isAuthenticated = localStorage.getItem("authenticated")
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <Router>
//         <SidebarProvider>
//           <Routes>
//             <Route path="/login" element={<Login1 />} />
//             <Route
//               path="*"
//               element={
//                 <div className={`app-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
//                   <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//                   <div className="main-content">
//                     <Navbar toggleSidebar={toggleSidebar} />
//                     <div className="content">
//                       <Routes>
//                         <Route path="/" element={<ProtectedRoute element={<LandingPage />} />} />
//                         <Route path="/landingpage" element={<ProtectedRoute element={<LandingPage />} />} />
//                         <Route path="/alltasks1" element={<ProtectedRoute element={<Task1 />} />} />
//                         <Route path="/pendingtasks1" element={<ProtectedRoute element={<Task1 filterType="progress" />} />} />
//                         <Route path="/completedtasks1" element={<ProtectedRoute element={<Task1 filterType="completed" />} />} />
//                         <Route path="/yettasks1" element={<ProtectedRoute element={<Task1 filterType="yet" />} />} />
//                         <Route path="/alltasks" element={<ProtectedRoute element={<Task />} />} />
//                         <Route path="/pendingtasks" element={<ProtectedRoute element={<Task filterType="progress" />} />} />
//                         <Route path="/completedtasks" element={<ProtectedRoute element={<Task filterType="completed" />} />} />
//                         <Route path="/yettasks" element={<ProtectedRoute element={<Task filterType="yet" />} />} />
//                         <Route path="/users" element={<ProtectedRoute element={<UserSB />} />} />
//                         <Route path="/user/:userName" element={<ProtectedRoute element={<Userid />} />} />
//                         <Route path="/allusers" element={<ProtectedRoute element={<Users />} />} />
//                       </Routes>
//                     </div>
//                   </div>
//                 </div>
//               }
//             />
//           </Routes>
//         </SidebarProvider>
//     </Router>
//   );
// }
