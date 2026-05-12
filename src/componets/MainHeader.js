import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";


function MainHeader() {
  return (
    <>
      {/* ===== Main Header ===== */}
      <header className="main-header">
        <div className="container flex-2">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />

            <span className="logo-text">MEDINOVA</span>
          </div>

          {/* Menu */}
          <nav className="menu">
           
            <Link to="Home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Service">Service</Link>
            <Link to="/pricing">Pricing</Link>


            <div className="dropdown">
              <Link to="/">Pages ▾</Link>
              <div className="dropdown-menu">
                <Link to="/bloggrid">BlogGrid</Link>
                <Link to="/blogdatail">Blog Datails</Link>
               
              </div>
            </div>

            <Link to="contact">Contact</Link>
          </nav>

        </div>
      </header>
    </>
  );
}

export default MainHeader;
