import React, { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import IconButton from '@mui/material/IconButton';

const DarkMode = () => {
  const storedPreference = localStorage.getItem('darkModePreference');
  const [isDarkMode, setIsDarkMode] = useState(
    storedPreference === null ? false : JSON.parse(storedPreference)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkModePreference', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <IconButton onClick={handleToggle} aria-label="Dark mode toggle">
        {isDarkMode ? <DarkModeIcon fontSize = "large" style={{marginTop:"3px",color:"var(--logo)"}}/> : <LightModeIcon fontSize = "large" style={{marginTop:"3px",color:"var(--logo)"}}/> }
      </IconButton>
    </div>
  );
};

export default DarkMode;