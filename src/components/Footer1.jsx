// src/Footer.js
import React from 'react';
import './Footer1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXing, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>How to reach us</h4>
          <p>📞 +49-421-48907-766</p>
          <p>📧 <a href="mailto:shop@hansa-flex.com">shop@hansa-flex.com</a></p>
          <p>📍 <a href="#">Branch search</a></p>
          <p>🔗 <a href="#">X-CODE Manager</a></p>
        </div>
        <div className="service-help">
          <h4>Service and Help</h4>
          <p><a href="#">Company</a></p>
          <p><a href="#">Career</a></p>
          <p><a href="#">Shipping Costs</a></p>
          <p><a href="#">FAQs</a></p>
        </div>
        <div className="payment-methods">
          <h4>Payment Methods</h4>
          <p>Invoice</p>
        </div>
        <div className="shipping-methods">
          <h4>Shipping Methods</h4>
          <img src="/path/to/dhl.png" alt="DHL" />
          <img src="/path/to/gls.png" alt="GLS" />
          <img src="/path/to/nox.png" alt="NOX" />
          <img src="/path/to/db_schenker.png" alt="DB Schenker" />
        </div>
      </div>
      <div className="social-media">
        <h4>Follow us</h4>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faXing} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
      <div className="legal-info">
        <a href="#">Imprint</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Licence notice</a>
        <a href="#">Privacy</a>
        <a href="#">Disclaimer</a>
      </div>
    </footer>
  );
};

export default Footer1;
