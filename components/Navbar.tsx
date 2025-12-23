import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState<'white' | 'black'>('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Offset to trigger change slightly before the section hits the very top, accounting for navbar height
      const offset = 80;

      const hero = document.getElementById('hero');
      const about = document.getElementById('about'); // Why Us
      const services = document.getElementById('services');
      const assistance = document.getElementById('assistance');
      const cta = document.getElementById('cta');
      const contact = document.getElementById('contact'); // Footer

      // Initial check - default to white (Hero)
      let newColor: 'white' | 'black' = 'white';

      // Logic: If the top of the section is at or above the scroll position (with offset), it's potentially the active one.
      // But we want the *current* background.
      // Easiest is to check bounds.

      // Check from bottom to top for simplicity
      if (contact && scrollY + offset >= contact.offsetTop) {
        newColor = 'white';
      } else if (cta && scrollY + offset >= cta.offsetTop) {
        newColor = 'black';
      } else if (assistance && scrollY + offset >= assistance.offsetTop) {
        newColor = 'black';
      } else if (services && scrollY + offset >= services.offsetTop) {
        newColor = 'white';
      } else if (about && scrollY + offset >= about.offsetTop) {
        newColor = 'black';
      } else {
        newColor = 'white';
      }

      setTextColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textClass = textColor === 'white' ? 'text-white' : 'text-black';
  const logoBgClass = textColor === 'white'
    ? 'bg-gradient-to-tr from-yellow-600 to-yellow-200 text-black'
    : 'bg-black text-white';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand/Logo - Clickable on mobile to toggle menu */}
        <div
          className="flex items-center space-x-2 cursor-pointer md:cursor-default"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-lg md:text-xl transition-colors duration-300 ${logoBgClass}`}>S</div>
          <span className={`text-sm md:text-xl font-bold tracking-tighter uppercase transition-colors duration-300 ${textClass}`}>Sree<span className="text-yellow-500">Property</span>Tech</span>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${textColor === 'white' ? 'text-gray-300' : 'text-gray-800'}`}>
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
              className={`px-4 py-3 text-left text-sm font-medium tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500 ${textColor === 'white' ? 'text-gray-300 hover:bg-white/5 hover:text-yellow-500' : 'text-gray-800 hover:bg-black/5 hover:text-black'}`}
            >
              Why NRIs
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-left text-sm font-medium tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500 ${textColor === 'white' ? 'text-gray-300 hover:bg-white/5 hover:text-yellow-500' : 'text-gray-800 hover:bg-black/5 hover:text-black'}`}
            >
              Services
            </a>
            <a
              href="#assistance"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-left text-sm font-medium tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500 ${textColor === 'white' ? 'text-gray-300 hover:bg-white/5 hover:text-yellow-500' : 'text-gray-800 hover:bg-black/5 hover:text-black'}`}
            >
              Assistance
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-left text-sm font-medium tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-yellow-500 ${textColor === 'white' ? 'text-gray-300 hover:bg-white/5 hover:text-yellow-500' : 'text-gray-800 hover:bg-black/5 hover:text-black'}`}
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
