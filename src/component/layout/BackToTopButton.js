import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when user scrolls down 100px
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Clean up
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group">
                    <span className="text-[#1E1E1E] font-bold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Back to Top
                    </span>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 
                                 rounded-full 
                                  border-4 border-[#000081]
                                 shadow-lg 
                                 
                                 flex items-center justify-center 
                                 transition-all duration-300 
                                 hover:shadow-xl hover:scale-110"
                        aria-label="Back to top"
                    >
                        <div className="w-8 h-8 text-[#42a6f7]">
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M18 15l-6-6-6 6"/>
                            </svg>
                        </div>
                    </button>
                </div>
            )}
        </>
    );
};

export default BackToTopButton;