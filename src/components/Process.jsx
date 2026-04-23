import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  return (
    <section id="process" className="section bg-black">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="process-header"
        >
          <h2 className="section-title">The Process</h2>
          <p className="section-subtitle">Our commitment to unmatched quality and precision.</p>
        </motion.div>

        <div className="process-timeline">
          
          <div className="process-step">
            <motion.div 
              className="process-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/hex-lights.png" alt="Studio Environment" />
            </motion.div>
            <motion.div 
              className="process-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="step-number">01</span>
              <h3>Specialized Environment</h3>
              <p>Our studio features advanced hexagonal lighting and strict climate control to ensure flawless application of PPF and ceramic coatings.</p>
            </motion.div>
          </div>

          <div className="process-step reverse">
            <motion.div 
              className="process-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/ppf-application.png" alt="Detailing Team in Action" />
            </motion.div>
            <motion.div 
              className="process-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="step-number">02</span>
              <h3>Master Craftsmanship</h3>
              <p>Our expert technicians bring years of experience to every vehicle, utilizing precision techniques for seamless film application and paint correction.</p>
            </motion.div>
          </div>

          <div className="process-step">
            <motion.div 
              className="process-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/water-beading.png" alt="Final Inspection" />
            </motion.div>
            <motion.div 
              className="process-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="step-number">03</span>
              <h3>Obsessive Inspection</h3>
              <p>Every project undergoes a rigorous multi-point inspection before delivery, ensuring an ultimate shine and unmatched protection.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
