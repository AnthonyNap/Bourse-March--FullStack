// /components/Header.jsx
import React from 'react';
import './StyleCss/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Statistique</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          {/* Autres éléments de navigation */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;