import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Redux', level: 80 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'REST API', level: 85 }
      ]
    },
    {
      category: 'Outils & Autres',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile', level: 80 }
      ]
    }
  ];

  const getStars = (level) => {
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const halfStar = level % 20 >= 10;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skills.map((skillCategory) => (
            <div className="skill-category" key={skillCategory.category}>
              <h3>{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-stars">
                      {getStars(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 