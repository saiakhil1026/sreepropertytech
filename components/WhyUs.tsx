
import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-yellow-500/10 -z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Meeting"
              className="relative z-10 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 p-8 bg-black text-white max-w-[200px] z-20">
              <span className="text-5xl font-serif text-yellow-500 block mb-2">15+</span>
              <p className="text-xs uppercase tracking-widest leading-relaxed">Years of NRI Trust Excellence</p>
            </div>
          </div>

          <div>
            <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Dedicated to NRIs</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-10 leading-tight">Your Home, Our Soul. Bridge the Miles.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center font-serif text-xl">01</div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Zero Distance Friction</h4>
                  <p className="text-gray-600 font-light leading-relaxed">We handle all on-ground activities—from society meetings to maintenance—leaving you with only the joy of ownership.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center font-serif text-xl">02</div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Complete Transparency</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Audit-ready accounting and legally sound documentation, accessible through your private investor dashboard 24/7.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
