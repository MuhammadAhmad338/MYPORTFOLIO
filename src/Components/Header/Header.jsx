import { Link } from 'react-router-dom';
import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><h1>Portfolio</h1></Link>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;