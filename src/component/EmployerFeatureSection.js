import Image from 'next/image';
import React from 'react';

const EmployerFeatureSection = () => {
    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-20 sm:mt-32 lg:mt-60 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="w-full mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[50px] text-start sm:text-center mb-4 lg:mb-6">
                    Key Features
                </h1>

                <p className=" text-base sm:text-lg lg:text-[20px] font-medium leading-relaxed lg:leading-[30px] text-start sm:text-center pr-16 sm:pr-0 mb-8 lg:mb-16 sm:px-4 ">
                    Our platform delivers personalized well-being support for employees while giving organizations real-time insights into productivity and 
                    well-being. With tailored features for both employers and employees, IMe ensures success for everyone.
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-6 lg:gap-4 pt-4 pb-8 sm:pb-0 sm:h-[10.25rem]">
                    {/* Seamless Integration */}
                    <div className="w-full sm:w-1/3 flex sm:flex-col justify-center items-center gap-6 sm:gap-4 text-center">
                        <Image
                            src="/Images/integrationIcon.svg"
                            alt="Seamless Integration Icon"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 64px, 80px"
                            className="w-16 sm:w-20 h-16 sm:h-20"
                            style={{ width: 'auto', height: 'auto', maxWidth: '80px', maxHeight: '80px' }}
                            quality={100}
                        />
                        <h2 className="text-xl sm:text-2xl lg:text-[2rem] font-medium w-full text-start sm:text-center leading-tight lg:leading-8">
                            Seamless <br /> Integration
                        </h2>
                    </div>

                    {/* Real-time Analytics */}
                    <div className="w-full sm:w-1/3 flex sm:flex-col justify-center items-center gap-6 sm:gap-4 text-center">
                        <Image
                            src="/Images/AnalyticsIcon.svg"
                            alt="Real-time Analytics Icon"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 64px, 80px"
                            className="w-16 sm:w-20 h-16 sm:h-20"
                            style={{ width: 'auto', height: 'auto', maxWidth: '80px', maxHeight: '80px' }}
                            quality={100}
                        />
                        <h2 className="text-xl sm:text-2xl lg:text-[2rem] font-medium w-full text-start sm:text-center leading-tight lg:leading-8">
                            Real-time Analytics / <br /> Preemptive Tool
                        </h2>
                    </div>

                    {/* ESG/CSRD Alignment */}
                    <div className="w-full sm:w-1/3 flex sm:flex-col justify-center items-center gap-6 sm:gap-4 text-center">
                        <Image
                            src="/Images/ESGicon.svg"
                            alt="ESG/CSRD Alignment Icon"
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 64px, 80px"
                            className="w-16 sm:w-20 h-16 sm:h-20"
                            style={{ width: 'auto', height: 'auto', maxWidth: '80px', maxHeight: '80px' }}
                            quality={100}
                        />
                        <h2 className="text-xl sm:text-2xl lg:text-[2rem] font-medium w-full text-start sm:text-center leading-tight lg:leading-8">
                            ESG/CSRD <br /> Alignment
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerFeatureSection;