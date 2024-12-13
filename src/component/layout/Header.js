import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { GoArrowRight, GoChevronDown } from 'react-icons/go';
import DropDown from '../core/DropDown';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [showSolutionSubmenu, setShowSolutionSubmenu] = useState(false);

    const solutionOptions = [
        {
            id: 1,
            label: 'FOR EMPLOYER',
            value: 'Employer',
            action: () => {
                router.push('/solution/employer');
                setIsOpen(false);
                setShowSolutionSubmenu(false);
            },
        },
        {
            id: 2,
            label: 'FOR EMPLOYEE',
            value: 'Employee',
            action: () => {
                router.push('/solution/employee');
                setIsOpen(false);
                setShowSolutionSubmenu(false);
            },
        },
    ];

    const options = [
        {
            id: 1,
            label: 'Employer Dashboard',
            value: 'Employer',
            action: () => router.push('/solution/employer'),
        },
        {
            id: 2,
            label: 'Employee Well-being',
            value: 'Employee',
            action: () => router.push('/solution/employee'),
        },
    ];

    // Add scroll lock effect
    useEffect(() => {
        if (isOpen) {
            // Prevent scrolling on body when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when menu is closed
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Blur Overlay */}
            <div
                className={`fixed top-[9.75rem] left-0 w-full h-[calc(100vh-5.75rem)] inset-0 bg-white/50 backdrop-blur-sm transition-opacity duration-300 z-[50] md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            />

            <div className="w-full h-[5.75rem] py-4 flex flex-col items-center border-b border-[rgba(0,0,0,0.2)] relative z-[51]">
                <div className="w-full max-w-[1920px] mx-auto px-8 md:px-12 lg:px-24 h-full flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Images/Logo.svg"
                            alt="Logo"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 120px, (max-width: 768px) 128px, 136px"
                            className="w-[7.5rem] h-[2.75rem] sm:w-[8rem] sm:h-[3rem] md:w-[8.5rem] md:h-[3.25rem] lg:w-[9rem] lg:h-[3.5rem] object-contain"
                        />
                    </Link>

                    {/* Navigation Items - Hidden on mobile */}
                    <div className="hidden md:flex w-auto lg:w-6/12 justify-start items-center gap-4 lg:gap-14 font-notoSans">
                        <DropDown
                            button={
                                <span className="text-black font-semibold text-base lg:text-lg leading-5 cursor-pointer uppercase font-notoSans">
                                    Solution
                                </span>
                            }
                            options={options}
                            direction="top-8 right-0 origin-top-right"
                        />
                    </div>

                    {/* Enquire Now Button for Desktop / Toggle Button for Mobile */}
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="hidden md:flex font-notoSans font-semibold uppercase w-32 sm:w-40 md:w-40 lg:w-44 h-10 sm:h-11 md:h-12 text-[12px] sm:text-base gap-1 sm:gap-1.5 md:gap-2 justify-center items-center rounded-lg sm:rounded-xl text-white bg-theme-gradient"
                        >
                            Enquire Now
                            <GoArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-8" />
                        </button>
                        
                        {/* Toggle Button for Mobile */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden flex items-center justify-center w-12 h-12 bg-theme-gradient rounded-xl"
                        >
                            {isOpen ? (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8"
                                >
                                    <path 
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                        fill="white"
                                    />
                                </svg>
                            ) : (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                    className="w-10 h-10"
                                >
                                    <path 
                                        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                                        fill="white"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed top-[9.75rem] left-0 w-full h-[calc(100vh-5.75rem)] bg-white/80 transform transition-transform duration-700 ease-in-out z-[60] md:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
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
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;