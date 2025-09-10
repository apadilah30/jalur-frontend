import { MessageCircle } from "lucide-react";
import { Headset } from "lucide-react";
import { Mail } from "lucide-react";
import { PhoneOutgoing } from "lucide-react";
import { useState } from "react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`fixed bottom-6 right-6 z-1 flex flex-col items-end `}>
      {/* Drop-up Contact Options */}
      <div className={`flex flex-col gap-4 items-end transition-all duration-300 transform relative ${open
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}>
        {/* WhatsApp */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-xl shadow-lg px-4 py-2 w-72 justify-between transition">Chat WhatsApp</span>
          <span className="bg-orange-100 rounded-xl p-3 ml-2 shadow-lg">
            <MessageCircle className="text-orange-500" />
          </span>
        </a>
        {/* Call Center */}
        <a
          href="tel:0800123456"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-xl shadow-lg px-4 py-2 w-72 justify-between transition">Call Contact Center</span>
          <span className="bg-orange-100 rounded-xl p-3 ml-2 shadow-lg">
            <PhoneOutgoing className="text-orange-500" />
          </span>
        </a>
        {/* Email */}
        <a
          href="mailto:busdev@jalur.com"
          className="flex items-center"
          target="_blank"
        >
          <span className="font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-xl shadow-lg px-4 py-2 w-72 justify-between transition">Email to busdev@jalur.com</span>
          <span className="bg-orange-100 rounded-xl p-3 ml-2 shadow-lg">
            <Mail className="text-orange-500" />
          </span>
        </a>
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className={`bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 transform bottom-0 z-10 ${open ? '' : 'hidden'}`}
          aria-label="Close Contact"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className={`bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 transform ${open ? 'hidden' : 'block'
          }`}
        aria-label={open ? "Close Contact" : "Open Contact"}
      >
        <Headset className="h-6 w-6" />
      </button>
    </div >
  );
}
