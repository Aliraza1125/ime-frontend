import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import DropDown from '../core/DropDown';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const Header = () => {
    const dispatch = useDispatch();
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

    return (
        <div className="w-full h-[5.75rem] py-4 flex flex-col items-center border-b border-[rgba(0,0,0,0.2)]">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-12 lg:px-24 h-full flex justify-between items-center">
            <Link href="/" className="flex items-center">
    <Image
        src="/Images/Logo.svg"
        alt="Logo"
        width={0}
        height={0}
        sizes="(max-width: 640px) 120px,
               (max-width: 768px) 128px,
               136px"
        className="w-[7.5rem] h-[2.75rem] 
                   sm:w-[8rem] sm:h-[3rem]
                   md:w-[8.5rem] md:h-[3.25rem]
                   lg:w-[9rem] lg:h-[3.5rem]
                   object-contain"
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
                    <Link
                        href=""
                        className="text-black font-semibold text-base lg:text-lg cursor-pointer uppercase"
                    >
                        About us
                    </Link>
                    <Link
                        href=""
                        className="text-black font-semibold text-base lg:text-lg cursor-pointer uppercase"
                    >
                        Blog
                    </Link>
                    <Link
                        href=""
                        className="text-black font-semibold text-base lg:text-lg cursor-pointer uppercase"
                    >
                        Pricing
                    </Link>
                </div>

                {/* Enquire Now Button - Responsive sizing */}
               {/* Enquire Now Button Container */}
<div className="flex justify-center items-center">
    <button
        onClick={() => dispatch(setEnquiryModal(true))}
        className="font-notoSans font-semibold uppercase 
                   w-32 sm:w-40 md:w-40 lg:w-44 
                   h-10 sm:h-11 md:h-12 
                   text-[12px] sm:text-base 
                   flex gap-1 sm:gap-1.5 md:gap-2 
                   justify-center items-center 
                   rounded-lg sm:rounded-xl 
                   text-white bg-theme-gradient"
    >
        Enquire Now 
        <GoArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-8" />
    </button>
</div>
            </div>
        </div>
    );
};

export default Header;