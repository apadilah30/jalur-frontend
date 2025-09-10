import React from "react";
// Tailwind migration: import CSS dihapus
import heroImage from '../assets/images/hero-background.jpg';


const Hero = () => (
  <section className="flex items-center justify-between h-[90vh] md:h-[80vh] px-12 py-16 bg-gradient-to-r from-[#1a2536] via-[#1a2536] to-white bg-cover md:bg-contain bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="max-w-xl text-white">
      <h1 className="text-4xl font-bold mb-4">Strategic Partner in<br />AI & ICT Solutions</h1>
      <p className="text-lg text-blue-100">In collaboration with Sentienta, JALUR leveraging AI to create positive impact on technology, industries and society across the world.</p>
    </div>
  </section>
);

export default Hero;
