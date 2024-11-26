import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const EmployerOrganizationSection = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-[100%] h-auto flex justify-center py-8 lg:py-16 px-4 lg:px-0">
            <div className="w-full lg:w-3/4 h-[40rem] lg:h-[22rem] rounded-xl lg:rounded-[2rem] flex flex-col lg:flex-row lg:gap-8 bg-theme-gradient overflow-visible">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start p-6 lg:p-12 gap-4 lg:gap-4 relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat">
                    <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold leading-tight lg:leading-[50px] text-white">
                        Need more info?
                    </h1>
                    <p className="text-base sm:text-lg lg:text-[16px] text-center md:text-start font-normal leading-relaxed lg:leading-[24px] text-white/90 mb-2">
                        Not sure which plan is right for you? Contact our sales team to discuss your organization&apos;s specific needs and we&apos;ll help you choose the perfect solution.
                    </p>
                    <button
                        onClick={() => dispatch(setEnquiryModal(true))}
                        className="font-notoSans w-44 h-11
                        flex gap-2 justify-center items-center rounded-xl
                        text-white bg-transparent border border-white
                        hover:bg-white/10 transition-colors duration-300
                        text-base font-semibold"
                    >
                        Enquire Now <GoArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Right Content with Images */}
                <div className="mt-8 w-full lg:w-1/2 flex justify-center items-center relative lg:right-8 py-2 lg:py-0">
                    <Image
                        src="/Images/ManagementDashboard.svg"
                        alt="Management Dashboard"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[90%] sm:w-[85%] lg:w-[45rem] h-auto lg:h-[24rem] lg:absolute"
                        priority
                        quality={100}
                    />
                    <Image
                        src="/Images/AddemployeeForm.svg"
                        alt="Add Employee Form"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[8rem] sm:w-[9rem] lg:w-[12rem] h-auto absolute -bottom-10 sm:-bottom-12 lg:-bottom-14 -left-3 lg:-left-10 z-10"
                        priority
                        quality={100}
                    />
                    <Image
                        src="/Images/Statistics.svg"
                        alt="Statistics"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[10rem] sm:w-[11rem] lg:w-[18rem] h-auto absolute -top-6 lg:-top-12 -right-2 lg:right-[-20px] z-10"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployerOrganizationSection;