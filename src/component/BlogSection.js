import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const BlogCard = ({ image, title, description }) => (
    <div className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <Image 
                src={image} 
                alt={title} 
                width={370} 
                height={278} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
        </div>
        <h2 className="text-xl sm:text-[24px] font-medium leading-tight sm:leading-[29.52px] mt-4 line-clamp-2 min-h-[58px]">
            {title}
        </h2>
        <p className="text-sm sm:text-[14px] font-normal leading-relaxed sm:leading-[16.8px] font-lato text-gray-600 line-clamp-2 mt-3 min-h-[40px]">
            {description}
        </p>
        <button className="mt-4 h-9 w-9 rounded-full bg-[#B0208C] hover:bg-[#960673] transition-colors flex justify-center items-center text-white hover:scale-105  duration-300">
            <FaLongArrowAltRight size={16} />
        </button>
    </div>
);

const BlogSection = () => {
    const blogs = [
        {
            image: '/Images/blog-1.svg',
            title: 'How AI is revolutionizing employee well-being.',
            description:
                'AI is revolutionizing employee well-being by enhancing both physical and mental health support through data-driven insights and personalized interventions.',
        },
        {
            image: '/Images/blog-2.svg',
            title: 'What is CSRD and why it matters for your business.',
            description:
                'The corporate sustainability reporting directive (CSRD) is a new European union regulation that requires companies to provide detailed reports on their environmental, social, and governance (ESG) impacts.',
        },
        {
            image: '/Images/blog-3.svg',
            title: 'Work-life balance tips for the modern worker.',
            description: 
                "Work-life balance is crucial for maintaining both personal well-being and professional productivity in today's fast-paced world.",
        },
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto mt-12 sm:mt-20 lg:mt-32 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#F8F9FA] py-12">
            <div className="w-full mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-start sm:items-center ">
                    <span className="uppercase text-start sm:text-center rounded-lg shadow-lg text-xs sm:text-sm mb-4 px-4 py-2 font-lato">
                        Latest Blogs
                    </span>
                    <h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[48px] mb-4">
                        Learn & Grow
                    </h1>
                    <p className="text-start sm:text-center font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[30px] font-lato max-w-5xl">
                        From compliance tips to well-being strategies, our blog is your go-to resource for workplace wellness insights.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="w-full max-w-[370px]">
                                <BlogCard 
                                    image={blog.image} 
                                    title={blog.title} 
                                    description={blog.description} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;