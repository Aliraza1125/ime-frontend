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
        <div className="w-full px-16 lg:px-24 h-auto flex justify-between py-6">
            <div className="w-6/12 h-auto flex justify-end gap-6 pt-24">
                <div className="flex flex-col gap-4">
                    <h1 className="font-clash-display font-semibold text-[80px] leading-[85px]">
                        Improving Employee
                        <span className="bg-text-gradient bg-clip-text text-transparent"> Well-being</span>
                    </h1>

                    <p className="font-normal text-lg leading-[28px] mb-3">
                        iMe’s platform integrates seamlessly into daily work routines, delivering real-time well-being insights and personalized activities that foster healthy
                        habits, reduce stress, and enhance productivity. By cultivating a well-being-focused workplace, iMe supports individual well-being while helping
                        organizations meet their sustainability goals.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[27rem] pl-6 p-2.5 flex border border-[#E1E1E1] justify-between items-center rounded-[1.25rem]">
                        <input {...register('email', { required: true })} type="text" placeholder="Enter Your Email ..." className="outline-none" />
                        <button className="font-notoSans font-semibold w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient">
                            Enquire Now <GoArrowRight className="w-6 h-8" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="-mr-20 w-6/12">
                <Image
                    src="/Images/employeMobImg.svg"
                    alt="Employee Well-being Illustration"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-auto object-contain"
                    style={{ width: '100%', height: 'auto' }}
                    priority
                    quality={100}
                />
            </div>
        </div>
    );
};

export default EmployeHeroSection;
