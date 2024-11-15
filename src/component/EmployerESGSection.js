import React from 'react';
import Image from 'next/image';

const EmployerESGSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:gap-10">
                    <h1 className="text-[48px] font-semibold leading-[50px]">
                        ESG/CSRD <br /> Alignment
                    </h1>
                    <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full font-satoshi opacity-50">
                        iMe actively promotes staff well-being and burnout reduction, in line with business sustainability efforts and meeting ESG standards and CSRD. By promoting
                        a healthy, balanced workplace, the platform assists firms in demonstrating a commitment to social responsibility and long-term employee care.
                    </p>
                </div>

                <div className="w-full lg:w-7/12 flex items-center justify-center lg:justify-start">
                    <Image
                        src="/Images/alignment.jpg"
                        alt="Gamification Interface 1"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full lg:w-[750px] h-auto relative z-10"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployerESGSection;
