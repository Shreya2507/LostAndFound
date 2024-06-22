import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ncu from '../Assets/ncu.png';
import ncuDark from '../Assets/ncuDark.png'; // Import the dark mode logo
import '../App.css';
import './header.css';
import ToggleSwitch from './ToggleSwitch';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isDarkMode) {
      bodyClass.add('dark');
    } else {
      bodyClass.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <header className="page-header">
        <div className="logo">
          <Link to="/Home">
            <img alt="logo" src={isDarkMode ? ncuDark : ncu} className="logo-img" />
          </Link>
        </div>
        <div className="head">
          <nav className="navbar">
            <Link to="/Home">HOME</Link>
            <Link to="/Lostitm">LOST ITEMS</Link>
            <Link to="/Founditm">FOUND ITEMS</Link>
            <Link to="/Report">REPORT</Link>
          </nav>
        </div>
        <ToggleSwitch onToggle={handleToggle} />
        <div className="btns">
          <Link className="blue-btn" to="/Profile">
            <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png" alt="Profile" />
            Profile
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
