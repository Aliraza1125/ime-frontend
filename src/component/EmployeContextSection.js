import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployeContextSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-24">
            <div className="flex flex-col  lg:flex-row gap-8 py-10 sm:py-16 lg:py-20">
                <div className="w-full lg:w-1/2 flex flex-col  gap-8 sm:gap-8 lg:gap-10 lg:pt-32 ">
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight sm:leading-snug lg:leading-[50px] ">
                        Context-aware <br className="" /> AI Coach
                    </h1>

                    <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50 ">
                        iMe&apos;s AI coach is a context-aware, providing personalized well-being solution that reflects real-time data such as workload, schedule, and personal
                        preferences. Our personalized approach guarantees that well-being support is timely, pertinent, and tailored to each employee&apos;s specific circumstances,
                        promoting a work-life balance.
                    </p>

                    {/* Mobile Read More Button */}
                    <button
                        className="md:hidden  font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors self-start lg:mx-0 "
                    >
                        Read More <GoArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
                    <Image
                        src="/Images/contextCvrImg.svg"
                        alt="Context-aware AI Coach Illustration"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 550px"
                        className="w-[90%] sm:w-[85%] lg:w-full lg:max-w-[550px] h-auto object-contain"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeContextSection;