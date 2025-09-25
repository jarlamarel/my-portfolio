import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Bank App demo ',
      description: 'YnovBank est une plateforme bancaire web simple permettant aux utilisateurs de sinscrire, de se connecter, de consulter leur solde et effectuer des virements',
      image: '/images/projects/bankapp.png',
      technologies: ['React', 'Node.js', 'MongoDB Material-UI'],
      github: 'https://github.com/jarlamarel/ynovbank',
      demo: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Plateforme de cours en ligne',
      description: ' Notre projet consiste à développer une plateforme de formation en ligne permettant aux utilisateurs d’accéder à un large catalogue de cours dans différents domaines : technologies, marketing, design, photographie, communication, développement personnel.',
      image: '/images/projects/courseplateform.png',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/jarlamarel/plateform',
      demo: 'https://taskmanager-demo.com'
    },
    
    {
      id: 3,
      title: 'Rocket Launch',
      description: 'Une application web moderne développée avec Vue.js 3, TypeScript et Tailwind CSS qui affiche et permet d\'explorer les lancements de SpaceX. Cette application offre une interface utilisateur interactive et multilingue (français/anglais) pour consulter les données des missions spatiales.',
      image: '/images/projects/rocketlaunch.png',
      technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Axios API calls'],
      github: 'https://github.com/jarlamarel/spacex-launches-vue.git',
      demo: 'https://spacex-launches-vue.vercel.app/'
    },
    
  ];

  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 