import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-container">
        <h1 className="hero-title">Bienvenue sur mon Portfolio</h1>
        <p className="hero-subtitle">Développeur Web Full Stack</p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 