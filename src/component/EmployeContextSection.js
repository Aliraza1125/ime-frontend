import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployeContextSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-8 py-20">
                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10 lg:pt-32">
                    <h1 className="text-[48px] font-semibold leading-[50px]">
                        Context-aware <br /> AI Coach
                    </h1>
                    <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                        iMe&apos;s AI coach is a context-aware, providing personalized well-being solution that reflects real-time data such as workload, schedule, and personal
                        preferences. Our personalized approach guarantees that well-being support is timely, pertinent, and tailored to each employee&apos;s specific circumstances,
                        promoting a work-life balance.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    <Image
                        src="/Images/contextCvrImg.svg"
                        alt="Context-aware AI Coach Illustration"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full lg:max-w-[550px] h-auto object-contain"
                        style={{ width: '100%', height: 'auto' }}
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeContextSection;
