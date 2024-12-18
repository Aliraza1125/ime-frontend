import { setEnquiryModal } from '@/redux/appSlice';
import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';

const PlanSection = () => {
    const dispatch = useDispatch();

    const PlanFeature = ({ icon, text, textColor = 'text-[#717171]', isPrice, priceColor, isBold, isLarge, isSpecialFormat }) => (
        <div className="flex items-center gap-x-3 mt-3">
            <Image src={icon} alt="feature tick" width={20} height={20} />
            <p className={`${textColor} ${isLarge ? 'text-base sm:text-lg lg:text-xl' : 'text-sm sm:text-base lg:text-lg'}`}>
                {isPrice ? (
                    <>
                        <span className={`${priceColor} ${isBold ? 'font-semibold' : 'font-normal'}`}>{text.split(' ')[0]}</span> {text.split(' ').slice(1).join(' ')}
                    </>
                ) : isSpecialFormat ? (
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                ) : (
                    <span className={`${isBold ? 'font-bold text-lg sm:text-xl lg:text-2l' : ''}`}>{text}</span>
                )}
            </p>
        </div>
    );

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-40 sm:mt-20 lg:mt-32 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full mx-auto">
                {/* Header Section */}
                <h1 className="flex flex-col md:flex-row md:gap-2 md:justify-center text-start font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[59.04px] text-[#0D0C46]">
                    Unlock the Full <span>Potential of iMe</span>
                </h1>
                <p className="text-start sm:text-center font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[30px] font-lato mt-3 lg:mt-4 max-w-[76rem] mx-auto pr-16 sm:pr-0">
                    Take the next step in corporate well-being by unlocking all of iMe&apos;s powerful features! Explore the realm of tailored support, insights, and result driven
                    resources crafted to enhance your team&apos;s well-being. Experience how AI driven well-being journeys can boost productivity and ignite engagement.
                </p>

                {/* Plans Container */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 mt-16 lg:mt-20">
                    {/* Standard Plan */}
                    <div className="relative bg-white w-full max-w-[300px] border border-[#1E1E1E]/20 rounded-2xl p-4 sm:p-6 flex flex-col">
                        <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#B0208C] text-white font-semibold text-xl sm:text-2xl lg:text-[30px] leading-tight text-center rounded-lg py-2 px-4 sm:px-6 whitespace-nowrap">
                            Standard Plan
                        </h2>

                        <Image 
                            src="/Images/standarPlanLogo.svg" 
                            alt="standardPlan" 
                            width={62} 
                            height={44} 
                            className="mt-8" 
                        />

                        <div className="flex flex-col mt-4">
                            <PlanFeature icon="/Images/standarPlanTick.svg" text="200-10,000 Employees" />
                            <PlanFeature icon="/Images/standarPlanTick.svg" text="£10,000 Integration " />
                            <PlanFeature icon="/Images/standarPlanTick.svg" text="£4.99 /employee/month" isPrice={true} priceColor="text-[#B0208C]" isBold={true} />
                        </div>

                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="font-notoSans font-semibold w-full h-11 mt-6 text-sm sm:text-base flex gap-2 justify-center items-center rounded-xl text-[#B0208C] border border-[#BC1F74] hover:bg-[#B0208C]/5 transition-colors my-4"
                        >
                            ENQUIRE NOW <GoArrowRight className="w-5 h-5" />
                        </button>

                        <div className="relative flex justify-center -bottom-2">
                            <p className="bg-[#F1F1F1] text-xs sm:text-[15px] border border-[#1E1E1E]/20 rounded-[20px] w-[120%] sm:w-[355px] py-2 px-1 text-center cursor-pointer hover:bg-[#ddd4d4]">
                                Additional customizations available.
                            </p>
                        </div>
                    </div>

                    {/* Limited Time Offer */}
                    {/* <div className="relative bg-theme-gradient w-full max-w-[324px] rounded-2xl p-4 sm:p-6 flex flex-col">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white border border-[#1E1E1E]/20 rounded-lg py-2 px-4 sm:px-6">
                            <h2 className="text-xl sm:text-2xl lg:text-[30px] font-semibold leading-tight text-center bg-theme-gradient bg-clip-text text-transparent w-[195px]">
                                Limited Time Offer
                            </h2>
                        </div>

                        <div className="mt-6">
                            <Image 
                                src="/Images/limitedPlanLogo.svg" 
                                alt="limited offer" 
                                width={62} 
                                height={44} 
                                className="mt-8" 
                            />
                        </div>

                        <div className="bg-white/20 p-4 rounded-xl mt-6">
                            <PlanFeature 
                                icon="/Images/limitedPlanTick.svg" 
                                text="50% off on subscription" 
                                textColor="text-white" 
                                isBold={true} 
                                isLarge={true}
                            />
                            <PlanFeature 
                                icon="/Images/limitedPlanTick.svg" 
                                text="£2.49 /employee/month" 
                                textColor="text-white" 
                                isPrice={true} 
                                priceColor="text-white" 
                                isBold={false}
                            />
                            <PlanFeature 
                                icon="/Images/limitedPlanTick.svg" 
                                text='<span class="font-bold">Free</span> Integration' 
                                textColor="text-white"
                                isSpecialFormat={true}
                            />
                            <PlanFeature
                                icon="/Images/limitedPlanTick.svg"
                                text='<span class="font-bold">25% off</span> on additional Customization'
                                textColor="text-white"
                                isSpecialFormat={true}
                            />
                        </div>

                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="font-notoSans font-semibold w-full h-11 mt-6 text-sm sm:text-base flex gap-2 justify-center items-center rounded-xl bg-white text-[#B0208C] hover:bg-white/90 transition-colors"
                        >
                            ENQUIRE NOW <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PlanSection;