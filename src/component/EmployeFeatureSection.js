import Image from 'next/image';
import React from 'react';

const EmployeFeatureSection = () => {
    return (
        <>
            <div className="w-full max-w-[1440px] h-auto mx-auto mt-32 px-16 lg:px-24">
                <div className="w-full mx-auto">
                    <h1 className="text-[48px] font-semibold leading-[50px] text-center mb-6">Key Features</h1>

                    <p className="text-[20px] font-medium leading-[30px] text-center mb-16">
                        By fostering an engaging workplace, employees can participate in friendly competitions with colleagues, earning incentives and rewards for maintaining
                        healthy habits. With real-time insights at their fingertips, employees can take charge of their well-being, while organizations <br /> benefit from valuable
                        data-driven support that enhances overall team productivity.
                    </p>
                    <div className="h-[10.25rem] flex justify-between items-center pt-4">
                        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                            <Image
                                src="/Images/AIicon.svg"
                                alt="AI Coach Icon"
                                width={0}
                                height={0}
                                sizes="80px"
                                className="w-20 h-20"
                                style={{ width: '80px', height: '80px' }}
                                quality={100}
                            />
                            <h1 className="text-[2rem] font-medium w-full text-center leading-8">
                                Context-aware <br /> AI Coach
                            </h1>
                        </div>
                        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                            <Image
                                src="/Images/productivityIcon.svg"
                                alt="Boosted Productivity Icon"
                                width={0}
                                height={0}
                                sizes="80px"
                                className="w-20 h-20"
                                style={{ width: '80px', height: '80px' }}
                                quality={100}
                            />
                            <h1 className="text-[2rem] font-medium w-full text-center leading-8">
                                Boosted <br /> Productivity
                            </h1>
                        </div>
                        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                            <Image
                                src="/Images/gamificationIcon.svg"
                                alt="Gamification & Incentivization Icon"
                                width={0}
                                height={0}
                                sizes="80px"
                                className="w-20 h-20"
                                style={{ width: '80px', height: '80px' }}
                                quality={100}
                            />
                            <h1 className="text-[2rem] font-medium w-full text-center leading-8">Gamification & Incentivization</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeFeatureSection;
