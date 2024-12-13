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
            <div className="w-full aspect-[16/10] max-h-[600px] p-2 mx-auto rounded-xl shadow-customBoxShadow bg-white">
                <div className="video-wrapper relative w-full h-full rounded-lg overflow-hidden">
                    {/* Thumbnail Image */}
                    {!showVideo && (
                        <div className="relative w-full h-full">
                             <img
                            src="/Images/video-poster.webp"
                            alt="Custom Poster"
                            className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={handlePlayVideo}
                        />
                            {/* Dark Overlay */}
                            
                            
                            {/* Play Button Overlay */}
                            <div 
                                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                onClick={handlePlayVideo}
                            >
                                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-300">
                                    <Image 
                                        src="/Images/play-button.svg"
                                        alt="Play Button"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                    />
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
