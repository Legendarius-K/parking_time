import React from 'react';

const ContactHero = () => {
    return (
        <div className="relative">
            <img className="hidden md:block h-64 w-full object-cover md:h-80 lg:h-96 blur-sm md:blur-none" src="/Images/pink.jpeg" alt="hero picture" />
            <div className="absolute inset-0 flex flex-col items-start justify-center py-12 px-4 sm:px-10 md:px-20">
                <div className="block lg:hidden text-center p-3">
                    <h1 className="text-5xl sm:text-3xl md:text-4xl text-black mt-72 text-start font-semibold">Contact Us</h1>
                    <p className="text-black leading-8	text-start mt-4 w-full sm:w-3/4 md:w-2/3 text-base sm:text-lg md:text-xl">
                        Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.
                    </p>
                </div>
                <div className="w-3/6 hidden lg:block">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">Contact</p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-4">We would love to hear from you!</h1>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
