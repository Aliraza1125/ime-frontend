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
        <div className="w-full px-16 lg:px-24 h-auto flex justify-between py-6">
            <div className="w-6/12 h-auto flex justify-end gap-6 pr-10">
                <div className="flex flex-col gap-4">
                    <h1 className="font-clash-display font-semibold text-[80px] leading-[85px]">
                        Improve your company&apos;s well-being with
                        <span className="bg-text-gradient bg-clip-text text-transparent"> iMe!</span>
                    </h1>

                    <p className="font-normal text-lg leading-[28px] text-left mb-3">
                        Workplace well-being gaps are quietly undermining your organization&apos;s growth. Poor employee lifestyle choices contribute to almost $2 trillion in
                        annual losses from work-related stress, low productivity, and missed days due to chronic conditions. When employees struggle with stress, lack of work-life
                        balance, or personal well-being challenges, productivity drops and turnover rises.
                        <br /> Many organizations invest significant effort into well-being initiatives but find it challenging to establish strategies that genuinely support both
                        individual well-being and long-term sustainability goals. <br /> <br /> iMe&apos;s AI-driven platform transforms well-being by providing real-time,
                        personalized insights that help teams maintain energy, focus, and well-being. With iMe, organizations can elevate their well-being initiatives,
                        demonstrating their commitment to a balanced, productive work environment.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[27rem] pl-6 p-2.5 flex border border-[#E1E1E1] justify-between items-center rounded-[1.25rem]">
                        <input {...register('email', { required: true })} type="text" placeholder="Enter Your Email ..." className="outline-none" />
                        <button className="font-notoSans font-semibold w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient">
                            Enquire Now <GoArrowRight className="w-6 h-8" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="absolute right-0 w-6/12">
                <Image src="/Images/Leaderboard.svg" alt="Leaderboard Illustration" width={0} height={0} sizes="100%" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default HeroSection;
