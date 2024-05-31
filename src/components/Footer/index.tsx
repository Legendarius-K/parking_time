

const Footer = () => {
    return (
        <footer className="p-20 bg-pt-primary text-white gap-5 flex flex-col">
            <div className="flex justify-between">
                <div className="flex gap-16">
                    <div className="">icon</div>
                    <div className="flex-col">
                        <p className="">adress</p>
                        <p className="">Nyköpingsvägen 52 | 611 50 NYKÖPING</p>
                        </div>
                    <div className="flex-col">
                        <p className="">contact</p>
                        <p className="">+46 72 722 44 00 info@parkingtime.se</p>
                    </div>
                </div>
                <div className="flex-col ">
                    <div className="">links</div>
                    <div className="flex gap-6">
                        <p className="">Contact</p>
                        <p className="">About us</p>
                        <p className="">News</p>
                    </div>
                </div>
            </div>
            <div className="border-solid border-0 border-t">
                <div className="flex justify-between">
                    <div className="">copyright</div>
                    <div className="">privacy policy</div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
