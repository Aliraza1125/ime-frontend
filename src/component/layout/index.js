import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ModalBox from '../core/ModalBox';
import { useForm } from 'react-hook-form';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { sendEnquiry, setEmail, setEnquiryModal, setEnquirySuccessModal } from '@/redux/appSlice';
import { TailSpin } from 'react-loader-spinner';
import MobileNavButton from './MobileNavButton';
import BackToTopButton from './BackToTopButton';

export const GeneralLayout = ({ children }) => {
    const { enquiryModal, email, loading, enquirySuccessModal } = useSelector(state => state?.app);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const formData = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        dispatch(sendEnquiry({ formData, reset }));
    };

    return (
        <>
            <Head>
                <title>iMe</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-full py-16 bg-theme-gradient">
                <div className="w-full min-h-screen h-full bg-white rounded-[60px] sm:rounded-[60px] md:rounded-[60px] lg:rounded-[75px] xl:rounded-[100px]">
                    <Header />
                    {/* <MobileNavButton /> */}
                    {children}
                    <Footer />
                </div>
                <div className="absolute flex justify-center items-center text-center w-full py-5">
                    <p className="text-center text-base font-normal text-white">© Copyright by iMe 2024 – All right reserved.</p>
                </div>
            </div>

            <BackToTopButton />

            <ModalBox isOpen={enquiryModal} setIsOpen={() => dispatch(setEnquiryModal(false))}>
                <div className="w-[95%] sm:w-[85%] md:w-[36rem] max-w-[36rem] min-w-[320px] flex flex-col justify-center items-center p-6 sm:p-6 md:p-8">
                    <h1 className="text-2xl sm:text-2xl font-bold text-center mb-6">Have Any Question?</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-5 sm:gap-4">
                        {/* Name Input */}
                        <div className="w-full flex flex-col justify-start items-start gap-2">
                            <label htmlFor="name" className="text-base font-medium">Name *</label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                placeholder="Enter your name"
                                className="outline-none w-full border border-gray-300 rounded-[10px] px-4 py-3 sm:p-2.5 text-base"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="w-full flex flex-col justify-start items-start gap-2">
                            <label htmlFor="email" className="text-base font-medium">Email *</label>
                            <input
                                {...register('email', { required: true })}
                                type="text"
                                placeholder="Enter your email address"
                                className="outline-none w-full border border-gray-300 rounded-[10px] px-4 py-3 sm:p-2.5 text-base"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="w-full flex flex-col justify-start items-start gap-2">
                            <label htmlFor="message" className="text-base font-medium">Message *</label>
                            <textarea
                                rows={6}
                                placeholder="Enter your message"
                                {...register('message', { required: true })}
                                className="resize-none outline-none w-full border border-gray-300 rounded-[10px] px-4 py-3 sm:p-2.5 text-base"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="font-notoSans font-semibold 
                             w-full sm:w-[11.25rem] 
                             h-12 
                             text-base
                             flex gap-2
                             justify-center items-center 
                             rounded-xl
                             text-white bg-theme-gradient 
                             mt-4">
                            {loading ? (
                                <>
                                    Sending
                                    <TailSpin
                                        visible={true}
                                        height="24"
                                        width="24"
                                        color="#FFFFFF"
                                        ariaLabel="tail-spin-loading"
                                        radius="0"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </>
                            ) : (
                                <>
                                    Enquire Now
                                    <GoArrowRight className="w-6 h-6" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </ModalBox>

            <ModalBox isOpen={enquirySuccessModal} setIsOpen={() => setEnquirySuccessModal(false)}>
                <div className="w-[95%] sm:w-[85%] md:w-[36rem] max-w-[36rem] min-w-[320px] flex flex-col justify-center items-center p-6 sm:p-6 md:p-8">
                    <h1 className="text-xl sm:text-2xl font-bold text-center">Enquiry Sent</h1>

                    <p className="text-base font-normal text-gray-600 mt-4 text-center px-2 sm:px-0">
                        Thank you for your enquiry. We will get back to you shortly.
                    </p>

                    <button
                        onClick={() => dispatch(setEnquirySuccessModal(false))}
                        className="font-notoSans font-semibold 
                     w-full sm:w-[11.25rem] 
                     h-12 
                     text-base 
                     flex gap-2 
                     justify-center items-center 
                     rounded-xl 
                     text-white bg-theme-gradient 
                     mt-6"
                    >
                        Close
                    </button>
                </div>
            </ModalBox>
        </>
    );
};
