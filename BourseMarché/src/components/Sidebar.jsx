import React from 'react';
import './StyleCss/Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Bourse Marché</h1>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item">Tableau de bord</li>
          <li className="nav-item">Actions</li>
          <li className="nav-item">Portefeuille</li>
          <li className="nav-item">Marchés</li>
          <li className="nav-item">Analyse</li>
          <li className="nav-item">Actualités</li>
          <li className="nav-item">Historique</li>
          <li className="nav-item">Réglages</li>
          <li className="nav-item">Support</li>
          {/* Vous pouvez ajouter d'autres éléments ici si nécessaire */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

