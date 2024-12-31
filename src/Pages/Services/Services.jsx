import './Services.css';
import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';

const Services = () => {
  return (
    <LayOut>
      <div className="services-wrapper">
        <div className="services-container">
          <h1>MY SERVICES</h1>
          <div className="services-grid">
            <div className="service-card">
              <i className="fab fa-react"></i>
              <h3>React Development</h3>
              <p>Modern web applications with React.js</p>
              <ul>
                <li>Single Page Applications</li>
                <li>React Hooks and Context API</li>
                <li>Redux State Management</li>
                <li>REST API Integration</li>
              </ul>
            </div>

            <div className="service-card">
              <i className="fab fa-flutter"></i>
              <h3>Flutter Development</h3>
              <p>Cross-platform mobile applications</p>
              <ul>
                <li>iOS and Android Apps</li>
                <li>Custom Widgets</li>
                <li>State Management</li>
                <li>API Integration</li>
              </ul>
            </div>

            <div className="service-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach for all devices</p>
              <ul>
                <li>Mobile-First Design</li>
                <li>Cross-Browser Compatibility</li>
                <li>Performance Optimization</li>
                <li>UI/UX Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Services;