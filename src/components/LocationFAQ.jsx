import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MapPin, Clock, Phone } from 'lucide-react';
import './LocationFAQ.css';

const faqs = [
  {
    question: 'How long does a ceramic coating take?',
    answer: 'A professional ceramic coating typically takes 2-3 days. This includes a thorough wash, deep decontamination, multi-stage paint correction to ensure a flawless surface, and the final application and curing process.'
  },
  {
    question: 'What is the difference between PPF and Ceramic Coating?',
    answer: 'PPF (Paint Protection Film) is a physical, self-healing urethane layer that protects against rock chips, deep scratches, and physical damage. Ceramic Coating is a liquid polymer that chemically bonds with the paint, offering chemical resistance, extreme gloss, and hydrophobic properties, but does not protect against rock chips.'
  },
  {
    question: 'Do you offer a warranty on your services?',
    answer: 'Yes, all our PPF and Ceramic Coating services come with industry-leading warranties ranging from 3 to 10 years, depending on the specific package and products chosen.'
  },
  {
    question: 'How do I maintain my car after treatment?',
    answer: 'We recommend hand washing your vehicle using a pH-neutral shampoo and avoiding automatic car washes with abrasive brushes. We also offer maintenance wash packages for our clients to ensure the longevity of the coatings.'
  }
];

const LocationFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="location" className="section bg-black">
      <div className="container">
        
        <div className="location-faq-grid">
          
          <motion.div 
            className="faq-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Expert Knowledge</h2>
            <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Common questions about our premium services.</p>
            
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <div 
                    className="accordion-header" 
                    onClick={() => toggleFaq(index)}
                  >
                    <h3>{faq.question}</h3>
                    <div className="accordion-icon">
                      {activeIndex === index ? <Minus size={20} className="text-red" /> : <Plus size={20} />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="accordion-content"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="location-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="location-card">
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15232.062145322588!2d78.53664790000002!3d17.34005085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba26d2e6cb135%3A0xc3b40e53a3c94411!2sHastinapuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                ></iframe>
              </div>
              
              <div className="location-details">
                <div className="detail-item">
                  <MapPin className="text-red" size={24} />
                  <div>
                    <h4>Studio Location</h4>
                    <p>Padmavathi Nagar, Hastinapuram, Hyderabad.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <Clock className="text-red" size={24} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Open daily: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <Phone className="text-red" size={24} />
                  <div>
                    <h4>Contact</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <a href="https://maps.google.com/?q=SV+CARZ+SPA" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationFAQ;
