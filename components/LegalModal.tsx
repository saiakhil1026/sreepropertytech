import React, { useEffect, useState } from 'react';

interface LegalSection {
    heading: string;
    content: string;
}

interface LegalContent {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
}

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: LegalContent | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    if (!content) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-4xl bg-stone-50 h-[85vh] md:h-[80vh] rounded shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl font-serif text-black">{content.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">Last Updated: {content.lastUpdated}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
                        aria-label="Close"
                    >
                        <svg
                            className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white">
                    <div className="max-w-3xl mx-auto space-y-10">
                        {content.sections.map((section, index) => (
                            <div key={index} className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">{section.heading}</h3>
                                <p className="text-gray-600 leading-relaxed text-justify text-sm md:text-base">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400 font-light">
                            SreePropertyTech &copy; 2025. All legal rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
