import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>ABOUT ME</h3>
                    <p>Your trusted partner in application development solutions.</p>
                </div>

                <div className="footer-section">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/skills">Skills </Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>CONTACT INFO</h3>
                    <p>Email: ahmadmuhammad.7700@gmail.com</p>
                    <p>Phone: +92 333 652 3303</p>
                    <p>Address: Yasreb Colony House no P 72 Street no 3, 4</p>
                </div>

                <div className="footer-section">
                    <h3>FOLLOW ME</h3>
                    <div className="social-links">
                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                        <FontAwesomeIcon icon={faTwitter} size='2x' />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;