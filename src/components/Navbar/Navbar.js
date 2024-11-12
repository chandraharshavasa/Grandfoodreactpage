import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Correctly reference the Navbar CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Grandfood.</div>
      
      {/* Menu Icon for smaller screens */}
      <div className="menu-icon" onClick={handleMenuClick}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>Home</li>
        <li>Explore</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Careers</li>
        <button className="sign-up">Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
