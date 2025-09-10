import logo from '../assets/images/logo/logo-main.png';
import iconEng from '../assets/images/logo/icon-eng.png';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between px-6 md:px-20 py-4 md:py-6 bg-white shadow-lg sticky top-0 z-50 md:max-h-[100px]">
      <div className={`flex ${open ? 'justify-end' : 'justify-between'} md:items-center gap-3 w-full md:w-auto`}>
        <a href="/" className={`transition-transform hover:scale-105 ${open ? 'hidden' : ''}`}>
          <img src={logo} alt="Jalur Logo" className="w-20 h-20" />
        </a>
        <button
          className="md:hidden p-2 rounded-md text-gray-800 transition-transform hover:scale-110 active:scale-95"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <Menu size={24} className="transition-transform duration-300" />
          )}
        </button>
      </div>

      <ul className={`md:flex flex-col md:flex-row space-y-4 md:space-y-0 gap-8 list-none m-0 p-0 transition-all duration-300 ease-in-out w-full md:w-auto ${open ? 'max-h-[100vh]' : 'max-h-0 md:max-h-none hidden md:block'
        }`}>
        <li>
          <a href="#" className="text-orange-500 bg-orange-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-orange-100 hover:scale-105 flex items-center gap-1">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:bg-orange-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-1">
            About
          </a>
        </li>
        <li className="relative">
          <button 
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="text-gray-800 hover:bg-orange-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-between gap-1 w-full md:w-auto"
          >
            Solutions
            <svg className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          <ul className={`md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:mt-10 md:w-64 md:bg-white md:shadow-xl md:rounded-xl md:border md:border-gray-100 md:z-50 md:p-2 static w-full bg-orange-50 mt-2 rounded-lg transition-all duration-300 ease-in-out transform ${
            solutionsOpen 
              ? 'opacity-100 translate-y-0 scale-100 max-h-96' 
              : 'opacity-0 -translate-y-2 scale-95 max-h-0 md:pointer-events-none overflow-hidden'
          }`}>
            <li className={`transition-all duration-200 delay-75 ${solutionsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-orange-100 md:hover:bg-gray-50 transition-colors duration-200 md:rounded-lg">
                Solution 1
              </a>
            </li>
            <li className={`transition-all duration-200 delay-100 ${solutionsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-orange-100 md:hover:bg-gray-50 transition-colors duration-200 md:rounded-lg">
                Solution 2
              </a>
            </li>
            <li className={`transition-all duration-200 delay-150 ${solutionsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-orange-100 md:hover:bg-gray-50 transition-colors duration-200 md:rounded-lg">
                Solution 3
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:bg-orange-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-1">
            Client
          </a>
        </li>
      </ul>

      <a
        href="#"
        className={`bg-gray-200 text-gray-800 px-6 py-2 rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 ease-in-out md:block transform ${open ? 'translate-y-0' : 'translate-y-2 md:translate-y-0 hidden'
          } hover:scale-105`}
      >
        <img src={iconEng} alt="English Icon" className="w-6 h-6 inline-block mr-2 transition-transform duration-200" />
        ENG
      </a>
    </nav>
  )
}

export default Navbar;
