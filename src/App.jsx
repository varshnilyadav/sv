import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Quality from './components/Quality';
import Booking from './components/Booking';
import LocationFAQ from './components/LocationFAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Quality />
      <Booking />
      <LocationFAQ />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
