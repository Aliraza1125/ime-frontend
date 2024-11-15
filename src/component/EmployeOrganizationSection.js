import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const EmployeOrganizationSection = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-full  h-auto flex justify-center  pt-48 mb-48 lg:mb-60">
            <div className="w-3/4 h-[25rem] rounded-[2.5rem] flex  gap-8  bg-theme-gradient ">
                <div className="w-6/12 flex flex-col p-10 gap-8 relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat">
                    <h1 className="text-[60px] font-semibold leading-[73.8px] text-white">
                        Bring our platform to <br /> your organization
                    </h1>
                    <p className="text-[20px] font-normal leading-[24px] text-white/90">
                        Empower your workforce with AI-driven well-being management and work-life harmony solution. From real-time insights to proactive well-being support,
                        transform your workplace for optimal productivity and employee satisfaction.
                    </p>
                    <button
                        onClick={() => dispatch(setEnquiryModal(true))}
                        className="font-notoSans w-48 h-12
                        flex gap-2 justify-center items-center rounded-xl
                        text-white bg-transparent border border-white
                        hover:bg-white/10 transition-colors duration-300
                    text-[16px] font-semibold leading-[21.79px]"
                    >
                        Enquire Now <GoArrowRight className="w-6 h-8" />
                    </button>
                </div>
                <Image
                    src="/Images/OrganizationCvrImg.svg"
                    alt="Organization Illustration"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-[32.25rem] h-[44.12rem] relative -top-16 -right-16"
                />
            </div>
        </div>
    );
};

export default EmployeOrganizationSection;
