import React from 'react';
import { Link } from 'react-router-dom';
import ncu from '../Assets/ncu.png';
import '../App.css';
import './header.css';

function Header() {
  return (
    <div>
      <header className="page-header">
        <div className="logo">
          <Link to="/Home">
            <img alt="logo" src={ncu} className="logo-img" />
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
