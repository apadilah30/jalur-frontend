import logo from '../assets/images/logo/logo-main.png';
import { MessageCircle, PhoneOutgoing, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0C0C0C] text-white pt-12">
    <div className="flex flex-wrap justify-between gap-2 px-12">
      <div className="flex items-start gap-6 text-white text-xl align-top">
        <img src={logo} alt="Jalur Logo" className="w-36 h-36" />
        <div className="max-w-xs mb-4">
          Leveraging AI to create positive impact on technology, industries and society across the world.
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-2">Links</h4>
        <ul className="list-none p-0 m-0x">
          <li className="mb-3"><a href="#" className="text-white">About</a></li>
          <li className="mb-3"><a href="#" className="text-white">Solutions</a></li>
          <li className="mb-3"><a href="#" className="text-white">Clients</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-2">Office hour</h4>
        <ul className="list-none p-0 m-0x">
          <li className="mb-3">Monday - Friday</li>
          <li className="mb-3">09.00 - 17.00</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-2">Get in touch</h4>
        <ul className="list-none p-0 m-0x">
          <li className="mb-3">
            <a href="#" target="_blank" className="flex gap-1 items-center">
             <MessageCircle size={28} className="bg-[#242424] rounded-lg p-1" /> Chat WhatsApp
             </a>
          </li>
          <li className="mb-3">
            <a href="#" target="_blank" className="flex gap-1 items-center">
             <PhoneOutgoing size={28} className="bg-[#242424] rounded-lg p-1" />  Call Contact Center
             </a>
          </li>
          <li className="mb-3">
            <a href="#" target="_blank" className="flex gap-1 items-center">
             <Mail size={28} className="bg-[#242424] rounded-lg p-1" />  sales@jalur.com
            </a>
          </li>
          <li className="mb-3 flex gap-1 items-center">
            <MapPin size={28} className="bg-[#242424] rounded-lg p-1" />  Plaza Central 18th Floor, Jl. Jendral Sudirman Kav 47-48, Jakarta Selatan
            </li>
          <li className="mb-3">
            <a href="#" className="text-white font-bold flex gap-1 items-center">
              View in Google Maps <ArrowRight size={28}/>  
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-[#111a2b] text-white gap-3 md:gap-2 py-4 px-12 md:px-12 w-full md:w-auto flex flex-col md:flex-row flex-wrap md:justify-between items-center text-sm mt-8">
      <span className="w-full md:w-1/3">© 2025 All Right Reserved - PT. JALIN USAHA BERSAMA (JALUR)</span>
      <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-2 justify-between align-center md:items-center w-full md:w-1/3">
        <li className="mb-3"><a href="#" className="text-white">Terms of Service</a></li>
        <li className="mb-3"><a href="#" className="text-white">Privacy Policy</a></li>
        <li className="mb-3"><a href="#" className="text-white">Sitemap</a></li>
        <li className="mb-3"><a href="#" className="text-white">Privacy Choices</a></li>
        <li className="mb-3"><a href="#" className="text-white">FAQs</a></li>
      </ul>
      <span className="w-full md:w-1/3 md:text-right">🌐 English</span>
    </div>
  </footer>
);

export default Footer;
