import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const FeaturesSection = () => {
    const router = useRouter();

    const FeatureItem = ({ text }) => (
        <div className="flex items-center gap-x-3">
            <Image
                className="h-4 w-4 sm:h-5 sm:w-5"
                src="/Images/featuresTick.svg"
                alt="featuresTick"
                width={20}
                height={20}
            />
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-normal lg:leading-[45px] text-black">
                {text}
            </p>
        </div>
    );

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-16 sm:mt-20 lg:mt-32 px-4 sm:px-8 md:px-12 lg:px-24">
            <div className="w-full mx-auto">
                {/* Header Section */}
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[50px] text-start sm:text-center">
                    Our Features
                </h1>

                <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-relaxed lg:leading-[30px] text-start sm:text-center  mb-12 lg:mb-12 pr-24 sm:px-4 lg:px-8">
                    iMe&apos;s platform helps create a balanced, energized workplace. With personalized well-being guidance, proactive employee risk detection, and data privacy at
                    the forefront, iMe enables teams to thrive and perform their best every day.
                </p>

                {/* Employers Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center  sm:mb-16">
                    <div className="w-full lg:w-4/12 flex flex-col items-start lg:items-start gap-6 ">
                        <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[50px] text-left">
                            For Employers
                        </h2>
                        <div className="flex flex-col gap-4 w-full">
                            <FeatureItem text="Frictionless Integration" />
                            <FeatureItem text="Real-time Analytics / Preemptive Tool" />
                            <FeatureItem text="ESG & CSRD Alignment" />
                        </div>
                        <button
                            onClick={() => router.push('/solution/employer')}
                            className="font-notoSans font-semibold w-36 h-11 mt-3 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                        >
                            Read More <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    {/* Image Container with increased mobile size */}
                    {/* Image Section */}
                    <div className="w-full lg:w-8/12 relative px-4 lg:px-0">
                        <div className="w-full max-w-full overflow-hidden">
                            {/* Desktop Image */}
                            <Image
                                src="/Images/employerFeature.png"
                                alt="employerFeature"
                                width={1000}
                                height={800}
                                className="hidden md:block w-full h-auto object-contain scale-100 md:scale-105 hover:scale-105 transition-transform duration-300"
                                priority
                            />
                            {/* Mobile Image */}
                            <Image
                                src="/Images/employerFeature-mobile.png"
                                alt="employerFeature Mobile"
                                width={1000}
                                height={800}
                                className="block md:hidden w-full h-auto object-contain scale-100 hover:scale-105 transition-transform duration-300 "
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Employees Section */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center  lg:gap-12">
                    {/* Employees Section Image */}
                    <div className="w-full lg:w-8/12 overflow-hidden px-4 lg:px-0">
                        <div className="w-full relative">
                            {/* Desktop Image */}
                            <Image
                                src="/Images/employeeFeature.png"
                                alt="employeeFeature"
                                width={1000}
                                height={1000}
                                className="hidden md:block w-full h-auto object-contain scale-100 md:scale-105 hover:scale-105 transition-transform duration-300"
                                priority
                            />
                            {/* Mobile Image */}
                            <Image
                                src="/Images/employeeFeature-mobile.png"
                                alt="employeeFeature Mobile"
                                width={1000}
                                height={800}
                                className="block md:hidden w-full h-auto object-contain scale-100 hover:scale-105 transition-transform duration-300 mt-8"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 flex flex-col items-start lg:items-start gap-6 ">
                        <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[50px] text-left">
                            For Employees
                        </h2>
                        <div className="flex flex-col gap-4 w-full">
                            <FeatureItem text="Context-aware AI Coach" />
                            <FeatureItem text="Gamification & Incentivization" />
                            <FeatureItem text="Boosted Productivity" />
                        </div>
                        <button
                            onClick={() => router.push('/solution/employee')}
                            className="font-notoSans font-semibold w-36 h-11 mt-3 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                        >
                            Read More <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;