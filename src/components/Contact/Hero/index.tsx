const Hero = () => {
    return (
        <>
            <div className="relative">
                <img className="h-80 w-full md:h-96" src="/Images/pink.jpeg" alt="hero picture" />
                <div className="absolute inset-0 flex flex-col items-start justify-center my-24 md:my-48 mx-4 sm:mx-10 md:mx-20">
                    <p className="text-white text-base sm:text-lg md:text-xl">Contact</p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mt-4 w-60 sm:w-80 md:w-100">We would love to hear from you!</h1>
                </div>
            </div>
        </>
    );
}

export default Hero;
