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
                    {children}
                    <Footer />
                </div>
                <div className="  flex justify-center items-center text-center w-full py-5">
                    <p className="text-center text-base font-normal text-white ">© Copyright by iMe 2024 – All right reserved.</p>
                </div>
            </div>
            <ModalBox isOpen={enquiryModal} setIsOpen={() => dispatch(setEnquiryModal(false))}>
                <div className="w-[36rem] flex flex-col justify-center items-center p-8">
                    <h1 className="text-2xl font-bold"> Have Any Question?</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center mt-4 gap-4">
                        <div className="w-full flex flex-col justify-start items-start">
                            <label htmlFor="name">Name *</label>
                            <input
                                {...register('name', { required: true })}
                                type="txet"
                                placeholder="Enter your name"
                                className="outline-none w-full border border-gray-300 rounded-[10px] p-2"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-start items-start">
                            <label htmlFor="email">Email *</label>
                            <input
                                {...register('email', { required: true })}
                                type="text"
                                placeholder="Enter your email address"
                                className="outline-none w-full border border-gray-300 rounded-[10px] p-2"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-start items-start">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                rows={8}
                                placeholder="Enter your message"
                                {...register('message', { required: true })}
                                className="resize-none outline-none w-full border border-gray-300 rounded-[10px] p-2"
                            ></textarea>
                        </div>
                        <button className="font-notoSans font-semibold w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient">
                            {loading ? (
                                <>
                                    Sending
                                    <TailSpin visible={true} height="26" width="26" color="#FFFFFF" ariaLabel="tail-spin-loading" radius="0" wrapperStyle={{}} wrapperClass="" />
                                </>
                            ) : (
                                <>
                                    Enquire Now
                                    <GoArrowRight className="w-6 h-8" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </ModalBox>

            <ModalBox isOpen={enquirySuccessModal} setIsOpen={() => setEnquirySuccessModal(false)}>
                <div className="w-[36rem] flex flex-col justify-center items-center p-8">
                    <h1 className="text-2xl font-bold">Enquiry Sent</h1>
                    <p className="text-base font-normal text-gray-600 mt-4">Thank you for your enquiry. We will get back to you shortly.</p>
                    <button
                        onClick={() => dispatch(setEnquirySuccessModal(false))}
                        className="font-notoSans font-semibold w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient mt-4"
                    >
                        Close
                    </button>
                </div>
            </ModalBox>
        </>
    );
};
