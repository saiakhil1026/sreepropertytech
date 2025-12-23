
import React from 'react';

const WhyUs: React.FC = () => {
  const [isRevealed, setIsRevealed] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`relative reveal-item ${isRevealed ? 'revealed' : ''}`}>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-yellow-500/10 -z-0 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Meeting"
              className="relative z-10 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 p-8 md:p-10 bg-black text-white z-20 shadow-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center">
              <p className="text-xl md:text-3xl font-serif text-yellow-500 leading-tight tracking-wide">
                Trust <br /> Our <br /> <span className="text-white">Excellence</span>
              </p>
            </div>
          </div>

          <div className={`reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Dedicated to NRIs</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-10 leading-tight">Your Home, Our Soul. Bridge the Miles.</h2>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center font-serif text-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">01</div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Zero Distance Friction</h4>
                  <p className="text-gray-600 font-light leading-relaxed">We handle all on-ground activities—from society meetings to maintenance—leaving you with only the joy of ownership.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center font-serif text-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">02</div>
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
