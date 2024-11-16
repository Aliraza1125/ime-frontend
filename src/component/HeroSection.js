import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setEmail, setEnquiryModal } from '@/redux/appSlice';

const HeroSection = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        dispatch(setEmail(data.email));
        dispatch(setEnquiryModal(true));
    };

    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 h-auto flex flex-col lg:flex-row justify-between py-6">
            <div className="w-full lg:w-6/12 h-auto flex justify-start lg:justify-end gap-6 pr-0 lg:pr-10 mb-8 lg:mb-0">
                <div className="flex flex-col gap-4">
                    {/* Heading */}
                    <h1 className="font-clash-display font-semibold text-5xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[85px] text-center md:text-start ">
                        Improve your company&apos;s well-being with
                        <span className="bg-text-gradient bg-clip-text text-transparent"> iMe!</span>
                    </h1>

                    {/* Description */}
                    <p className="font-normal text-base lg:text-lg leading-[28px] text-center md:text-left mb-3">
                        Workplace well-being gaps are quietly undermining your organization&apos;s growth. Poor employee lifestyle choices contribute to almost $2 trillion in
                        annual losses from work-related stress, low productivity, and missed days due to chronic conditions. When employees struggle with stress, lack of work-life
                        balance, or personal well-being challenges, productivity drops and turnover rises.
                        <br /> Many organizations invest significant effort into well-being initiatives but find it challenging to establish strategies that genuinely support both
                        individual well-being and long-term sustainability goals. <br /> <br /> iMe&apos;s AI-driven platform transforms well-being by providing real-time,
                        personalized insights that help teams maintain energy, focus, and well-being. With iMe, organizations can elevate their well-being initiatives,
                        demonstrating their commitment to a balanced, productive work environment.
                    </p>

                    {/* Email Form */}
                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="w-full sm:w-[27rem] pl-6 p-2.5 flex flex-row sm:flex-row border border-[#E1E1E1] justify-between items-center rounded-[1.25rem] gap-3 sm:gap-0"
                    >
                        <input 
                            {...register('email', { required: true })} 
                            type="text" 
                            placeholder="Enter Your Email ..." 
                            className="w-full sm:w-auto outline-none" 
                        />
                        <button 
                            className="w-full sm:w-[11.25rem] h-12 font-notoSans font-semibold text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient"
                        >
                            Enquire Now <GoArrowRight className="w-6 h-8" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative lg:absolute lg:right-0 w-full lg:w-6/12">
                <Image 
                    src="/Images/Leaderboard.svg" 
                    alt="Leaderboard Illustration" 
                    width={0} 
                    height={0} 
                    sizes="100%" 
                    className="w-full h-auto "
                    priority 
                />
            </div>
        </div>
    );
};

export default HeroSection;