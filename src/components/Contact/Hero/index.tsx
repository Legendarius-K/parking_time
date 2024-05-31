const Hero = () => {
    return (
        <>
        <div>
            <img className="h-80 w-full" src="/Images/pink.jpeg" alt="hero picture" />
        <div className="absolute inset-0 flex-col items-center justify-center my-48 mx-20">
            <p className="text-white">Contact</p>
            <h1 className="text-4xl text-white w-80 mt-4">We would love to hear from you!</h1>
        </div>
        </div>
        </>
    );
}

export default Hero;