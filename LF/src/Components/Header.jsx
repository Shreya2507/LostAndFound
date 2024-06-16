import React from 'react';
import { Link } from 'react-router-dom';
import ncu from '../Assets/ncu.png';
import '../App.css';
import './header.css';


function Header() {
  return (
    <div>
      <header className="page-header">
        <Link to="/">
          <div className="logo">
          <Link to="/App"><img alt="logo" src={ncu} className="logo-img" /></Link>
          </div>
        </Link>
        <div className="head">
          <nav className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/">LOST ITEMS</Link>
            <Link to="/">FOUND ITEMS</Link>
            <Link to="/">REPORT</Link>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Header
