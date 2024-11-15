import { setEnquiryModal } from '@/redux/appSlice';
import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';

const PlanSection = () => {
    const dispatch = useDispatch();

    const PlanFeature = ({ icon, text, textColor = 'text-[#717171]', isPrice, priceColor }) => (
        <div className="flex items-center gap-x-3 mt-3">
            <Image src={icon} alt="feature tick" width={20} height={20} />
            <p className={`${textColor} text-base lg:text-lg`}>
                {isPrice ? (
                    <>
                        <span className={`${priceColor} font-semibold`}>{text.split(' ')[0]}</span> {text.split(' ').slice(1).join(' ')}
                    </>
                ) : (
                    text
                )}
            </p>
        </div>
    );

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-32">
            <div className="w-full mx-auto">
                <h1 className="text-center font-semibold text-[48px] leading-[59.04px] text-[#0D0C46]">Unlock the Full Potential of iMe</h1>
                <p className="text-center font-normal text-[20px] leading-[30px] font-lato mt-4 max-w-[76rem] mx-auto">
                    Take the next step in corporate well-being by unlocking all of iMe&apos;s powerful features! Explore the realm of tailored support, insights, and result driven
                    resources crafted to enhance your team&apos;s well-being. Experience how AI driven well-being journeys can boost productivity and ignite engagement.
                </p>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mt-20">
                    {/* Standard Plan */}
                    <div className="relative bg-white w-full max-w-[300px] border border-[#1E1E1E]/20 rounded-2xl p-6 flex flex-col">
                        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#B0208C] text-white font-semibold text-[30px] leading-[30px] text-center rounded-lg py-2 px-6 whitespace-nowrap">
                            Standard Plan
                        </h2>

                        <Image src="/Images/standarPlanLogo.svg" alt="standardPlan" width={62} height={44} className="mt-8" />

                        <div className="flex flex-col mt-4">
                            <PlanFeature icon="/Images/standarPlanTick.svg" text="200-10,000 Employees" />
                            <PlanFeature icon="/Images/standarPlanTick.svg" text="£10,000 Integration Free" />
                            <PlanFeature icon="/Images/standarPlanTick.svg" text="£4.99 /employee/month" isPrice={true} priceColor="text-[#B0208C]" />
                        </div>

                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="font-notoSans font-semibold w-full h-11 mt-6 text-base flex gap-2 justify-center items-center rounded-xl text-[#B0208C] border border-[#BC1F74] hover:bg-[#B0208C]/5 transition-colors my-4"
                        >
                            ENQUIRE NOW <GoArrowRight className="w-5 h-5" />
                        </button>
                        <div className="relative -bottom-2 right-8">
                            <p className="bg-[#F1F1F1] text-[15px] border border-[#1E1E1E]/20 rounded-[20px] w-[315px] p-1 text-center">Additional customizations available.</p>
                        </div>
                    </div>

                    {/* Limited Time Offer */}
                    <div className="relative bg-theme-gradient w-full max-w-[324px] rounded-2xl p-6 flex flex-col">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white border border-[#1E1E1E]/20 rounded-lg py-2 px-6 ">
                            <h2 className="text-[30px] font-semibold leading-[30px] text-center bg-theme-gradient bg-clip-text text-transparent w-[195px]">Limited Time Offer</h2>
                        </div>

                        <div className="mt-6">
                            <Image src="/Images/limitedPlanLogo.svg" alt="limited offer" width={62} height={44} className="mt-8" />
                        </div>

                        <div className="bg-white/20 p-4 rounded-xl mt-6">
                            <PlanFeature icon="/Images/limitedPlanTick.svg" text="50% off on subscription" textColor="text-white" />
                            <PlanFeature icon="/Images/limitedPlanTick.svg" text="£2.49 /employee/month" textColor="text-white" isPrice={true} priceColor="text-white" />
                            <PlanFeature icon="/Images/limitedPlanTick.svg" text="Free Integration Fee" textColor="text-white" />
                            <PlanFeature
                                icon="/Images/limitedPlanTick.svg"
                                text="25% off on additional Customization"
                                textColor="text-white"
                                isPrice={true}
                                priceColor="text-white"
                            />
                        </div>

                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="font-notoSans font-semibold w-full h-11 mt-6 text-base flex gap-2 justify-center items-center rounded-xl bg-white text-[#B0208C] hover:bg-white/90 transition-colors"
                        >
                            ENQUIRE NOW <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanSection;
