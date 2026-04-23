import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplet, CarFront, Sparkles } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Paint Protection Film (PPF)',
    description: 'Self-healing, invisible shield protecting against rock chips, scratches, and UV damage.',
    icon: <Shield size={40} className="text-red" />,
    bgImage: '/images/ppf-application.png'
  },
  {
    id: 2,
    title: 'Ceramic & Graphene Coating',
    description: 'Ultra-hydrophobic coating for extreme gloss, depth, and years of chemical protection.',
    icon: <Droplet size={40} className="text-red" />,
    bgImage: '/images/water-beading.png'
  },
  {
    id: 3,
    title: 'Interior Detailing',
    description: 'Deep cleaning, leather conditioning, and fabric protection for a pristine cabin.',
    icon: <CarFront size={40} className="text-red" />,
    bgImage: '/images/hero-car.png'
  },
  {
    id: 4,
    title: 'Premium Car Decor',
    description: 'Custom ambient lighting, premium floor mats, and high-end aesthetic enhancements.',
    icon: <Sparkles size={40} className="text-red" />,
    bgImage: '/images/hex-lights.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-carbon">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">Precision detailing tailored for perfection. We use only industry-leading products and techniques.</p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-bg" style={{ backgroundImage: `url(${service.bgImage})` }}></div>
              <div className="service-overlay"></div>
              
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-desc-wrapper">
                  <p className="service-desc">{service.description}</p>
                  <a href="https://wa.me/918686974441?text=Hi%2C%20I%20would%20like%20to%20book%20a%20slot%20for%20car%20detailing." target="_blank" rel="noopener noreferrer" className="service-link">Learn More</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
