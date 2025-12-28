
import React, { useEffect, useRef, useState } from 'react';

// Customer reviews data
const reviews = [
    {
        review: "The level of care and attention to detail SreePropertyTech provides is unmatched. I finally have peace of mind regarding my parents' wellbeing and my property assets.",
        author: "Arjun Reddy"
    },
    {
        review: "Being in the US, managing properties in India was a nightmare until I found them. Their transparency and professional updates are exactly what I needed.",
        author: "Priya Sharma"
    },
    {
        review: "Their Guardian Assistance service is a blessing. Knowing someone reliable is there for my elderly parents for medical visits makes all the difference.",
        author: "Rahul Krishnan"
    },
    {
        review: "From tenant management to legal documentation, they handled everything seamlessly. The best investment partners I've worked with.",
        author: "Anita Menon"
    },
    {
        review: "Truly premium service. They understand the expectations of NRIs and deliver luxury experiences. Highly recommended for anyone looking for reliability.",
        author: "Vikram Thapa"
    },
    {
        review: "Values are core to their business. Trustworthy, efficient, and always available. They have transformed how I manage my Indian assets.",
        author: "Meera Patel"
    }
];

const Reviews: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
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

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400; // Approx card width
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="reviews" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none"></div>

            <div className={`max-w-7xl mx-auto px-6 mb-16 text-center reveal-item ${isRevealed ? 'revealed' : ''}`}>
                <span className="text-yellow-600 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Voice of Trust</span>
                <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">Client Opinions</h2>
                <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
                <p className="mt-8 text-black/60 max-w-2xl mx-auto font-light text-lg">
                    Hear from our esteemed clientele who have entrusted us with their most valuable assets.
                </p>
            </div>

            <div className="relative max-w-full">
                {/* Scroll Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-lg text-black hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition-all duration-300 focus:outline-none"
                    aria-label="Scroll left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-lg text-black hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition-all duration-300 focus:outline-none"
                    aria-label="Scroll right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 px-6 md:px-20 pb-12 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            className={`flex-shrink-0 w-full md:w-[450px] snap-center reveal-item ${isRevealed ? 'revealed' : ''}`}
                        >
                            <div className="h-full p-10 bg-gray-50 border border-gray-100 rounded-lg hover:shadow-xl hover:border-yellow-600/30 transition-all duration-300 group relative">
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-yellow-600/20 group-hover:text-yellow-600/40 transition-colors">
                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46462 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z"></path>
                                    </svg>
                                </div>

                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed mb-8">
                                        "{item.review}"
                                    </p>

                                    <div className="flex items-center">
                                        <div className="w-12 h-1 bg-yellow-600 mr-4"></div>
                                        <div>
                                            <h4 className="font-bold text-black uppercase tracking-wider text-sm">{item.author}</h4>
                                            <span className="text-xs text-yellow-600 font-semibold mt-1 block">Verified Client</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots (Visual Only) */}
                <div className="flex justify-center mt-8 gap-2">
                    {reviews.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
