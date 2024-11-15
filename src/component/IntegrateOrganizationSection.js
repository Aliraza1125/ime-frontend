import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { setEnquiryModal } from '@/redux/appSlice';
import { useDispatch } from 'react-redux';

const IntegrateOrganizationSection = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-full h-auto flex justify-center mt-32">
            <div className="w-3/4 h-[26rem] rounded-[2.5rem] flex  gap-8  bg-theme-gradient ">
                <div className="flex justify-between items-center relative bg-[url('/Images/map-bg.png')] bg-cover bg-no-repeat">
                    <div className="w-7/12 flex flex-col p-10 gap-4">
                        <h1 className="text-[60px] font-semibold leading-[73.8px] text-white">
                            Integrate iMe into
                            <br /> your organization
                        </h1>
                        <p className="text-[20px] font-normal leading-[24px] text-white/90">
                            Equip your team with iMe’s AI powered well-being platform to gain instant and proactive insights that enhance well-being. With the right well-being
                            platform, create a workplace where productivity thrives and your team is empowered to grow both professionally and personally.
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

                    <div className="w-5/12">
                        <Image
                            src="/Images/integrateOrganization.svg"
                            alt="Organization Integration Illustration"
                            width={0}
                            height={0}
                            sizes="768px"
                            className="w-[48rem] h-[48rem] scale-125 relative -bottom-28 -right-9"
                            style={{
                                width: '48rem',
                                height: '48rem',
                                transform: 'scale(1.25)',
                                position: 'relative',
                                bottom: '-7rem',
                                right: '-2.25rem',
                            }}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegrateOrganizationSection;
