import React from 'react';
import './style/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Tasty Pleasures</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="#" className="reservation-btn">Rezervari</a>
      </nav>
    </header>
  );
};

export default Navbar;
