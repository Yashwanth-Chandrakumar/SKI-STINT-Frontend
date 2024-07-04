import React, { useContext, useState } from 'react';
import "../App.css";
import "../assets/css/navbar.css";
import Darkmode from './Darkmode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import { useNavigate } from 'react-router-dom';
import accountData from './Account.json';
import { SidebarContext } from './Sidebar'; 

export default function Navbar() {
  const navigate = useNavigate();
  const user = accountData[0]; 
  const [isHovered, setIsHovered] = useState(false);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const { expanded, setExpanded } = useContext(SidebarContext);

  const handleLogo = () => {
    navigate('/');
  };

  const handleAccountOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  const openAccount = Boolean(accountAnchorEl);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='nav-container'>
      <h2 onClick={handleLogo}>SKI-STINT</h2>
      <div className='nav-icon-container'>
        <div>
          <Darkmode />
        </div>
        <div>
          <IconButton onClick={toggleSidebar}>
            <MenuIcon className='MenuIcon' fontSize='large' style={{ marginTop: "2px", color: "var(--logo)" }} />
          </IconButton>
        </div>
        <div
          className='icon-hover-container'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleAccountOpen}
        >
          <IconButton>
            <AccountCircleIcon fontSize='large' style={{ marginTop: "2px", color: "var(--logo)" }} />
          </IconButton>
          {isHovered && <div className='hover-content'>{user.email}</div>}
        </div>
        <Popover
          open={openAccount}
          anchorEl={accountAnchorEl}
          onClose={handleAccountClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className='popover-content'>
            <div className='username'>
              <div id='un'>{user.username}</div>
            </div>
            <div className='circle-container'>
              <AccountCircleIcon fontSize='large' />
            </div>
            <div className='email'>
              <div id='mail'>{user.email}</div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}
