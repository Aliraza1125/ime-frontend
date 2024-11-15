import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const EmployerOrganizationSection = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-full h-auto flex justify-center py-20">
            <div className="w-3/4 h-auto rounded-[2.5rem] flex  bg-theme-gradient ">
                <div className="w-1/2 flex flex-col p-20 gap-8 relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat">
                    <h1 className="text-[60px] font-semibold leading-[73.8px] text-white">Need more info?</h1>
                    <p className="text-[20px] font-normal leading-[24px] text-white/90">
                        Not sure which plan is right for you? Contact our sales team to discuss your organization’s specific needs and we’ll help you choose the perfect solution.
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
                <div className="w-1/2 flex justify-center items-center relative right-12">
                    <Image
                        src="/Images/ManagementDashboard.svg"
                        alt="GFG logo imported from public directory"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[50.125rem] h-[28.563rem] absolute"
                        priority
                        quality={100}
                    />
                    <Image
                        src="/Images/AddemployeeForm.svg"
                        alt="GFG logo imported from public directory"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[15.125rem] h-[17.438rem] absolute -bottom-24 left-0 z-10"
                        priority
                        quality={100}
                    />
                    <Image
                        src="/Images/Statistics.svg"
                        alt="GFG logo imported from public directory"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[20.813rem] h-[8.188rem] absolute -top-16 right-[-25px] z-10"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployerOrganizationSection;
