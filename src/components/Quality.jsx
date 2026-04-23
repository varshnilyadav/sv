import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Quality.css';

const testimonials = [
  {
    id: 1,
    name: 'Rahul V.',
    vehicle: 'Porsche 911 GT3',
    text: 'The attention to detail at SV CARZ SPA is unbelievable. They applied PPF to my Porsche, and it looks better than when it left the showroom. True professionals.',
    rating: 5
  },
  {
    id: 2,
    name: 'Vikram S.',
    vehicle: 'BMW M340i',
    text: 'Got the ceramic coating done. The gloss is insane, and washing the car is a breeze now. The stealth aesthetic of their studio reflects in their precision work.',
    rating: 5
  },
  {
    id: 3,
    name: 'Anjali M.',
    vehicle: 'Audi Q8',
    text: 'Premium service from start to finish. The team explained the entire process and the results are stunning. Highly recommended for any luxury car owner.',
    rating: 5
  }
];

const Quality = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="quality" className="section bg-carbon">
      <div className="container">
        
        <div className="quality-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Proof of Quality</h2>
            <p className="section-subtitle">Don't just take our word for it. See the results.</p>
          </motion.div>
        </div>

        <div className="quality-content">
          
          <motion.div 
            className="testimonials-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="subsection-title">Client Reviews</h3>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--color-red)" color="var(--color-red)" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <span>{testimonials[currentTestimonial].vehicle}</span>
              </div>
              
              <div className="testimonial-controls">
                <button onClick={prevTestimonial} className="control-btn"><ChevronLeft /></button>
                <button onClick={nextTestimonial} className="control-btn"><ChevronRight /></button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="gallery-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="subsection-title">Project Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/hero-car.png" alt="Gloss Finish" />
                <div className="gallery-overlay"><span>Ultimate Gloss</span></div>
              </div>
              <div className="gallery-item">
                <img src="/images/water-beading.png" alt="Water Beading" />
                <div className="gallery-overlay"><span>Hydrophobic</span></div>
              </div>
              <div className="gallery-item span-col-2">
                <img src="/images/hex-lights.png" alt="Hex Lights Reflection" />
                <div className="gallery-overlay"><span>Flawless Reflection</span></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Quality;
