
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax-like feel */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight animate-fade-in-up">
          Property Management <br />
          <span className="gradient-gold">Exclusively for NRIs</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
          Your Indian assets managed with global standards. We bridge the distance between your home and your heart, ensuring total peace of mind and maximum yield.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-yellow-500 transition-all"
          >
            Inquire Now
          </button>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-yellow-500 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
