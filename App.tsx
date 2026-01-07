
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Assistance from './components/Assistance';
import Reviews from './components/Reviews';

import WhyUs from './components/WhyUs';
import GeminiConcierge from './components/GeminiConcierge';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: any) {
        e.preventDefault();
        const targetAttr = this.getAttribute('href');
        if (targetAttr) {
          const target = document.querySelector(targetAttr);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Assistance />
        <Reviews />

        {/* Call to Action Section */}
        <section id="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-600"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Start Your Elite Journey</h2>
              <p className="text-black/80 font-medium tracking-wide">Join 500+ HNI NRIs who trust SreePropertyTech with their Indian assets.</p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/90 transition-all rounded-sm shadow-2xl"
            >
              Schedule Consultation
            </button>
          </div>
        </section>



        {/* The Contact/Enquiry logic is now integrated into the Footer for a split-screen premium layout */}
      </main>
      <Footer />
      {/* <GeminiConcierge /> */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
