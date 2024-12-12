import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropDown from '../core/DropDown';
import { useRouter } from 'next/router';
import { FaAngleDoubleUp } from 'react-icons/fa';

const Footer = () => {
    const router = useRouter();
    const options = [
        {
            id: 1,
            label: 'For Employer',
            value: 'Employer',
            action: () => router.push('/solution/employer'),
        },
        {
            id: 2,
            label: 'For Employee',
            value: 'Employee',
            action: () => router.push('/solution/employee'),
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="footer">
            {/* Upper Footer Section */}
            <div className="w-full relative z-10 py-4 md:py-6 lg:py-8 flex flex-col items-center border-b border-[rgba(0,0,0,0.2)]">
                <div className="w-full px-4 sm:px-6 md:px-12 lg:px-32 flex flex-col-reverse md:flex-row justify-between items-center relative gap-6 md:gap-0">
                    {/* Solutions Dropdown */}
                    <div className="flex justify-center items-center gap-4">
                        <DropDown
                            button={
                                <span className="text-black font-semibold text-base sm:text-lg lg:text-[18px] leading-[20px] cursor-pointer uppercase font-notoSans">
                                    Solution
                                </span>
                            }
                            options={options}
                            direction="bottom-10 left-0 origin-bottom-left"
                        />
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Images/Logo.svg"
                            alt="GFG logo"
                            width={150}
                            height={150}
                            className="w-32 sm:w-36 lg:w-[10rem] h-auto"
                        />
                    </Link>

                 
                </div>
            </div>

            {/* Lower Footer Section */}
            <div className="w-full px-12 sm:px-6 md:px-24 lg:px-32 py-4">
                {/* First Row - Social Media and Company Name */}
                <div className="w-full flex justify-between items-center mb-4">
                    {/* Social Media Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.youtube.com/@iMe_Life"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-110"
                        >
                            <Image
                                src="/Images/youtube.svg"
                                alt="YouTube"
                                width={18}
                                height={18}
                                className="w-[1.141rem] h-[1.141rem] cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ime-life/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-110"
                        >
                            <Image
                                src="/Images/LinkedIn.svg"
                                alt="LinkedIn"
                                width={18}
                                height={18}
                                className="w-[1.141rem] h-[1.141rem] cursor-pointer"
                            />
                        </a>
                    </div>

                    {/* Company Name */}
                    <p className="text-[#454552] text-sm font-normal">
                        iMe Life Ltd.
                    </p>
                </div>

                {/* Second Row - Legal Links */}
                <div className="w-full flex justify-between items-center lg:justify-end lg:gap-6 font-bold">
                    <Link
                        href="/terms"
                        className="text-[#454552] text-sm hover:text-[#B0208C] transition-colors"
                    >
                        Terms and Conditions
                    </Link>
                    <Link
                        href="/cookie-policy"
                        className="text-[#454552] text-sm hover:text-[#B0208C] transition-colors"
                    >
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;