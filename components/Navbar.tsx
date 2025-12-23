import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand/Logo - Clickable on mobile to toggle menu */}
        <div
          className="flex items-center space-x-2 cursor-pointer md:cursor-default"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-yellow-600 to-yellow-200 rounded-lg flex items-center justify-center font-bold text-black text-lg md:text-xl">S</div>
          <span className="text-sm md:text-xl font-bold tracking-tighter text-white uppercase">Sree<span className="text-yellow-500">Property</span>Tech</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest text-gray-300 uppercase">
          <a href="#about" className="hover:text-yellow-500 transition-colors">Why NRIs</a>
          <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
          <a href="#assistance" className="hover:text-yellow-500 transition-colors">Assistance</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
        </div>

        {/* <button className="px-4 py-2 md:px-6 md:py-2.5 bg-yellow-600 hover:bg-yellow-500 text-black text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
          Login
        </button>*/}
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 animate-fade-in-down shadow-2xl">
          <div className="flex flex-col p-4 space-y-1">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-left text-sm font-medium tracking-widest text-gray-300 uppercase hover:bg-white/5 hover:text-yellow-500 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500"
            >
              Why NRIs
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-left text-sm font-medium tracking-widest text-gray-300 uppercase hover:bg-white/5 hover:text-yellow-500 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500"
            >
              Services
            </a>
            <a
              href="#assistance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-left text-sm font-medium tracking-widest text-gray-300 uppercase hover:bg-white/5 hover:text-yellow-500 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500"
            >
              Assistance
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-left text-sm font-medium tracking-widest text-gray-300 uppercase hover:bg-white/5 hover:text-yellow-500 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
