import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function MainHeader() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="main-header">

        <div className="container flex-2">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
            <span className="logo-text">MEDINOVA</span>
          </div>

          {/* Mobile Button */}
          <div
            className="menu-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </div>

          {/* Menu */}
          <nav className={showMenu ? "menu active" : "menu"}>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/pricing">Pricing</Link>

            <div className="dropdown">
              <Link to="/">Pages ▾</Link>

              <div className="dropdown-menu">
                <Link to="/bloggrid">BlogGrid</Link>
                <Link to="/blogdatail">Blog Details</Link>
              </div>
            </div>

            <Link to="/contact">Contact</Link>

          </nav>

        </div>

      </header>
    </>
  );
}

export default MainHeader;