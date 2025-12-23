import React from 'react';

const ParentalCare: React.FC = () => {
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
        <section id="parental-care" ref={sectionRef} className="py-24 bg-white text-black overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Content Side (Left for variety vs WhyUs) */}
                    <div className={`order-2 lg:order-1 reveal-item ${isRevealed ? 'revealed' : ''}`}>
                        <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Guardian Services</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">Elite Parental Care</h2>
                        <p className="text-xl text-gray-500 font-light mb-10 leading-relaxed italic">
                            "Distance shouldn't compromise the care your parents deserve. We become family when you can't be there."
                        </p>

                        <div className="space-y-10">
                            <div className="group flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 transition-colors duration-300 group-hover:bg-yellow-600 group-hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-2 font-medium">Holistic Health Monitoring</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-sm">Regular health vitals tracking, medication management, and scheduled doctor visits delivered with empathy and precision.</p>
                                </div>
                            </div>

                            <div className="group flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 transition-colors duration-300 group-hover:bg-yellow-600 group-hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-2 font-medium">Emergency Response & Logistics</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-sm">24/7 emergency ambulance coordination and accompanied hospital visits. We are their shield in times of need.</p>
                                </div>
                            </div>

                            <div className="group flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 transition-colors duration-300 group-hover:bg-yellow-600 group-hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-2 font-medium">Companionship & Comfort</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-sm">Combating loneliness with regular social visits and emotional support. A true extended family experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side (Right) */}
                    <div className={`relative order-1 lg:order-2 reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-600/5 rounded-full -z-0 hidden md:block mix-blend-multiply"></div>
                        <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl group">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
                            <img
                                src="https://images.unsplash.com/photo-1516733968668-cbddc31c1821?q=80&w=2070&auto=format&fit=crop"
                                alt="Compassionate Care"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                        </div>
                        <div className="absolute -top-6 -left-6 p-6 bg-yellow-600 text-black z-20 shadow-xl">
                            <span className="block text-3xl font-serif font-bold">24/7</span>
                            <span className="block text-xs uppercase tracking-widest font-bold mt-1">Care & Support</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ParentalCare;
