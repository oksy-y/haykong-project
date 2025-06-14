import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';


const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <header className="navbarContainer">
        <div className="top-row">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <h1 className="headingTitle">IT Courses</h1>
          <div className="signup">
            <Link to="/">Sign Up</Link>
          </div>
        </div>
        <nav className="navLinks">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>General</NavLink>
          <NavLink to="/our-products" className={({ isActive }) => isActive ? "active" : ""}>Our Products</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>Team</NavLink>
          <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
