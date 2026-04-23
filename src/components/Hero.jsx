import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <img src="/images/hero-car.png" alt="Luxury Car Detailing" className="hero-img" />
      </div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            Unmatched Protection.<br />
            <span className="text-red">Ultimate Shine.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            Premium PPF, Ceramic & Graphene Coating in Hyderabad.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <a href="#services" className="btn btn-primary">
              View Services <ChevronRight size={18} />
            </a>
            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20slot%20for%20car%20detailing." target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Book Appointment
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
