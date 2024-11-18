import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployeProductivitySection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 pt-10 sm:pt-16 lg:pt-20">
                <div className="w-3/6 lg:w-3/6 flex items-center justify-center lg:justify-start">
                    <div className="flex items-center">
                        <Image
                            src="/Images/Screen 2.svg"
                            alt="Productivity Screen 1"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-[4rem] sm:w-[8rem] md:w-[14rem] lg:w-[16.875rem] h-[8rem] sm:h-[13rem] md:h-[18rem] lg:h-[21.5rem] relative z-10"
                            style={{ width: 'auto', height: 'auto' }}
                            priority
                            quality={100}
                        />
                        <Image
                            src="/Images/Screen 1.svg"
                            alt="Productivity Screen 2"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-[7rem] sm:w-[11rem] md:w-[15rem] lg:w-[18.188rem] h-[15rem] sm:h-[24rem] md:h-[32rem] lg:h-[39.375rem] relative -left-4 sm:-left-6 md:-left-8 lg:-left-11"
                            style={{ width: 'auto', height: 'auto' }}
                            priority
                            quality={100}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10 lg:pt-32">
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight sm:leading-snug lg:leading-[50px]">
                        Boosted <br /> Productivity
                    </h1>
                    
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                            iMe&apos;s AI solution improves employee productivity by reducing stress and increasing engagement. Personalized healthy activities aligned with job demands
                            increase worker motivation and efficiency, resulting in a more fulfilling and profitable workday.
                        </p>

                        {/* Mobile Read More Button */}
                        <button
                            className="md:hidden font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors self-start"
                        >
                            Read More <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeProductivitySection;