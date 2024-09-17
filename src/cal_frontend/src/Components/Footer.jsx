import React from 'react';
import './Footer.css'; // Importing the CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Sections */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>This is a project made by IronicRayquaza.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: satyam4698@gmail.com</li>
            <li>Phone: +91 76518 04405</li>
            <li>Powered By Coffee.</li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/satyam_4698?igsh=eXI2MDRpam1wNmM2" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i> Instagram
            </a>
            <a href="https://x.com/satyams60519097" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/in/satyam-singh4698/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 KALC | Satyam Singh</p>
      </div>
    </footer>
  );
};

export default Footer;

