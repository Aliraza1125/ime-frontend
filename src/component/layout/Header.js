import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import DropDown from '../core/DropDown';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const options = [
        {
            id: 1,
            label: 'For Employer',
            value: 'Employer',
            action: () => router.push('/solution/employer'),
        },
        {
            id: 2,
            label: 'For Employee',
            value: 'Employee',
            action: () => router.push('/solution/employee'),
        },
    ];
    return (
        <div className="w-full h-[5.75rem] py-4 flex flex-col items-center border-b border-[rgba(0,0,0,0.2)]">
            <div className="w-full max-w-[1920px] mx-auto px-8 lg:px-24 h-full flex justify-between ">
                <Link href="/" className="w-1/12 flex items-center">
                    <Image src="/Images/Logo.svg" alt="GFG logo imported from public directory" width={0} height={0} sizes="100%" className="w-[8.5rem] h-[3.25rem]" />
                </Link>

                <div className="w-4/12 flex  justify-start items-center gap-14 font-notoSans">
                    <DropDown
                        button={<span className="text-black font-semibold text-[18px] leading-[20px] cursor-pointer uppercase font-notoSans">Solution</span>}
                        options={options}
                        direction="top-8 right-0 origin-top-right"
                    />
                    {/* <Link
            href=''
            className='text-black font-semibold text-lg cursor-pointer uppercase'>
            Solution
          </Link> */}
                    {/* <Link
            href=''
            className='text-black font-semibold text-lg cursor-pointer uppercase'>
            About us
          </Link>
          <Link
            href=''
            className='text-black font-semibold text-lg cursor-pointer uppercase'>
            Blog
          </Link>
          <Link
            href=''
            className='text-black font-semibold text-lg cursor-pointer uppercase'>
            Pricing
          </Link> */}
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => dispatch(setEnquiryModal(true))}
                        className="font-notoSans font-semibold uppercase w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient"
                    >
                        Enquire Now <GoArrowRight className="w-6 h-8" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
