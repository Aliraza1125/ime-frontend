import React, { useState } from 'react';
import Link from 'next/link';
import { IoMenuOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { GoChevronDown } from 'react-icons/go';

const MobileNavButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSolutionSubmenu, setShowSolutionSubmenu] = useState(false);
    const router = useRouter();

    const solutionOptions = [
        {
            id: 1,
            label: 'FOR EMPLOYER',
            value: 'Employer',
            action: () => {
                router.push('/solution/employer');
                setIsOpen(false);
                setShowSolutionSubmenu(false)
            },
        },
        {
            id: 2,
            label: 'FOR EMPLOYEE',
            value: 'Employee',
            action: () => {
                router.push('/solution/employee');
                setIsOpen(false);
                setShowSolutionSubmenu(false)

            },
        },
    ];

    const navLinks = [
        { label: 'ABOUT US', href: '#' },
        { label: 'BLOG', href: '#' },
        { label: 'PRICING', href: '#' },
        { label: 'GDPR', href: '#' },
        { label: 'MEDIA', href: '#' },
        { label: 'CAREER', href: '#' },
    ];

    return (
        <>
            {/* Navigation Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed left-0 top-[32vh] z-50 flex items-center"
                aria-label="Open navigation menu"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-theme-gradient rounded-r-[20px]" />
                    <div className="relative flex items-center justify-center h-12 w-10 bg-white rounded-r-[19px] m-[1px]">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                    className="w-12 h-12"
                                >
                                    <defs>
                                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#FF4B6C' }} />
                                            <stop offset="100%" style={{ stopColor: '#BD1971' }} />
                                        </linearGradient>
                                    </defs>
                                    <path 
                                        d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" 
                                        fill="url(#arrowGradient)"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </button>

            {/* Fullscreen Side Navigation Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white/90 transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end p-6 border-b border-gray-100">
                        <button
                           onClick={() => {
                            setIsOpen(false);
                            setShowSolutionSubmenu(false);
                        }}
                            className="p-2"
                            aria-label="Close navigation menu"
                        >
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24"
                                        className="w-10 h-10 rotate-180"
                                    >
                                        <defs>
                                            <linearGradient id="closeArrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#FF4B6C' }} />
                                                <stop offset="100%" style={{ stopColor: '#BD1971' }} />
                                            </linearGradient>
                                        </defs>
                                        <path 
                                            d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" 
                                            fill="url(#closeArrowGradient)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col px-8 py-6 gap-8">
                        {/* Solution with Submenu */}
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setShowSolutionSubmenu(!showSolutionSubmenu)}
                                className="flex items-center justify-between text-black font-semibold text-xl uppercase"
                            >
                                SOLUTION
                                <GoChevronDown 
                                    className={`w-6 h-6 transition-transform duration-300 ${
                                        showSolutionSubmenu ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            {/* Solution Submenu */}
                            <div className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${
                                showSolutionSubmenu ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                {solutionOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={option.action}
                                        className="text-left text-black font-semibold text-lg uppercase hover:text-theme-pink transition-colors"
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Other Navigation Links
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-black font-semibold text-xl uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))} */}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileNavButton;