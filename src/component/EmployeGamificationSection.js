import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployeGamificationSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-20 pt-10 sm:pt-16 lg:pt-20">
                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight sm:leading-snug lg:leading-[50px]">
                        Gamification & <br /> Incentivization
                    </h1>
                    
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                            Gamification can make well-being goals more exciting, fun and inspiring for employees. iMe&apos;s well-being strategy fosters employee engagement through
                            leaderboards, challenges, streaks, and rewards.
                        </p>

                        {/* Mobile Read More Button */}
                        <button
                            className="md:hidden font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors self-start"
                        >
                            Read More <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="w-1/2 lg:w-1/2 flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
                    <div className="flex items-center">
                        <Image
                            src="/Images/Img1.svg"
                            alt="Gamification Interface 1"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-[6rem] sm:w-[10rem] md:w-[14rem] lg:w-[16.875rem] h-[8rem] sm:h-[13rem] md:h-[18rem] lg:h-[21.5rem] relative z-10"
                            style={{ width: 'auto', height: 'auto' }}
                            priority
                            quality={100}
                        />
                        <Image
                            src="/Images/Img2.svg"
                            alt="Gamification Interface 2"
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
            </div>
        </div>
    );
};

export default EmployeGamificationSection;