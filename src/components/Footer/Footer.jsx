import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
          <p>&copy; <span id="current-year"></span> Cineflix. All rights reserved.</p>
          <nav>
              <ul>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-of-service">Terms of Service</a></li>
                  <li><a href="/contact">Contact Us</a></li>
              </ul>
          </nav>
          <address>
              <p>123 Your Street, Your City, Your State, 12345</p>
              <p>Email: <a style={{color:"red"}} href="mailto:info@cineflix.com">info@cineflix.com</a></p>
              <p>Phone: (+91) 9876543210</p>
          </address>
      </div>
    </footer>
  );
}

export default Footer