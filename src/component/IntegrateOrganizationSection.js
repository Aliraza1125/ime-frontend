import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { setEnquiryModal } from '@/redux/appSlice';
import { useDispatch } from 'react-redux';

const IntegrateOrganizationSection = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-full h-auto flex justify-center mt-16 md:mt-32">
            <div className="w-11/12 md:w-3/4 h-[42rem] rounded-2xl md:rounded-[2.5rem] flex flex-col md:flex-row gap-4 md:gap-8 bg-theme-gradient md:h-[24rem] ">
                <div className="flex flex-col md:flex-row justify-between items-center relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat w-full">
                    <div className="w-full md:w-7/12 flex flex-col p-6 md:p-10 gap-4 items-center md:items-start">
                        <h1 className="text-4xl text-center md:text-start md:text-[40px] font-semibold text-white">
                            Integrate iMe into
                            <p className="mt-1">your organization</p>
                        </h1>
                        <p className="text-sm md:text-[16px] font-normal leading-relaxed md:leading-[24px] text-white/90 text-center md:text-start">
                            Equip your team with iMe&apos;s AI powered well-being platform to gain instant and proactive insights that enhance well-being. With the right well-being
                            platform, create a workplace where productivity thrives and your team is empowered to grow both professionally and personally.
                        </p>

                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="font-notoSans w-40 md:w-48 h-12
                                flex gap-2 justify-center items-center rounded-xl
                                text-white bg-transparent border border-white
                                hover:bg-white/10 transition-colors duration-300
                                text-sm md:text-[16px] font-semibold leading-normal md:leading-[21.79px]"
                        >
                            Enquire Now <GoArrowRight className="w-5 md:w-6 h-6 md:h-8" />
                        </button>
                    </div>

                    <div className="w-full md:w-5/12 flex justify-end md:block">
                        <div className="w-[90%] md:w-full relative">
                            <Image
                                src="/Images/integrateOrganization.svg"
                                alt="Organization Integration Illustration"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="w-full h-auto md:w-[48rem] md:h-[48rem] scale-100 md:scale-125 relative 
                                    md:-bottom-20 md:-right-9 transform-gpu object-contain"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegrateOrganizationSection;