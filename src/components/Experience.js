import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Expérience Professionnelle</h2>
      <div className="experience-container">
        {/* Vous pourrez ajouter vos expériences ici */}
        
      
        <div className="experience-item">
          <h3>consultant developpeur</h3>
          <h4>Talan SAS Groupe</h4>
          <p className="date"> janvier2023 - Septembre 2025</p>
          <ul>
            <li>Implémentation de nouveaux TNR sur la micro App</li>
            <li>Modification de la dateLine sur le front</li>
            <li> Mapping des nouvelles données provenant de divers flux</li>
            <li>Présentation et préparation des revues de sprint</li>
            <li>Ajouter de nouveaux composants sur la micro-App</li>
            <li> rédiger la documentation technique associée</li>
          </ul>
          <h4>Stack technique : Angular/Spring Boot/Selenium/Postman/Docker/Git/Jenkins</h4>
        </div>
        <div className="experience-item">
          <h3>Junior Web Developer</h3>
          <h4> Eolyis sarl</h4>
          <p className="date"> juin2022 - Septembre 2022</p>
          <ul>
            <li>Concevoir et développer les pages frontend pour le site E-commerce.</li>
            <li>Mise en place des fonctionnalités de recherche, de filtrage et de tri.</li>
            <li>Gérer les opérations CRUD à l'aide de I'API Next JS.</li>
            <li>Implémentation de nouvelles fonctionnalités sur le site.</li>
            <li>Mettre en place des modèles de données.</li>
            <li> rédiger la documentation technique associée</li>
          </ul>
          <h4>Stack technique :Stack technique : ReactJS / Express(NodeJS) /MongoDB </h4>
        </div>
       
        
        
        
        
        
      </div>
    </section>
  );
};

export default Experience; 