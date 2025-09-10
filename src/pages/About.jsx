import React from 'react';
import Hero from '../components/about/Hero';
import AboutSection from '../components/about/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
