import Image from 'next/image';
import React from 'react';

const EmployerFeatureSection = () => {
    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-60 px-16 lg:px-24">
            <div className="w-full mx-auto">
                <h1 className="text-[48px] font-semibold leading-[50px] text-center mb-6">Key Features</h1>

                <p className="text-[20px] font-medium leading-[30px] text-center mb-16">
                    Our platform delivers personalized well-being support for employees while giving organizations real-time insights into productivity and <br />
                    well-being. With tailored features for both employers and employees, IMe ensures success for everyone.
                </p>
                <div className="h-[10.25rem] flex justify-between items-center pt-4">
                    <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                        <Image
                            src="/Images/integrationIcon.svg"
                            alt="Seamless Integration Icon"
                            width={0}
                            height={0}
                            sizes="80px"
                            className="w-20 h-20"
                            style={{ width: '80px', height: '80px' }}
                            quality={100}
                        />
                        <h1 className="text-[2rem] font-medium w-full text-center leading-8">
                            Seamless <br /> Integration
                        </h1>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                        <Image
                            src="/Images/AnalyticsIcon.svg"
                            alt="Real-time Analytics Icon"
                            width={0}
                            height={0}
                            sizes="80px"
                            className="w-20 h-20"
                            style={{ width: '80px', height: '80px' }}
                            quality={100}
                        />
                        <h1 className="text-[2rem] font-medium w-full text-center leading-8">Real-time Analytics / Preemptive Tool</h1>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                        <Image
                            src="/Images/ESGicon.svg"
                            alt="ESG/CSRD Alignment Icon"
                            width={0}
                            height={0}
                            sizes="80px"
                            className="w-20 h-20"
                            style={{ width: '80px', height: '80px' }}
                            quality={100}
                        />
                        <h1 className="text-[2rem] font-medium w-full text-center leading-8">
                            ESG/CSRD <br /> Alignment
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerFeatureSection;
