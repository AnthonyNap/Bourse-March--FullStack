// /src/components/Navbar.jsx
import React from 'react';
import './StyleCss/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Bourse & Marché</div>
        <div className="navbar-search">
          <input type="text" placeholder="Rechercher..." />
        </div>
        <div className="navbar-items">
          <div className="navbar-item">Notifications</div>
          <div className="navbar-item">Profil</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

