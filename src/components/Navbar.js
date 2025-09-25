import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Portfolio
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={toggleMenu}>
              Expérience
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>
              Projets
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={toggleMenu}>
              Compétences
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 