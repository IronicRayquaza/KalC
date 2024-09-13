import React from 'react';
import './Footer.css'; // Importing the CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Sections */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing the best services in our industry. Learn more about our mission, vision, and the services we offer.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@company.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 1234, Main Street, Anytown, USA</li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 My Company | Designed by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;

