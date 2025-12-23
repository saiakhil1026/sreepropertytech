
import React, { useEffect, useRef, useState } from 'react';

const assistanceServices = [
    {
        title: "Guardian Assistance",
        description: "Distance shouldn't compromise the care your parents deserve. We become family when you can't be there.",
        details: [
            "Holistic Health Monitoring (Vitals, medication, doctor visits).",
            "Emergency Response & Logistics (Ambulance, hospital coordination).",
            "Companionship & Comfort (Social visits, emotional support).",
            "Regular updates to family members abroad.",
            "Dedicated care manager assignment."
        ],
        icon: (
            <svg className="w-10 h-10 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
        )
    },
    {
        title: "Shopping Assistance",
        description: "Exclusive assistance in buying quality products, ensuring optimal value and seamless transactions.",
        details: [
            "Personalized shopping experiences tailored to your taste.",
            "Access to luxury brands and limited editions.",
            "Virtual shopping accompaniment.",
            "Coordination of logistics and delivery.",
            "Expert advice on product authenticity and value."
        ],
        icon: (
            <svg className="w-10 h-10 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
        )
    },
    {
        title: "Travel Assistance",
        description: "Seamless travel experiences tailored to your preferences, from booking to landing.",
        details: [
            "Customized itinerary planning.",
            "Flight and accommodation bookings.",
            "Visa and documentation assistance.",
            "Luxury local transport arrangements.",
            "24/7 travel concierge support."
        ],
        icon: (
            <svg className="w-10 h-10 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        )
    },
    {
        title: "Event Management",
        description: "Curating unforgettable moments with precision execution and creative flair.",
        details: [
            "Venue selection and management.",
            "Vendor coordination (Catering, Decor, Photography).",
            "Guest list management and RSVPs.",
            "On-site coordination and supervision.",
            "Post-event wrap-up and settlements."
        ],
        icon: (
            <svg className="w-10 h-10 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
        )
    }
];

const Assistance: React.FC = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [selectedService, setSelectedService] = useState<typeof assistanceServices[0] | null>(null);
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

    const handleServiceClick = (service: typeof assistanceServices[0]) => {
        setSelectedService(service);
    };

    const handleBackClick = () => {
        setSelectedService(null);
    };

    return (
        <section id="assistance" ref={sectionRef} className="py-24 bg-white text-black overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-20 reveal-item ${isRevealed ? 'revealed' : ''}`}>
                    <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Your Integrated Support System</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">Premium Assistance</h2>
                    <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
                </div>

                {selectedService ? (
                    // Detail View
                    <div ref={detailRef} className="animate-fade-in-up">
                        <button
                            onClick={handleBackClick}
                            className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors mb-8 group"
                        >
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span className="uppercase tracking-widest text-sm font-semibold">Back to Assistance</span>
                        </button>

                        <div className="bg-gray-50 border border-gray-200 p-10 md:p-14 rounded-lg relative overflow-hidden shadow-lg">
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 -mr-20 -mt-20 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                                <div className="flex-shrink-0">
                                    <div className="p-6 bg-yellow-50 rounded-full inline-block">
                                        {React.cloneElement(selectedService.icon as React.ReactElement, { className: "w-16 h-16 text-yellow-600" })}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-3xl md:text-4xl font-serif text-black mb-6">{selectedService.title}</h3>
                                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 border-l-2 border-yellow-600 pl-6">
                                        {selectedService.description}
                                    </p>

                                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                                        <h4 className="text-yellow-600 uppercase tracking-wider text-xs font-bold mb-6">Service Highlights</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                            {selectedService.details.map((point, idx) => (
                                                <li key={idx} className="flex items-start text-gray-700">
                                                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Grid View
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {assistanceServices.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => handleServiceClick(service)}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                className={`group p-10 bg-gray-50 border border-gray-200 hover:border-yellow-600/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal-item h-full flex flex-col cursor-pointer ${isRevealed ? 'revealed' : ''}`}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-600/5 -mr-12 -mt-12 rounded-full group-hover:bg-yellow-600/10 transition-colors"></div>
                                {service.icon}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-serif text-black group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-600 transform group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Assistance;
