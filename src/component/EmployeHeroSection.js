import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEmail, setEnquiryModal } from '@/redux/appSlice';
import { useForm } from 'react-hook-form';

const EmployeHeroSection = () => {
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
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 h-auto flex flex-col lg:flex-row justify-between py-2">
            <div className="w-full lg:w-6/12 h-auto flex justify-start lg:justify-end gap-6 pt-6 lg:pt-24">
                <div className="flex flex-col gap-4">
                    <h1 className="flex flex-col font-clash-display font-semibold text-3xl sm:text-5xl lg:text-[56px] leading-tight sm:leading-snug lg:leading-[85px] text-start  lg:text-left">
                      
                            <span>Improving Employee</span>
                            
                        <span className="bg-text-gradient bg-clip-text text-transparent">Well-being</span>
                    </h1>

                    <p className="font-normal text-[14px] sm:text-lg leading-[20px] lg:leading-[28px] mb-3 text-start pr-12 sm:pr-0 lg:text-left">
                        iMe&apos;s platform integrates seamlessly into daily work routines, delivering real-time well-being insights and personalized activities that foster healthy
                        habits, reduce stress, and enhance productivity. By cultivating a well-being-focused workplace, iMe supports individual well-being while helping
                        organizations meet their sustainability goals.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="hidden sm:flex w-full max-w-[27rem] mx-auto lg:mx-0 p-2.5 pl-4 sm:pl-6 
                                   flex-row sm:flex-row gap-3 sm:gap-0 
                                   border border-[#E1E1E1] justify-between items-center 
                                   rounded-[1.25rem]">
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            placeholder="Enter Your Email ..."
                            className="outline-none w-full sm:w-auto text-start sm:text-left"
                        />
                        <button className="font-notoSans font-semibold w-full sm:w-[11.25rem] h-12 
                                         text-base flex gap-2 justify-center items-center 
                                         rounded-xl text-white bg-theme-gradient">
                            Enquire Now <GoArrowRight className="w-6 h-8" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full lg:w-6/12 lg:-mr-20 mt-8 lg:mt-0">
                <Image
                    src="/Images/employeMobImg.svg"
                    alt="Employee Well-being Illustration"
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 50vw"
                    className="w-[90%] sm:w-[85%] lg:w-full h-auto object-contain mx-auto lg:mx-0"
                    priority
                    quality={100}
                />
            </div>
        </div>
    );
};

export default EmployeHeroSection;