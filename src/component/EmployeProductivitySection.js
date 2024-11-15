import React from 'react';
import Image from 'next/image';

const EmployeProductivitySection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 pt-20">
                <div className="w-full lg:w-3/6 flex items-center justify-center lg:justify-start">
                    <div className="relative flex items-center">
                        <Image
                            src="/Images/Screen 2.svg"
                            alt="Productivity Screen 1"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-[16.875rem] h-[21.5rem] relative z-10"
                            style={{ width: '16.875rem', height: '21.5rem' }}
                            priority
                            quality={100}
                        />
                        <Image
                            src="/Images/Screen 1.svg"
                            alt="Productivity Screen 2"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-[18.188rem] h-[39.375rem] relative -left-11"
                            style={{ width: '18.188rem', height: '39.375rem' }}
                            priority
                            quality={100}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10 lg:pt-32">
                    <h1 className="text-[48px] font-semibold leading-[50px]">
                        Boosted <br /> Productivity
                    </h1>
                    <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                        iMe&apos;s AI solution improves employee productivity by reducing stress and increasing engagement. Personalized healthy activities aligned with job demands
                        increase worker motivation and efficiency, resulting in a more fulfilling and profitable workday.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmployeProductivitySection;
