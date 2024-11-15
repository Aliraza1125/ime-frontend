import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
const AboutMeSection = () => {
    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-32 px-12 flex justify-between items-center gap-8">
            <div className="w-5/12">
                <Image
                    src="/Images/OBJECT.svg"
                    alt="About iMe Section"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 41.666667vw"
                    className="w-full h-auto object-contain"
                    style={{ width: '100%', height: 'auto' }}
                    priority
                    quality={100}
                />
            </div>
            <div className="w-7/12">
                <h1 className="text-[70px] font-semibold leading-[70px]">About iMe</h1>
                <p className="text-[18px] font-normal leading-[28px] mt-6">
                    iMe is an AI-powered platform designed to support organizational well-being through an innovative and privacy-focused solution. Our mission is to enhance
                    work-life balance by addressing holistic well-being challenges and promoting employee well-being. With a deep understanding of the interplay between workplace
                    demands and personal well-being, iMe provides tailored insights that help organizations foster healthier, more productive work environments.
                </p>
                <div className="flex flex-col justify-start items-start bg-white mt-6 shadow-customBoxShadow p-6 rounded-lg">
                    <p className="text-[#C81E5A] font-semibold text-lg mb-2">A commitment towards Society:</p>
                    <p className="text-[18px] font-normal leading-[28px] mb-6">
                        With the introduction of the Corporate Sustainability Reporting Directive (CSRD) and a growing emphasis on Environmental, Social, and Governance (ESG)
                        standards, companies are increasingly accountable for their impact on both people and the planet. iMe helps organizations meet ESG goals through these SDGs:
                    </p>

                    <div className="grid grid-cols-3 gap-4 w-full">
                        {[
                            {
                                title: 'SDG 3',
                                icon: '/Images/aboutIcon1.svg',
                                size: 38,
                                content: 'Good Health and Well-being',
                                description: 'Promoting mental and physical wellness in the workplace.',
                                hoverClass: 'hover:bg-[#4ca146]',
                            },
                            {
                                title: 'SDG 8',
                                icon: '/Images/aboutIcon2.svg',
                                size: 28,
                                content: 'Decent Work and Economic Growth',
                                description: 'Supporting a safe, inclusive, and productive work environment.',
                                hoverClass: 'hover:bg-[#a31c44]',
                            },
                            {
                                title: 'SDG 9',
                                icon: '/Images/aboutIcon3.svg',
                                size: 28,
                                content: 'Industry, Innovation, and Infrastructure',
                                description: 'Leveraging advanced technology to build resilient workplace wellness solutions.',
                                hoverClass: 'hover:bg-[#f26a2e]',
                            },
                        ].map((sdg, index) => (
                            <div key={index} className={`group border border-gray-300 rounded-lg p-4 h-auto ${sdg.hoverClass} hover:text-white`}>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold">{sdg.title}</h2>
                                    <Image src={sdg.icon} alt={sdg.title} width={sdg.size} height={sdg.size} className="group-hover:brightness-0 group-hover:invert" />
                                </div>
                                <p className="mt-4 text-sm lg:text-base">
                                    <span className="font-bold">{sdg.content} </span>–{sdg.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => router.push('/solution/employer')}
                        className="font-notoSans font-semibold w-36 h-11 mt-3 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                    >
                        Read More <GoArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;
