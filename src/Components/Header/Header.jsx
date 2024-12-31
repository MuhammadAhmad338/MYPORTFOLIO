import './Header.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import user from '../../assets/user.png';

const Header = () => {
     const [isDownloading, setIsDownloading] = useState(false);
    
        const handleDownloadCV = () => {
            setIsDownloading(true);
            // Create a link element
            const link = document.createElement('a');
            link.href = '/ahmad_resume.pdf'; // Place your CV in public folder with this name
            link.download = 'ahmad_resume.pdf';
            // Append to body, click and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setIsDownloading(false);
        };


    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <img src={user} alt="Profile Avatar" className="avatar" />
                    <h1>AHMAD</h1>
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/">HOME</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/services">SERVICES</Link>
            </nav>
            <button className='cv-button' onClick={handleDownloadCV} disabled={isDownloading}>
            {isDownloading ? 'Downloading...' : 'DOWNLOAD CV'}
            </button>
        </header>
    );
}

export default Header;