import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployerIntegrationSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-24">
            <div className="flex flex-col items-start lg:flex-row py-10 sm:py-16 lg:py-20 gap-8 lg:gap-0">
                {/* Text Content */}
                <div className="w-full lg:w-[46%] flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:pt-32">
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight sm:leading-snug lg:leading-[50px] text-start lg:text-left">
                        Seamless <br className="hidden sm:block" /> Integration
                    </h1>
                    <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50 text-start lg:text-left">
                        The seamless integration with work schedules, well-being goals, and activity data creates a streamlined, non-intrusive experience that improves well-being
                        while maintaining productivity. This smart alignment makes sure well-being efforts seamlessly integrate into daily routines, benefiting employees&apos;
                        well-being and focus while allowing them to perform at their peak.
                    </p>
                    
                    {/* Read More Button - Now part of the text content container */}
                    <button
                        className="md:hidden text-center font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                    >
                        Read More <GoArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[54%] flex justify-center lg:justify-start items-start">
                    <div className="w-full max-w-2xl lg:max-w-none">
                        <Image
                            src="/Images/integration.jpg"
                            alt="Dashboard Illustration"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 719px"
                            className="w-full lg:w-[719px] h-auto object-contain"
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerIntegrationSection;