import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const EmployerOrganizationSection = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-[100%] h-auto flex justify-center py-10 lg:py-20 px-4 lg:px-0">
            <div className="w-full lg:w-3/4 h-[45rem] lg:h-[27rem] rounded-xl lg:rounded-[2.5rem] flex flex-col lg:flex-row bg-theme-gradient overflow-visible">
                <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start p-6 lg:p-20 gap-6 lg:gap-2 relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat ">
                    <h1 className="text-4xl sm:text-4xl lg:text-[40px] font-semibold leading-tight lg:leading-[73.8px] text-white">
                        Need more info?
                    </h1>
                    <p className="text-base sm:text-lg lg:text-[16px] text-center md:text-start font-normal leading-relaxed lg:leading-[24px] text-white/90 mb-4">
                        Not sure which plan is right for you? Contact our sales team to discuss your organization's specific needs and we'll help you choose the perfect solution.
                    </p>
                    <button
                        onClick={() => dispatch(setEnquiryModal(true))}
                        className="font-notoSans w-48 lg:w-48 h-12
                        flex gap-2 justify-center items-center rounded-xl
                        text-white bg-transparent border border-white
                        hover:bg-white/10 transition-colors duration-300
                        text-base lg:text-[16px] font-semibold lg:leading-[21.79px]"
                    >
                        Enquire Now <GoArrowRight className="w-6 h-8" />
                    </button>
                </div>
                <div className="mt-12 w-full lg:w-1/2 flex justify-center items-center relative lg:right-12 py-2 lg:py-0">
                    <Image
                        src="/Images/ManagementDashboard.svg"
                        alt="Management Dashboard"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[95%] sm:w-[90%] lg:w-[50.125rem] h-auto lg:h-[28.563rem] lg:absolute"
                        priority
                        quality={100}
                    />
                    <Image
                        src="/Images/AddemployeeForm.svg"
                        alt="Add Employee Form"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[10rem] sm:w-[10rem] lg:w-[14.125rem] h-auto lg:h-[16.438rem] absolute -bottom-12 sm:-bottom-16 lg:-bottom-18 -left-4 lg:-left-14 z-10"
                        priority
                        quality={100}
                    />
                    <Image
                        src="/Images/Statistics.svg"
                        alt="Statistics"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[12rem] sm:w-[12rem] lg:w-[20.813rem] h-auto lg:h-[8.188rem] absolute -top-8 lg:-top-16 -right-2 lg:right-[-25px] z-10"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployerOrganizationSection;