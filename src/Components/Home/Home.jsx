import React from 'react'
import LayOut from '../LayOut/LayOut'
import './Home.css'

const Home = () => {
    return (
        <LayOut>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Hi, I'm <span className="highlight">MUHAMMAD AHMAD</span></h1>
                    <h2>Frontend Developer</h2>
                    <p>I am a passionate web developer with experience in creating modern and responsive web applications using React, JavaScript, and other cutting-edge technologies.</p>
                    <button className="cta-button">Download CV</button>
                </div>
                <div className="avatar-section">
                    <img src="/your-photo.jpg" alt="Profile" className="avatar-circle" />
                </div>
            </section>

        </LayOut>
    );
}

export default Home;