import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const EmployeOrganizationSection = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-full h-auto flex justify-center pt-20 sm:pt-32 lg:pt-48 mb-30 sm:mb-32 lg:mb-60 px-4 sm:px-6">
            <div className="w-full sm:w-[95%] lg:w-3/4 h-[50rem] md:h-[27rem] rounded-xl lg:rounded-[2.5rem] flex flex-col lg:flex-row gap-8 bg-theme-gradient overflow-visible">
                <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start p-6 sm:p-8 lg:p-10 gap-6 sm:gap-6 relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat">
                    <h1 className="text-4xl sm:text-4xl lg:text-[37px] font-semibold leading-tight sm:leading-snug lg:leading-[45.8px] text-white text-center md:text-start">
                        Bring our <br className="block md:hidden" />  platform to <br className="hidden sm:block" /> your&apos; organization
                    </h1>
                    <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed lg:leading-[24px] text-white/90 text-center md:text-start">
                        Empower your workforce with AI-driven well-being management and work-life harmony solution. From real-time insights to proactive well-being support,
                        transform your workplace for optimal productivity and employee satisfaction.
                    </p>
                    <button
                        onClick={() => dispatch(setEnquiryModal(true))}
                        className="font-notoSans w-48 sm:w-48 h-12
                        flex gap-2 justify-center items-center rounded-xl
                        text-white bg-transparent border border-white
                        hover:bg-white/10 transition-colors duration-300
                       text-base lg:text-[16px] font-semibold lg:leading-[21.79px]"
                    >
                        Enquire Now <GoArrowRight className="w-6 h-8" />
                    </button>
                </div>

                <div className="w-full lg:w-6/12 flex justify-center lg:justify-end relative">
                    <Image
                        src="/Images/OrganizationCvrImg.svg"
                        alt="Organization Illustration"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[90%] sm:w-[90%] lg:w-[32.25rem] h-auto lg:h-[44.12rem] relative lg:-top-16 lg:-right-16"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeOrganizationSection;