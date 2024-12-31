import './Contact.css';
import React, { useState } from 'react';
import LayOut from '../Components/LayOut/LayOut';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:ahmadmuhammad.7700@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
    console.log(mailtoLink);
  };

  return (
    <LayOut>
      <div className="contact-container">
        <div className='contact-main-content'>
          <div className="contact-info">
            <h1>CONTACT ME</h1>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Yasrab Colony House no P 72 Street 3 , 4</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+92 333 652 3303</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>ahmadmuhammad.7700@gmail.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

            </div>

            <button type="submit" className="submit-btn">SEND MESSAGE</button> </form>
        </div>
      </div>

    </LayOut>
  );
};

export default Contact;