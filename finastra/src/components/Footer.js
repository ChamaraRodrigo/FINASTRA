import React from "react";
import "./css/Footer.css";
// Make sure to import bootstrap CSS if not already imported at app level
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap icons if needed
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="footer-title">Cogent Solutions™</h3>
            <p className="footer-text">
              Through our conferences we transform your business challenges into
              opportunities. Our clients and customers are leading government
              entities and the Fortune 500 companies.
            </p>
            <h4 className="footer-subtitle">Awards</h4>
            <div className="awards">
              <img
                src="https://cogentsolutions.ae/views/img/logos/BPW-2024_2.png"
                alt="Award 1"
              />
              <img
                src="https://cogentsolutions.ae/views/img/logos/bestwork-04.png"
                alt="Award 2"
              />
              <img
                src="https://cogentsolutions.ae/views/img/logos/bestwork-03.png"
                alt="Award 3"
              />
              <img
                src="https://cogentsolutions.ae/views/img/logos/bestwork-01.png"
                alt="Award 4"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="footer-title">Our office</h3>
            <ul className="footer-list list-unstyled">
              <li className="mb-3">
                📍 Middle East & Africa HQ
                <br />
                Office No: 209, The Metropolis Tower, Business Bay, Dubai, UAE
              </li>
              <li className="mb-3">
                📍 Asia Pacific HQ
                <br />
                7th Floor Green Lanka Tower, Colombo, Sri Lanka
              </li>
              <li className="mb-3">
                📍 Saudi Arabia HQ
                <br />
                Riyadh, Saudi Arabia
              </li>
              <li className="mb-3">📞 +971 50 5718867</li>
              <li className="mb-3">📧 partnerships@cogentsolutions.ae</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap mt-4 pt-4 border-top">
          <p className="mb-0 me-4">
            © 2025 Cogent Solutions Event Management LLC. All Right Reserved
          </p>
          <div className="footer-socials">
            <i className="bi bi-linkedin mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-instagram mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
