import React from "react";
// Tailwind migration: import CSS dihapus


const Contact = () => (
  <section className="bg-gradient-to-r from-orange-500 to-white py-16 text-center" id="contact">
    <h2 className="text-3xl font-bold text-[#1a2536] mb-2">Contact us</h2>
    <h3 className="text-xl text-white mb-8">Any question or remarks? Let’s discuss</h3>
    <div className="flex justify-center gap-8 mt-8">
      <a href="#" className="bg-white text-orange-500 font-bold px-8 py-4 rounded-full shadow hover:bg-orange-500 hover:text-white transition">Chat WhatsApp</a>
      <a href="#" className="bg-white text-orange-500 font-bold px-8 py-4 rounded-full shadow hover:bg-orange-500 hover:text-white transition">Call Contact Center</a>
      <a href="mailto:sales@jalur.com" className="bg-white text-orange-500 font-bold px-8 py-4 rounded-full shadow hover:bg-orange-500 hover:text-white transition">Email to sales@jalur.com</a>
    </div>
  </section>
);

export default Contact;
