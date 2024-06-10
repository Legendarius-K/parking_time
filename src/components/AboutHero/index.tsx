import React from 'react';

const AboutHero = () => {
    return (
        <div className="relative">
            <img className="h-80 w-full md:h-96 md:blur-none blur-sm" src="./Images/pink.jpeg" alt="hero picture" />
            <div className="absolute inset-0 flex flex-col items-start justify-center my-24 md:my-48 mx-4 sm:mx-10 md:mx-20">
                <p className="text-white text-base sm:text-lg md:text-xl">About us</p>
                <h1 className="text-3xl sm:text-3xl md:text-4xl text-white mt-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">Parking Time Sweden</h1>
                <p className="text-white w-full lg:w-1/2 leading-loose mt-5 text-base sm:text-lg md:text-xl">We are a tech startup dedicated to transforming the parking experience for all stakeholders - parkers, parking attendants, municipalities, and property owners.</p>
            </div>
        </div>
    );
}

export default AboutHero;