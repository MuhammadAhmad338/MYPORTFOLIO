import './About.css'
import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'

const About = () => {
  return (
    <LayOut>
      <div className="about-container">
        <section className="about-section">
          <h1>About Me</h1>
          <p className="intro">
            I am a passionate Full Stack Developer specializing in Flutter and React development. 
            With a strong foundation in both web and mobile development, I create responsive and 
            user-friendly applications that deliver exceptional user experiences.
          </p>
        </section>

        <section className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>Flutter</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js</li>
                <li>Firebase</li>
                <li>RESTful APIs</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Android Studio</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience-card">
            <h3>Full Stack Developer</h3>
            <p className="experience-duration">2021 - Present</p>
            <ul>
              <li>Developed responsive web applications using React.js</li>
              <li>Created cross-platform mobile applications using Flutter</li>
              <li>Implemented RESTful APIs and backend services</li>
              <li>Collaborated with teams using Agile methodologies</li>
            </ul>
          </div>
        </section>
      </div>
    </LayOut>
  );
}

export default About