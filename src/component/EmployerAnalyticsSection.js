import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const EmployerAnalyticsSection = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="w-full px-6 sm:px-8 md:px-8 lg:px-0 lg:w-2/3 h-full flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-7/12">
                    <Image
                        src="/Images/tools.jpg"
                        alt="GFG logo imported from public directory"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full lg:relative lg:-left-16 lg:-top-4 lg:w-[750px] object-contain"
                        priority
                        quality={100}
                    />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-10 mt-6 lg:mt-0">
                    <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[50px] text-start">
                        Real-time Analytics /<br className="hidden sm:block" />
                        Preemptive Tool
                    </h1>
                    <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                        Real-time analytics cater to practical insights into possible causes of stress, allowing for early interventions that reduce burnout and promote a healthy
                        work environment. This method decreases turnover while simultaneously driving sustained productivity and stronger team involvement.
                    </p>
                    
                    {/* Mobile Read More Button */}
                    <button
                        className="md:hidden text-center font-notoSans font-semibold w-36 h-11 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                    >
                        Read More <GoArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployerAnalyticsSection;