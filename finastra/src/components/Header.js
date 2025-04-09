import React, { useState, useEffect } from "react";
import "./css/Header.css";
import header from "./images/header.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-section">
      <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center p-4">
          <div className="logo-container">
            <img src={header} alt="Finastra Event" className="logo" />
          </div>

          <div className="d-none d-md-flex align-items-center gap-5">
            <nav className="nav-links">
              <a href="#overview" className="nav-link">Event Overview</a>
              <a href="#agenda" className="nav-link">Agenda</a>
              <a href="#speakers" className="nav-link">Speakers</a>
            </nav>
            <a className="register-button" href="#register">
              <span className="register-text">Register Now</span>
            </a>
          </div>

          <button 
            className="mobile-menu-toggle d-md-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
        <nav className="mobile-nav">
          <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Event Overview</a>
          <a href="#agenda" onClick={() => setMobileMenuOpen(false)}>Agenda</a>
          <a href="#speakers" onClick={() => setMobileMenuOpen(false)}>Speakers</a>
          <a href="#register" className="mobile-register" onClick={() => setMobileMenuOpen(false)}>Register Now</a>
        </nav>
      </div>

      <div className="header-content">
        <div className="container text-center mx-auto px-4">
          <div className="blur-circle circle-1"></div>
          <div className="blur-circle circle-2"></div>
          
          <p className="organizer-text">Organized By</p>
          <h1 className="finastra-text">FINASTRA</h1>
          
          <div className="event-title-container">
            <h2 className="event-title">
              Reimagine Banking:
              <span className="event-subtitle">Adapt. Evolve. Thrive.</span>
            </h2>
          </div>
          
          <div className="event-details">
            <div className="event-detail-item">
              <span className="event-icon date-icon"></span>
              <span>9th April 2025</span>
            </div>
            <div className="event-detail-item">
              <span className="event-icon time-icon"></span>
              <span>9:30 AM - 2:00 PM GMT+2</span>
            </div>
            <div className="event-detail-item">
              <span className="event-icon location-icon"></span>
              <span>The Nile Ritz-Carlton, Cairo, Egypt</span>
            </div>
          </div>
          
          <a href="#register" className="cta-button">
            SECURE YOUR SPOT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;