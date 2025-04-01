import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Blockchain Platform</h2>
          <p>Your gateway to the decentralized world.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h3>Resources</h3>
            <a href="/terms" className="footer-link">Terms of Service</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/faq" className="footer-link">FAQ</a>
            <a href="/support" className="footer-link">Support</a>
          </div>
          <div className="footer-socials">
            <h3>Follow Us</h3>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon">Discord</a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="social-icon">Medium</a>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:support@blockchain.com">support@blockchain.com</a></p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Crypto Street, Web3 City</p>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Blockchain Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
