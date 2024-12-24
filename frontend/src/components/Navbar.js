// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Logo</Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/study-room" className="navbar-item">Study Room</Link></li>
          <li><Link to="/mywork" className="navbar-item">MyWork</Link></li>
          <li><Link to="/daily-tasks" className="navbar-item">Daily Tasks</Link></li>
          <li><Link to="/profile" className="navbar-item">Your Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
