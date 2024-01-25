// /components/Footer.jsx
import React from 'react';
import './StyleCss/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Bourse Marché. Par Nap.</p>
      <p>Suivez-nous sur les réseaux sociaux</p>
      {/* Liens vers les réseaux sociaux ici */}
    </footer>
  );
};

export default Footer;
