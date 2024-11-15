import React, { useState } from 'react';

const VideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayVideo = () => {
        setShowVideo(true);
    };

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-32 px-16 lg:px-24">
            <div className="w-full aspect-video max-h-[600px] p-2 mx-auto rounded-xl shadow-customBoxShadow">
                <div className="video-wrapper relative w-full h-full rounded-lg overflow-hidden">
                    {!showVideo && (
                        <img
                            src="/Images/video-poster.webp"
                            alt="Custom Poster"
                            className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={handlePlayVideo}
                        />
                    )}

                    {showVideo && (
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/J_EgfY6ifgE?si=dfYdFHKpL6FFtRie&autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
