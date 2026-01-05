
import React, { useEffect, useRef, useState } from 'react';

const assistanceServices = [
    {
        title: "Guardian Assistance",
        description: "Distance shouldn't compromise the care your parents deserve. We become family when you can't be there.",
        details: [
            "Holistic Health Monitoring (Medication,Lab tests at your door step).",
            "Emergency Response & Logistics (Ambulance, hospital coordination).",
            "Companionship & Comfort (Social visits, emotional support).",
            "Regular updates to family members abroad.",
            "Dedicated care manager assignment."
        ],
        terms: "Emergency services subject to local availability. Medical expenses at actuals.",
        image: "/guardian_assistance.png",
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
        terms: "Product availability & pricing subject to brand. Concierge fee applicable.",
        image: "/shopping_assistance.png",
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
        terms: "Bookings subject to operator availability. Cancellation policies apply as per vendor.",
        image: "/travel_assistance.png",
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
        terms: "Event dates subject to venue availability. 50% advance for booking confirmation.",
        image: "/event_management.png",
        icon: (
            <svg className="w-10 h-10 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
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

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            setSelectedService(null);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    // Lock body scroll when detail view is open
    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedService]);

    const handleServiceClick = (service: typeof assistanceServices[0]) => {
        window.history.pushState({ modal: 'assistance' }, '', window.location.href);
        setSelectedService(service);
    };

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <section id="assistance" ref={sectionRef} className="py-24 bg-white text-black overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-20 reveal-item ${isRevealed ? 'revealed' : ''}`}>
                    <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Your Integrated Support System</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">Premium Assistance</h2>
                    <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
                </div>

                {selectedService && (
                    // Detail View Overlay
                    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in-up">
                        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative min-h-screen flex flex-col justify-center">


                            <div ref={detailRef} className="bg-gray-50 border border-gray-200 p-10 md:p-14 rounded-lg relative overflow-hidden shadow-lg mt-16 md:mt-0">
                                {/* Close Button - Moved Inside Card */}
                                <button
                                    onClick={handleBackClick}
                                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-yellow-600 hover:text-yellow-700 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full transition-all group z-50 border border-gray-200"
                                >
                                    <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                {/* Background accent */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 -mr-20 -mt-20 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex-grow w-full">
                                        <h3 className="text-3xl md:text-4xl font-serif text-black mb-6">{selectedService.title}</h3>

                                        <div className="flex flex-col xl:flex-row gap-10 items-start">
                                            {/*@ts-ignore*/}
                                            {selectedService.image && (
                                                <div className="w-full xl:w-2/5 flex-shrink-0 order-1 xl:order-1">
                                                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xl">
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
                                                    {/* Terms and Conditions */}
                                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                                        <p className="text-[10px] text-gray-400 font-light tracking-wide uppercase">
                                                            * Terms & Conditions: <span className="text-gray-500 normal-case tracking-normal">{selectedService.terms}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid View */}
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
            </div>
        </section>
    );
};

export default Assistance;
