
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-yellow-600 to-yellow-200 rounded-lg flex items-center justify-center font-bold text-black text-xl">S</div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Sree<span className="text-yellow-500">Property</span>Tech</span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest text-gray-300 uppercase">
          <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>

          <a href="#about" className="hover:text-yellow-500 transition-colors">Why NRIs</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
        </div>

        <button className="px-6 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
          Investor Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
