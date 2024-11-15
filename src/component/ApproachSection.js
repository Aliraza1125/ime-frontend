import Image from 'next/image';
import React from 'react';

const ApproachSection = () => {
    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-[9rem] px-12 flex justify-between items-center gap-8">
            <div className="w-1/2">
                <h1 className="font-semibold text-[70px] leading-[70px] text-left">
                    Well-being in motion: <span className="inline-block bg-theme-gradient text-transparent bg-clip-text">A circular</span>
                    <span className="inline-block bg-theme-gradient text-transparent bg-clip-text">approach</span>
                </h1>
                <p className="font-normal text-[20px] leading-[40px] mt-6">
                    Empower your workforce with iMe&apos;s AI-driven well-being platform. Designed as a dynamic circular solution, our platform not only supports employee
                    well-being but also allows employers to monitor real-time updates and make informed decisions. <br /> By focusing on tailored well-being journeys, we aim to
                    reduce stress and boost productivity, improving well-being both inside and outside the workplace.
                </p>
            </div>
            <div className="w-1/2">
                <Image src="/Images/Multi-Devices-Mockup.svg" alt="Approach Section" width={0} height={0} sizes="100%" className="w-full h-auto object-contain" priority />
            </div>
        </div>
    );
};

export default ApproachSection;
