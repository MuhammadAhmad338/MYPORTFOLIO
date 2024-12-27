import React from 'react'
import LayOut from '../Components/LayOut/LayOut'
import './Contact.css'

const Contact = () => {
  return (
    <LayOut>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Business Street, NY 10001</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+1 234 567 8900</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>contact@example.com</p>
          </div>
        </div>
        
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </LayOut>
  )
}

export default Contact