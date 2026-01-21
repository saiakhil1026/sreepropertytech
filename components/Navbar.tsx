import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState<'white' | 'black'>('white');
  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);

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

  // Handle click outside and scroll to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScrollClose);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isMobileMenuOpen]);

  const textClass = textColor === 'white' ? 'text-white' : 'text-black';
  const logoBgClass = textColor === 'white'
    ? 'bg-gradient-to-tr from-yellow-600 to-yellow-200 text-black'
    : 'bg-black text-white';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand/Logo - Clickable on mobile to toggle menu */}
        <div
          ref={buttonRef}
          className="flex items-center space-x-2 cursor-pointer lg:cursor-default"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-lg md:text-xl transition-colors duration-300 ${logoBgClass}`}>S</div>
          <span className={`text-sm md:text-xl font-bold tracking-tighter uppercase transition-colors duration-300 ${textClass}`}>Sree<span className="text-yellow-500">Property</span>Tech</span>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${textColor === 'white' ? 'text-gray-300' : 'text-gray-800'}`}>
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
      {/* Mobile Navigation Dropdown */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute top-full left-6 mt-2 w-64 bg-gradient-to-b from-neutral-900/95 to-black/95 backdrop-blur-2xl z-40 rounded-xl border border-[#d4af37]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 origin-top-left ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="flex flex-col p-4 space-y-1">
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-left text-lg font-bold tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-[#d4af37] text-gray-300 hover:bg-white/5 hover:text-[#d4af37]"
          >
            Why NRIs
          </a>
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-left text-lg font-bold tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-[#d4af37] text-gray-300 hover:bg-white/5 hover:text-[#d4af37]"
          >
            Services
          </a>
          <a
            href="#assistance"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-left text-lg font-bold tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-[#d4af37] text-gray-300 hover:bg-white/5 hover:text-[#d4af37]"
          >
            Assistance
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-left text-lg font-bold tracking-widest uppercase rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-[#d4af37] text-gray-300 hover:bg-white/5 hover:text-[#d4af37]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
