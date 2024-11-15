import React from 'react';
import Image from 'next/image';

const EmployerIntegrationSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-24">
            <div className="flex  py-20">
                <div className="w-full lg:w-[46%] flex flex-col gap-8 lg:gap-10 lg:pt-32">
                    <h1 className="text-[48px] font-semibold leading-[50px]">
                        Seamless <br /> Integration
                    </h1>
                    <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                        The seamless integration with work schedules, well-being goals, and activity data creates a streamlined, non-intrusive experience that improves well-being
                        while maintaining productivity. This smart alignment makes sure well-being efforts seamlessly integrate into daily routines, benefiting employees&apos;
                        well-being and focus while allowing them to perform at their peak.
                    </p>
                </div>

                <div className="w-full lg:w-[54%]">
                    <Image
                        src="/Images/integration.jpg"
                        alt="Dashboard Illustration"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full lg:w-[719px] object-contain"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployerIntegrationSection;
