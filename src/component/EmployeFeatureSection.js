import Image from 'next/image';
import React from 'react';

const EmployeFeatureSection = () => {
    return (
        <>
            <div className="w-full max-w-[1440px] h-auto mx-auto mt-16 sm:mt-20 lg:mt-32 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="w-full mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight sm:leading-snug lg:leading-[50px] text-center mb-4 sm:mb-6">
                        Key Features
                    </h1>

                    <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-relaxed lg:leading-[30px] text-center mb-8 sm:mb-12 lg:mb-16 px-2">
                        By fostering an engaging workplace, employees can participate in friendly competitions with colleagues, earning incentives and rewards for maintaining
                        healthy habits. With real-time insights at their fingertips, employees can take charge of their well-being, while organizations benefit from valuable
                        data-driven support that enhances overall team productivity.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-4 pt-4">
                        {/* AI Coach */}
                        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-4 text-center">
                            <Image
                                src="/Images/AIicon.svg"
                                alt="AI Coach Icon"
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 64px, 80px"
                                className="w-16 sm:w-20 h-16 sm:h-20"
                                quality={100}
                            />
                            <h2 className="text-2xl sm:text-2xl lg:text-[2rem] font-medium w-full text-center leading-tight lg:leading-8">
                                Context-aware <br className="" /> AI Coach
                            </h2>
                        </div>

                        {/* Productivity */}
                        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-4 text-center">
                            <Image
                                src="/Images/productivityIcon.svg"
                                alt="Boosted Productivity Icon"
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 64px, 80px"
                                className="w-16 sm:w-20 h-16 sm:h-20"
                                quality={100}
                            />
                            <h2 className="text-2xl sm:text-2xl lg:text-[2rem] font-medium w-full text-center leading-tight lg:leading-8">
                                Boosted <br className="" /> Productivity
                            </h2>
                        </div>

                        {/* Gamification */}
                        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-4 text-center">
                            <Image
                                src="/Images/gamificationIcon.svg"
                                alt="Gamification & Incentivization Icon"
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 64px, 80px"
                                className="w-16 sm:w-20 h-16 sm:h-20"
                                quality={100}
                            />
                            <h2 className="text-2xl sm:text-2xl lg:text-[2rem] font-medium w-full text-center leading-tight lg:leading-8">
                                Gamification & <br className="" /> Incentivization
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeFeatureSection;