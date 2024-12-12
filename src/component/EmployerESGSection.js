import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployerESGSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-24">
            <div className="flex flex-col items-center lg:items-center lg:flex-row py-10 gap-8 lg:gap-2">
                {/* Text Content */}
                <div className="w-full lg:w-[32%] flex flex-col gap-6 sm:gap-8 lg:gap-10 ">
                    <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight sm:leading-snug lg:leading-[50px] text-start">
                        ESG/CSRD <br className="hidden sm:block" />
                        Alignment
                    </h1>
                    <p className="font-medium text-base sm:text-lg lg:text-lg leading-relaxed lg:leading-[33px] w-full font-satoshi opacity-50 pr-8 sm:pr-0     ">
                        iMe actively promotes staff well-being and burnout reduction, in line with business sustainability efforts and meeting ESG standards and CSRD. By promoting
                        a healthy, balanced workplace, the platform assists firms in demonstrating a commitment to social responsibility and long-term employee care.
                    </p>

                    {/* Mobile Read More Button */}
                    {/* <button
                        className="md:hidden text-center font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                    >
                        Read More <GoArrowRight className="w-5 h-5" />
                    </button> */}
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[68%] flex justify-center lg:justify-start items-center">
                    <div className="w-full relative">
                        <Image
                            src="/Images/alignment.jpg"
                            alt="ESG/CSRD Alignment Illustration"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 1000px"
                            className="w-full h-auto object-cover lg:scale-70 "
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerESGSection;