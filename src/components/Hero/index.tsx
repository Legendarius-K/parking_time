import React from 'react';

const Hero = ({ title, subtitle, imageSrc, paragraf }) => {
    return (
        <>
            <div className="relative">
                <img className="h-80 w-full md:h-96 md:blur-none blur-sm" src={imageSrc} alt="hero picture" /> {/* blur-sm endast på små skärmar */}
                <div className="absolute inset-0 flex flex-col items-start justify-center my-24 md:my-48 mx-4 sm:mx-10 md:mx-20">
                    <p className="text-white text-base sm:text-lg md:text-xl">{subtitle}</p>
                    <h1 className="text-3xl sm:text-3xl md:text-4xl text-white mt-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">{title}</h1>
                    <p className="text-white w-full lg:w-1/2 leading-loose mt-5 text-base sm:text-lg md:text-xl">{paragraf}</p>
                </div>
            </div>
        </>
    );
}

export default Hero;
