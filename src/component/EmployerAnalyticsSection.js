import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployerAnalyticsSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-24">
            <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row py-10 gap-8 lg:gap-2">
                {/* Image Container */}
                <div className="w-full lg:w-[60%] flex justify-center lg:justify-start items-center">
                    <div className="w-full relative">
                        <Image
                            src="/Images/tools.jpg"
                            alt="Analytics Tools Illustration"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 1000px"
                            className="w-full h-auto object-cover lg:scale-100 lg:-translate-x-12"
                            priority
                            quality={100}
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-[40%] flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:pt-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight sm:leading-snug lg:leading-[50px] text-start">
                        Real-time Analytics /<br className="hidden sm:block" />
                        Preemptive Tool
                    </h1>
                    <p className="font-medium text-[15px] sm:text-lg lg:text-lg leading-[25px] lg:leading-[33px] w-full font-satoshi opacity-50 pr-8 sm:pr-0">
                        Real-time analytics cater to practical insights into possible causes of stress, allowing for early interventions that reduce burnout and promote a healthy
                        work environment. This method decreases turnover while simultaneously driving sustained productivity and stronger team involvement.
                    </p>
                    
                    {/* Mobile Read More Button */}
                    {/* <button
                        className="md:hidden text-center font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                    >
                        Read More <GoArrowRight className="w-5 h-5" />
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default EmployerAnalyticsSection;