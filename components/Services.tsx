
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: "Portfolio Strategy",
    description: "Expert advisory on diversification across premium Indian metros for high yield.",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  },
  {
    title: "Concierge Maintenance",
    description: "Immaculate maintenance services ranging from cleaning to structural repairs.",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    )
  },
  {
    title: "Elite Tenant Sourcing",
    description: "Meticulous vetting of corporate and high-profile tenants for long-term reliability.",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    )
  },
  {
    title: "Legal & Compliance",
    description: "Hassle-free management of property tax, registration, and NRI legal mandates.",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    )
  },
  {
    title: "Property Monitoring",
    description: "Video inspections accessible from anywhere, providing absolute peace of mind.",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: "Interior Design",
    description: "Renovating and staging properties to command premium rentals and valuation.",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    )
  }
];

const Services: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    <section id="services" ref={sectionRef} className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 reveal-item ${isRevealed ? 'revealed' : ''}`}>
          <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">World Class Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Unrivaled Services</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group p-10 bg-white/5 border border-white/10 hover:border-yellow-600/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal-item h-full flex flex-col ${isRevealed ? 'revealed' : ''}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-600/5 -mr-12 -mt-12 rounded-full group-hover:bg-yellow-600/10 transition-colors"></div>
              {service.icon}
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
