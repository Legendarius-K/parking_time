import React from 'react';

const ContactHero = () => {
    return (
        <div className="relative">
            <img className="hidden md:block w-full object-cover object-center h-96" src="/Images/trees.png" alt="hero picture" />
            <div className="absolute w-2/5 bg-slate-900/20 backdrop-blur inset-0 flex flex-col items-start justify-center py-8 px-4 sm:px-10 md:px-10">
                <div className="w-full ml-8 flex flex-col">
                    <div className="flex items-center">
                        <img className="w-3 mr-3" src="/red.svg" alt="red dot" />
                        <p className="text-sm text-white">Contact</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="md:text-5xl text-3xl leading-5 text-white mt-4">We would love to hear from you!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;