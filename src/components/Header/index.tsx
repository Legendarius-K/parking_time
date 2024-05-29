import Image from "next/image";
import ptLogo from '../../../public/pt-logo.png'
import sweflag from '../../../public/sweflag.png'
import Navigation from "../Navigation";

const Header = () => {
    return (
        <header className="h-20 bg-pt-primary flex items-center justify-between px-8 lg:px-20 relative top-0 left-0 w-full md:relative z-30">
            <div className="w-16">
                <a href="/">
                    <Image src={ptLogo} alt="image" />
                </a>
            </div>
            <div className="flex items-center">
                <Navigation />
                <div className="w-6 cursor-pointer hidden md:block">
                    <Image className="rounded-full" src={sweflag} alt="Swedish flag" />
                </div>
            </div>
        </header>
    )
};

export default Header
 