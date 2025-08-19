import React from 'react';
import '../../css/Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="oreade-header">
      <nav className="oreade-nav container">
        <div className="logo">
          <img src="icon.png" alt="Logo" />
        </div>
        <ul className="menu-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/entreprise">L’entreprise</a></li>
          <li><a href="/prestations">Prestations</a></li>
          <li><a href="/actualites">Actualités</a></li>
          <li><a href="/contact">Contactez-nous</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
