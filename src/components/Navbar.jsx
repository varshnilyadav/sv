import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Shield className="logo-icon text-red" size={32} />
          <div className="logo-text">
            <span className="logo-title">SV CARZ SPA</span>
            <span className="logo-subtitle">PREMIUM DETAILING</span>
          </div>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" onClick={() => setIsOpen(false)}>The Process</a>
          <a href="#quality" onClick={() => setIsOpen(false)}>Quality</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
          <a href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20slot%20for%20car%20detailing." target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
            Join Us
          </a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
