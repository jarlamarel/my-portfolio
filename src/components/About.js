import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Je suis un développeur web passionné par la création d'applications web modernes et performantes.
              Mon parcours dans le développement web m'a permis d'acquérir une solide expertise dans les
              technologies front-end et back-end.
            </p>
            <p>
              Je m'efforce de créer des expériences utilisateur exceptionnelles tout en maintenant
              un code propre et maintenable. Mon approche combine créativité et rigueur technique
              pour livrer des solutions innovantes.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-graduation-cap"></i>
                <span>Formation en développement web</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-code"></i>
                <span>Expert en React.js</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-database"></i>
                <span>Maîtrise des bases de données</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src="/images/me.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 