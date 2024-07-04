import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PersonIcon from '@mui/icons-material/Person';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import "../assets/css/sidebar.css";
import namelogo from '../assets/img/namelogo.png';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const SidebarContext = React.createContext();

function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState({ type: "", value: "All" });

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, filter, setFilter }}>
      {children}
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { expanded } = useContext(SidebarContext);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false); // State to control dialog visibility
  const navigate = useNavigate();

  const toggleProfileExpand = () => {
    setProfileExpanded(!profileExpanded);
  };

  const handleLogout = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    console.log("Logout confirmed");
    localStorage.setItem("authenticated",false)
    localStorage.setItem("userRole","")

    setLogoutDialogOpen(false);
    navigate("/")
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  return (
    <nav className={`sidebar ${expanded ? '' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image" style={{ marginTop: '0.7rem' }}>
            <img src={namelogo} alt="logo" />
          </span>
          <div className="text logo-text">
            <span className="name">SKI-STINT</span>
            <span className="profession">Task Management</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link" onClick={() => navigate('principal/')}>
              <HomeIcon className="icon" />
              <span className="text nav-text">Home</span>
            </li>
            <li className="nav-link" onClick={toggleProfileExpand}>
              <PersonIcon className="icon" />
              <span className="text nav-text">My Profile</span>
              <KeyboardArrowDownIcon style={{ marginTop: ".5rem", marginLeft: "1.6rem", color: "var(--text-color)", cursor: "pointer" }} className={`dropdown-icon ${profileExpanded ? 'expanded' : ''}`} />
            </li>
            {profileExpanded && (
              <ul className="menu-links">
                <li className="nav-link" onClick={() => navigate("principal/alltasks")}>
                  <AssignmentIcon className="icon"/>
                  <span className="text nav-text">Assigned Tasks</span>
                </li>
                <li className="nav-link" onClick={() => navigate("principal/completedtasks")}>
                  <AssignmentTurnedInIcon className="icon" />
                  <span className="text nav-text">Tasks Completed</span>
                </li>
                <li className="nav-link" onClick={() => navigate("principal/pendingtasks")}>
                  <AssignmentLateIcon className="icon" />
                  <span className="text nav-text">Tasks Pending</span>
                </li>
                <li className="nav-link" onClick={() => navigate("principal/yettasks")}>
                  <NotStartedIcon className="icon" />
                  <span className="text nav-text">Tasks Yet to Start</span>
                </li>
              </ul>
            )}
            <li className="nav-link" onClick={() => navigate('principal/users')}>
              <AssignmentIndIcon className="icon" />
              <span className="text nav-text">View Users</span>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="nav-link" onClick={handleLogout}>
            <LogoutIcon className="icon" />
            <span className="text nav-text">Logout</span>
          </li>
        </div>
      </div>

     
      <Dialog
  open={logoutDialogOpen}
  onClose={handleLogoutCancel}
  PaperProps={{
    style: {
      borderRadius: '1%',
      padding: '0.1cm',
      backgroundColor: '#cdd2ff',
      maxWidth: '300px',
      width: '90%',
      margin: 'auto',
    },
  }}
>
  <DialogTitle id="alert-dialog-title">{"Logout Confirmation"}</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Are you sure you want to logout?
    </DialogContentText>
  </DialogContent>
  <DialogActions style={{ justifyContent: 'space-between' }}>
    <Button onClick={handleLogoutCancel} className='piththaan' style={{ width: '45%' ,color:"black"}}>
      No
    </Button>
    <Button onClick={handleLogoutConfirm} className='piththaan1' style={{ width: '45%' ,color:"black"}}>
      Yes
    </Button>
  </DialogActions>
</Dialog>

    </nav>
  );
}

export { Sidebar, SidebarContext, SidebarProvider };

