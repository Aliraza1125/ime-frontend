import React, { useState } from 'react';
import Image from 'next/image';

const VideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayVideo = () => {
        setShowVideo(true);
    };

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-12 sm:mt-20 lg:mt-32 px-4 sm:px-8 md:px-12 lg:px-24">
            {/* Video Container */}
            <div className="w-full aspect-video max-h-[600px] p-2 mx-auto rounded-xl shadow-customBoxShadow bg-white">
                <div className="video-wrapper relative w-full h-full rounded-lg overflow-hidden">
                    {/* Thumbnail Image */}
                    {!showVideo && (
                        <div className="relative w-full h-full">
                            <Image
                                src="/Images/video-poster.webp"
                                alt="Custom Poster"
                                fill
                                priority
                                className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={handlePlayVideo}
                            />
                            {/* Optional Play Button Overlay */}
                            <div 
                                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                onClick={handlePlayVideo}
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                                    <div className="w-0 h-0 border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent border-l-[20px] sm:border-l-[24px] border-[#BC1F74] ml-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* YouTube iFrame */}
                    {showVideo && (
                        <div className="relative w-full h-full">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/J_EgfY6ifgE?si=dfYdFHKpL6FFtRie&autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;