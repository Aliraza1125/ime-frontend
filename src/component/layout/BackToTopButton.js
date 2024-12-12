import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [buttonStyle, setButtonStyle] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button only when scrolled down 100px
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            const footer = document.querySelector('footer') || document.querySelector('.footer');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const buffer = 8; // 4rem
            
            if (footerRect.top < windowHeight) {
                const newBottom = windowHeight - footerRect.top + buffer;
                setButtonStyle({ bottom: `${newBottom}px` });
            } else {
                setButtonStyle({ bottom: '4rem' });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed right-2 sm:right-8 z-50 flex items-center gap-3 group transition-all duration-300"
            style={buttonStyle}
        >
            <span className="text-[#1E1E1E] font-bold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Back to Top
            </span>
            <button
                onClick={scrollToTop}
                className="w-[46px] h-[44px] 
                         rounded-full 
                         bg-white
                         p-[2px]
                         bg-theme-gradient
                         flex items-center justify-center 
                         transition-all duration-300 
                         hover:shadow-xl hover:scale-110"
                aria-label="Back to top"
            >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img 
                        src="/images/uparrow.png" 
                        alt="Arrow Up"
                        className="w-5 h-5" 
                    />
                </div>
            </button>
        </div>
    );
};

export default BackToTopButton;