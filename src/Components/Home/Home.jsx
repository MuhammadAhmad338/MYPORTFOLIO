import './Home.css';
import LayOut from '../LayOut/LayOut';
import React, { useState } from 'react';

const Home = () => {

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
        <LayOut>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Hi, I'm <span className="highlight">MUHAMMAD AHMAD</span></h1>
                    <h2>APPLICATION DEVELOPER</h2>
                    <p>I am a passionate application developer with experience in creating modern and responsive web and mobile applications  using Flutter, React, JavaScript, and other cutting-edge technologies.</p>
                    <button 
                        className="cta-button"
                        onClick={handleDownloadCV}
                        disabled={isDownloading}
                    >
                        {isDownloading ? 'Downloading...' : 'Download CV'}
                    </button>
                </div>
            </section>
        </LayOut>
    );
}

export default Home;