import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropDown from '../core/DropDown';
import { useRouter } from 'next/router';
import { FaAngleDoubleUp } from 'react-icons/fa';

const Footer = () => {
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="w-full h-[5.75rem] relative z-10 py-8 flex flex-col items-center border-b border-[rgba(0,0,0,0.2)]  ">
                <div className="w-full px-32 h-full flex justify-between relative ">
                    <div className="flex justify-center items-center gap-4 text-black font-semibold text-[18px] leading-[20px] cursor-pointer uppercase font-notoSans">
                        <DropDown
                            button={<span className="text-black font-semibold text-[18px] leading-[20px] cursor-pointer uppercase font-notoSans">Solution</span>}
                            options={options}
                            direction="bottom-10 left-0 origin-bottom-left"
                        />
                    </div>
                    <Link href="/" className=" flex items-center">
                        <Image src="/Images/Logo.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-[8.5rem] h-[3.25rem] " />
                    </Link>
                    <div onClick={scrollToTop} className="absolute bottom-28 right-32 flex justify-center items-center gap-4 cursor-pointer">
                        <p className="text-[#454552]">Back-top</p>
                        <div className="h-9 w-9 rounded-full bg-[#B0208C] flex justify-center items-center text-white">
                            <FaAngleDoubleUp />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-32 flex justify-between h-[5.5rem] items-center ">
                <div className="flex w-1/2 items-center gap-6">
                    <a href="https://www.youtube.com/@iMe_Life" target="_blank">
                        <Image src="/Images/youtube.svg" alt="" width={0} height={0} sizes="100%" className="w-[1.141rem] h-[1.141rem] cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/company/ime-life/" target="_blank">
                        <Image src="/Images/LinkedIn.svg" alt="" width={0} height={0} sizes="100%" className="w-[1.141rem] h-[1.141rem] cursor-pointer" />
                    </a>
                </div>
                <div className="w-1/2 flex flex-col justify-end items-end gap-3">
                    <p className="text-[#454552] text-base font-normal">iMe Life Ltd.</p>
                    <div className="flex text-sm font-medium gap-5">
                        <div className="  border-r flex items-end px-5">
                            <h1>Terms and Conditions</h1>
                        </div>
                        <div className="">
                            <h1>Cookie Policy</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
