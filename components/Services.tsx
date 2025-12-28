
import React, { useEffect, useRef, useState } from 'react';


const services = [
  {
    title: "Property Buy/Sell",
    description: "Exclusive assistance in buying and selling premium properties, ensuring optimal value and seamless transactions.",
    details: [
      "In-depth market analysis and valuation.",
      "Legal verification and documentation support.",
      "Expert negotiation to secure the best deal.",
      "Seamless transaction management from start to finish.",
      "Access to exclusive off-market listings."
    ],
    terms: "Subject to clear title verification & market standard brokerage fees.",
    image: "/property_buy_sell.png",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  },
  {
    title: "Concierge Maintenance",
    description: "Immaculate maintenance services ranging from cleaning to structural repairs.",
    details: [
      "Necessary preventive maintenance checks.",
      "Dedicated support for necessary repairs.",
      "Access to a network of vetted professionals.",
      "Transparent reporting and billing.",
      "Customized maintenance packages."
    ],
    terms: "Service availability subject to scheduling. Materials charged at actuals.",
    image: "/concierge_maintenance.png",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    )
  },
  {
    title: "Elite Tenant Sourcing",
    description: "Meticulous vetting of corporate and high-profile tenants for long-term reliability.",
    details: [
      "Comprehensive background and credit checks.",
      "Professional lease drafting and administration.",
      "Ongoing tenant relationship management.",
      "Strict screening to ensure prompt payments."
    ],
    terms: "Tenant verification based on submitted documents. One month rent as sourcing fee.",
    image: "/elite_tenant_sourcing.png",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    )
  },
  {
    title: "Legal Services",
    description: "Expert legal guidance for property matters, ensuring total compliance and peace of mind.",
    details: [
      "Title verification and due diligence.",
      "Sale deed drafting and registration.",
      "Property dispute resolution and litigation support.",
      "NRI-specific legal compliance (FEMA/RBI regulations).",
      "Inheritance, wills, and succession planning."
    ],
    terms: "Legal advice is based on provided documents. Court,Lawyer,CA,CS fees & stamp duty extra.",
    image: "/legal_services.png",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    )
  },
  {
    title: "Property Monitoring",
    description: "We Monitor Agricultural Land , Open Spaces, Appartment , Houses , Villas & Commercial Spaces .",
    details: [
      "Scheduled video calls and virtual tours.",
      "Real-time updates on property condition.",
      "We send halfyearly Adangal copies of your Agricultural land.",
      "We send Quarterly EC of your any type of property.",
      "We will remind Water tax payment of your Agricultural land.",
      "We will remind property tax payment of your property."

    ],
    terms: "Reports generated based on accessible areas. Visit schedules are pre-defined.",
    image: "/property_monitoring.png",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: "Interiors",
    description: "Renovating and staging properties to command premium rentals and valuation.",
    details: [
      "Custom interior design plans and 3D visualization.",
      "Sourcing of premium materials and furniture.",
      "Project management for renovations.",
      "Professional staging to maximize appeal.",
      "Collaboration with top architects and designers."
    ],
    terms: "Estimates valid for 15 days. 50% advance required to commence work.",
    image: "/interiors.png",
    icon: (
      <svg className="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    )
  }
];

const Services: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

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

  // Scroll to top of section when detail view opens
  useEffect(() => {
    if (selectedService && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedService]);


  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-black overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 reveal-item ${isRevealed ? 'revealed' : ''}`}>
          <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">World Class Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Unrivaled Services</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        {selectedService ? (
          // Detail View
          <div ref={detailRef} className="animate-fade-in-up">
            <button
              onClick={handleBackClick}
              className="flex items-center text-yellow-600 hover:text-yellow-500 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="uppercase tracking-widest text-sm font-semibold">Back to Services</span>
            </button>

            <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-lg relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 -mr-20 -mt-20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">


                <div className="flex-grow w-full">
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">{selectedService.title}</h3>

                  <div className="flex flex-col xl:flex-row gap-10 items-start">
                    {/*@ts-ignore*/}
                    {selectedService.image && (
                      <div className="w-full xl:w-2/5 flex-shrink-0 order-1 xl:order-1">
                        <div className="rounded-lg overflow-hidden border border-white/20 shadow-2xl">
                          <img
                            /*@ts-ignore*/
                            src={selectedService.image}
                            alt={selectedService.title}
                            className="w-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex-1 order-2 xl:order-2">
                      <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 border-l-2 border-yellow-600 pl-6">
                        {selectedService.description}
                      </p>

                      <div className="bg-black/40 p-8 rounded-lg">
                        <h4 className="text-yellow-500 uppercase tracking-wider text-xs font-bold mb-6">Service Highlights</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                          {selectedService.details.map((point, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <svg className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                        {/* Terms and Conditions */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <p className="text-[10px] text-gray-500 font-light tracking-wide uppercase">
                            * Terms & Conditions: <span className="text-gray-400 normal-case tracking-normal">{selectedService.terms}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group p-10 bg-white/5 border border-white/10 hover:border-yellow-600/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal-item h-full flex flex-col cursor-pointer ${isRevealed ? 'revealed' : ''}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-600/5 -mr-12 -mt-12 rounded-full group-hover:bg-yellow-600/10 transition-colors"></div>
                {service.icon}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif text-white group-hover:text-yellow-500 transition-colors">{service.title}</h3>
                  <svg className="w-6 h-6 text-gray-500 group-hover:text-yellow-500 transform group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
                <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
