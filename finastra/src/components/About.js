import React from 'react'
import './css/About.css';

function About() {
    return (
        <div className="about-finastra-container text-center">
            <h1 className="about-title">About Finastra</h1>
            <p className="about-text">
                Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
            </p>
            <p className="about-link">
                For more information, visit <a href="https://www.finastra.com" target="_blank" rel="noopener noreferrer">www.finastra.com</a>.
            </p>
        </div>)
}

export default About