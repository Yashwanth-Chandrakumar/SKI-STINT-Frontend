import React from 'react'
import "./css/Navbar.css"
import DarkMode from './DarkMode'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Navbar() {
  return (
    <div className='nav-container'>
    <h2>SKI-STINT</h2>
    <div className='nav-icon-container' >
    <DarkMode/>
    <AccountCircleIcon fontSize='large'  style={{marginTop:"2px",color:"var(--nav-hover)"}}/>
    </div>
    </div>
  )
}
