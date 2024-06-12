const Download = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row ml-[5%] md:ml-[17%] mt-[8%] items-start">
                <div className="order-1 md:order-2 mb-8 md:mb-[8%] md:ml-[7%] flex justify-center items-center w-11/12 md:w-auto">
                    <img src="/iphone.svg" alt="hand with iphone" className="w-full md:max-h-[80vh]" />
                </div>
                <div className="order-2 md:order-1 flex flex-col max-w-lg w-full md:w-auto">
                    <h1 className="text-5xl mt-5 md:mt-[5%]">Download now</h1>
                    <p className="font-nunito font-thin w-full md:w-[80%] leading-loose mt-5">
                        The app is free to download for you as a user. However, your municipality must be registered as a customer with us for our app to be valid in your area. If our app is not available in your municipality, you are welcome to contact us or suggest us to your municipality!
                    </p>
                    <div className="flex mt-5 mb:[2%] md:mb-0">
                        <img className="mr-2" src="/appstore.svg" alt="appstore download logo" />
                        <img src="/googlestore.svg" alt="googleplay download logo" />
                    </div>
                    <div className="mt-5 hidden md:block">
                        <img src="/QR.svg" alt="QR kod" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Download;
