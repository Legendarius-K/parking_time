import Image from "next/image";
import ptLogo from '../../../public/pt-logo.png'
import Navigation from "../Navigation";

const Header = () => {
    return (
        <header className="h-20 bg-pt-primary flex items-center justify-between px-20">
            <div className="w-16">
                <Image src={ptLogo} alt="image" />
            </div>
            <div className="flex items-center">
                <Navigation />
                <div className="text-white">
                    en
                </div>
            </div>
        </header>
    )
};

export default Header
