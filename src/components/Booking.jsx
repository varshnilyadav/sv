import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    date: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, vehicle, date, service } = formData;
    const text = `Hi, I would like to book a slot.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Vehicle:* ${vehicle}\n*Date:* ${date}\n*Service:* ${service}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918686974441?text=${encodedText}`, '_blank');
  };

  return (
    <section id="book" className="booking-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Slot <span className="text-red">Booking</span>
          </motion.h2>
        </div>

        <motion.div 
          className="booking-form-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-red-line"></div>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">FULL NAME</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicle">VEHICLE BRAND & MODEL</label>
                <input type="text" id="vehicle" name="vehicle" placeholder="e.g. BMW 5 Series" value={formData.vehicle} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="date">PREFERRED DATE</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="service">PRIMARY SERVICE REQUIRED</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} required className={formData.service === "" ? "empty-select" : ""}>
                <option value="" disabled>Select a service...</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                <option value="Graphene Coating">Graphene Coating</option>
                <option value="Interior Detailing">Interior Detailing</option>
                <option value="Exterior Detailing">Exterior Detailing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn-whatsapp-submit">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Confirm via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
