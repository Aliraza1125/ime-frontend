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
        <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24 h-auto flex flex-col lg:flex-row justify-between py-2  relative">
            <div className="w-full lg:w-6/12 h-auto flex justify-start lg:justify-end gap-6 lg:pr-10 pt-6 lg:pt-24 mb-8 lg:mb-0">
                <div className="flex flex-col gap-4">
                    <h1 className="flex flex-col text-start md:text-start font-clash-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[60px] leading-tight lg:leading-[85px]">
                        {/* Mobile View: "Employer's Super" and "Dashboard" */}
                        <div className="flex flex-col md:hidden">
                            <span>Employer&apos;s 
                                <span className="bg-text-gradient bg-clip-text text-transparent">{" "}Super</span>
                            </span>
                            <span className="bg-text-gradient bg-clip-text text-transparent">
                                Dashboard
                            </span>
                        </div>

                        {/* Desktop View: "Employer's" and "Super Dashboard" */}
                        <div className="hidden md:flex md:flex-col">
    <span>Employer&apos;s</span>
    <span>
        <span className="bg-text-gradient bg-clip-text text-transparent">Super</span>{' '}
        <span className="bg-text-gradient bg-clip-text text-transparent">Dashboard</span>
    </span>
</div>

                    </h1>

                    <p className="font-normal text-sm sm:text-base lg:text-xl leading-relaxed lg:leading-[28px]  mb-3 text-start sm:text-center pr-20 sm:pr-0 md:text-justify">
                        iMe equips HR teams with real-time, AI-driven insights to identify stress and employee risks early, reducing turnover and absenteeism. With proactive
                        notifications for at-risk employees, HRs can quickly provide necessary support. Additionally, iMe fosters healthy competition through well-being challenges
                        and rewards, promoting a motivated workplace culture that enhances overall productivity.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="hidden sm:flex w-full max-w-[27rem] pl-3 sm:pl-6 p-2.5 flex-row sm:flex-row border border-[#E1E1E1] justify-between items-center rounded-[1.25rem] gap-3 sm:gap-0">
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            placeholder="Enter Your Email ..."
                            className="outline-none w-full sm:w-auto"
                        />
                        <button className="font-notoSans font-semibold w-full sm:w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient">
                            Enquire Now <GoArrowRight className="w-6 h-8" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full lg:w-6/12 lg:absolute lg:right-0">
                <Image
                    src="/Images/EmployerCvrImg.svg"
                    alt="Leaderboard Illustration"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default EmployerHeroSection;