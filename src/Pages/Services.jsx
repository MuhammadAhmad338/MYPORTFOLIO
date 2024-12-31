import React from 'react';
import LayOut from '../Components/LayOut/LayOut';
import './Services.css';

const Services = () => {
  return (
    <LayOut>
      
      <div className="services-container">
        <h1>My Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <i className="fab fa-react"></i>
            <h3>React Development</h3>
            <p>Custom web applications using React.js with modern practices and responsive design.</p>
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
            <p>Cross-platform mobile applications with beautiful UI and smooth performance.</p>
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
            <p>Mobile-first approach ensuring your application works on all devices.</p>
            <ul>
              <li>Mobile-First Design</li>
              <li>Cross-Browser Compatibility</li>
              <li>Performance Optimization</li>
              <li>UI/UX Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Services;