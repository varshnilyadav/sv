import React from 'react';
import { Camera, Globe, MessageCircle, Video, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <Shield className="logo-icon text-red" size={32} />
              <div className="logo-text">
                <span className="logo-title" style={{ fontSize: '1.5rem' }}>SV CARZ SPA</span>
                <span className="logo-subtitle">PREMIUM DETAILING</span>
              </div>
            </div>
            <p className="footer-desc">
              Hyderabad's premier destination for high-end automotive protection and aesthetic enhancement.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Video size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><a href="#services">Paint Protection Film</a></li>
              <li><a href="#services">Ceramic Coating</a></li>
              <li><a href="#services">Graphene Coating</a></li>
              <li><a href="#services">Interior Detailing</a></li>
              <li><a href="#services">Premium Car Decor</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><a href="#process">The Process</a></li>
              <li><a href="#quality">Our Work</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#location">FAQ</a></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SV CARZ SPA. All rights reserved.</p>
          <p className="credit">Designed by varshnil</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
