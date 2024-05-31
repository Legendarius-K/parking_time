import Image from "next/image";
import ptLogo from '../../../public/pt-logo.png'
import instagramIcon from '../../../public/Instagram.svg'
import linkedInIcon from '../../../public/LinkedIn.svg'

const Footer = () => {
    return (
        <footer className="py-12 px-8 md:p-20 bg-pt-primary text-white gap-12 md:gap-5 flex flex-col">
            <div className="flex justify-between flex-col gap-8 md:flex-row">
                <div className="flex gap-8 flex-col md:flex-row">
                    <a href="/" className="h-auto w-20">
                        <Image src={ptLogo} alt="image" />
                    </a>
                    <div className="flex flex-col">
                        <p className="font-bold text-lg">Adress:</p>
                        <p className="font-normal">Nyköpingsvägen 52 | 611 50</p>
                        <p className="font-normal">NYKÖPING</p>
                        </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-lg">Contact:</p>
                        <p className="text-base font-normal">+46 72 722 44 00</p>
                        <p className="">info@parkingtime.se</p>
                        <div className="flex gap-3">
                            <a href="/">
                                <Image src={instagramIcon} alt="image" />
                            </a>
                            <a href="/">
                                <Image src={linkedInIcon} alt="image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="font-bold text-lg">links</div>
                    <div className="flex gap-6">
                        <a href="/contact">
                            <p className="underline">Contact</p>
                        </a>
                        <a href="/about">
                            <p className="underline">About us</p>
                        </a>
                        <a href="/news">
                            <p className="underline">News</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-solid border-0 border-t">
                <div className="flex flex-col md:flex-row gap-6 justify-between pt-6">
                    <div className="text-sm">© 2024 Parking Time AB</div>

                    <a href="/" className="underline">privacy policy</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer
