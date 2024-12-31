import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "HTML5/CSS3", level: 85 },
      { name: "JavaScript", level: 85 }
    ],
    mobile: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
      { name: "React Native", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 80 }
    ]
  };

  return (
    <LayOut>
      <div className="skills-wrapper">
        <div className="skills-container">
          <h1>MY SKILLS</h1>
          
          <div className="skills-section">
            <h2>Frontend Development</h2>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2>Mobile Development</h2>
            <div className="skills-grid">
              {skills.mobile.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h2>Backend Development</h2>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Skills;