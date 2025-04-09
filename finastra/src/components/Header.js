import React from 'react';
import './css/Header.css';
import header from './images/header.png'; 

const Header = () => {
    return (
        <header className="header-section">
            <div className="container-fluid d-flex justify-content-between align-items-center p-4 header-top">
                <div className="header">
                    <img src={header} alt="Event Header" className="logo" />
                </div>

                

                <div className="d-flex align-items-center gap-4">
                    <nav className="d-flex gap-4 align-items-center header-links">
                        <a href="#overview" className="text-light text-decoration-none">Event Overview</a>
                        <a href="#agenda" className="text-light text-decoration-none">Agenda</a>
                    </nav>
                    <a className="fancy fancy-white" href="#register">
                        <span className="top-key"></span>
                        <span className="text">Register Now</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                </div>
            </div>

            <div className="header-content text-center mt-5">
                <p className="text-muted fs-5 mb-1">Organized By</p>
                <h1 className="finastra-text fw-bold mb-3">FINASTRA</h1>
                <h2 className="display-4 fw-bold text-white mb-4">
                    Reimagine Banking:<br />
                    Adapt. Evolve. Thrive.
                </h2>
                <p className="text-light fs-5 mb-1">Date: 9th April 2025</p>
                <p className="text-light fs-5">Time: 9:30 AM - 2:00 PM GMT+2<br />The Nile Ritz-Carlton, Cairo, Egypt</p>
            </div>
        </header>
    );
};

export default Header;
