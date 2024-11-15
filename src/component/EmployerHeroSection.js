import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setEmail, setEnquiryModal } from '@/redux/appSlice';

const EmployerHeroSection = () => {
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
        <div className="w-full px-16 lg:px-24 h-auto flex justify-between py-6 mt-2">
            <div className="w-6/12 h-auto flex justify-end gap-6 pr-10 pt-24">
                <div className="flex flex-col gap-4">
                    <h1 className="font-clash-display font-semibold text-[80px] leading-[85px]">
                        Employer&apos;s <br />
                        Super
                        <span className="bg-text-gradient bg-clip-text text-transparent"> Dashboard</span>
                    </h1>

                    <p className="font-normal text-base lg:text-xl leading-relaxed lg:leading-[28px] text-justify mb-3">
                        iMe equips HR teams with real-time, AI-driven insights to identify stress and employee risks early, reducing turnover and absenteeism. With proactive
                        notifications for at-risk employees, HRs can quickly provide necessary support. Additionally, iMe fosters healthy competition through well-being challenges
                        and rewards, promoting a motivated workplace culture that enhances overall productivity.
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
                <Image src="/Images/EmployerCvrImg.svg" alt="Leaderboard Illustration" width={0} height={0} sizes="100%" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default EmployerHeroSection;
