import { Link } from 'react-router-dom';
import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><h1>PORTFOLIO</h1></Link>
            </div>
            <nav className="nav-links">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/services">SERVICES</Link>
                <Link to="/contact">CONTACT</Link>
            </nav>
            <button className='cv-btn'>
                DOWNLOAD CV
            </button>
        </header>
    );
}

export default Header;