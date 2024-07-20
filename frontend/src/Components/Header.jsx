import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ncu from "../Assets/ncu.png";
import ncuDark from "../Assets/ncuDark.png"; // Import the dark mode logo
import "../App.css";
import "./header.css";
import ToggleSwitch from "./ToggleSwitch";

function Header() {
  const [user, setUser] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false); // Light mode by default
  const [imgUrl, setImgUrl] = useState(ncu);

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isDarkMode) {
      bodyClass.add("dark");
      setImgUrl(ncuDark);
    } else {
      bodyClass.remove("dark");
      setImgUrl(ncu);
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
            <img alt="logo" src={imgUrl} className="logo-img" />
          </Link>
        </div>
        <div className="head">
          <nav className="navbar">
            <Link to="/Home">HOME</Link>
            <Link to="/Lostitm">LOST ITEMS</Link>
            <Link to="/Founditm">FOUND ITEMS</Link>
            <Link to="/Report">REPORT</Link>
            <Link to="/Profile">PROFILE</Link>
          </nav>
        </div>
        <div className="Switch">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="balldark"></span>
          </label>
        </div>
        <div className="btns">
          <button id="signInDiv"></button>
          <Link className="blue-btn" id="profileBtn" hidden="true" to="/Profile">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png"
              alt="Profile"
            />
            {user.name}
          </Link>
          <Link to="/LoginForm">LOGIN</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
