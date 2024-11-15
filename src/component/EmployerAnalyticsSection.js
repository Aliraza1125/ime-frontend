import React from 'react';
import Image from 'next/image';

const EmployerAnalyticsSection = () => {
    return (
        <div className="w-full  h-auto flex justify-center items-center">
            <div className="w-2/3 h-full flex items-center ">
                <div className="w-7/12">
                    <Image
                        src="/Images/tools.jpg"
                        alt="GFG logo imported from public directory"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="relative -left-16 -top-4 w-full lg:w-[750px]"
                        priority
                        quality={100}
                    />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col gap-10">
                    <h1 className="font-semibold text-5xl leading-[50px]">
                        Real-time Analytics /<br />
                        Preemptive Tool
                    </h1>
                    <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                        Real-time analytics cater to practical insights into possible causes of stress, allowing for early interventions that reduce burnout and promote a healthy
                        work environment. This method decreases turnover while simultaneously driving sustained productivity and stronger team involvement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmployerAnalyticsSection;
