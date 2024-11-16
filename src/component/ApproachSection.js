import Image from 'next/image';
import React from 'react';

const ApproachSection = () => {
    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-12 sm:mt-24 lg:mt-[9rem] px-6 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h1 className="font-semibold text-[42px] sm:text-[45px] lg:text-[70px] leading-tight lg:leading-[70px] text-left">
                        Well-being in motion:{' '}
                        <span className="inline-block bg-theme-gradient text-transparent bg-clip-text">
                            A circular
                        </span>{' '}
                        <span className="inline-block bg-theme-gradient text-transparent bg-clip-text">
                            approach
                        </span>
                    </h1>
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[40px] mt-4 lg:mt-6 text-left">
                        Empower your workforce with iMe&apos;s AI-driven well-being platform. Designed as a dynamic circular solution, our platform not only supports employee
                        well-being but also allows employers to monitor real-time updates and make informed decisions. 
                        <br className="hidden sm:block" /> 
                        By focusing on tailored well-being journeys, we aim to reduce stress and boost productivity, improving well-being both inside and outside the workplace.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <Image 
                        src="/Images/Multi-Devices-Mockup.svg" 
                        alt="Approach Section" 
                        width={700} 
                        height={500} 
                        className="w-full h-auto object-contain" 
                        priority 
                    />
                </div>
            </div>
        </div>
    );
};

export default ApproachSection;