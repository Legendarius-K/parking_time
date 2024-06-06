'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import ptLogo from '../../../public/Logotype-1.svg';
import sweflag from '../../../public/sweflag.png';
import Navigation from "../Navigation";
import HamburgerMenu from "../HamburgerMenu";
import { Link } from "@/navigation";

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [initialScrollY, setInitialScrollY] = useState(0);

    const handleClick = () => {
        setBurgerOpen(!burgerOpen);
        setInitialScrollY(window.scrollY); 
    };

    const closeBurger = () => {
        setBurgerOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (burgerOpen && Math.abs(currentScrollY - initialScrollY) > 200) {
                setBurgerOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [burgerOpen, initialScrollY]);

    return (
        <>
            <header className="h-20 bg-pt-primary flex items-center justify-between px-8 lg:px-20 fixed top-0 left-0 w-full md:relative z-30">
                <div className="w-16">
                    <Link href="/">
                        <Image src={ptLogo} alt="image" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Navigation openBurger={handleClick} updateIsOpen={burgerOpen} />
                    <div className="w-6 cursor-pointer hidden md:block">
                        <Image className="rounded-full" src={sweflag} alt="Swedish flag" />
                    </div>
                </div>
            </header>
            <HamburgerMenu openBurger={burgerOpen} closeBurger={closeBurger} />
            <div onClick={handleClick} className={`${burgerOpen ? 'fixed' : 'hidden'} OVERLAY top-0 left-0 w-full h-full z-10`}></div>
        </>
    );
};

export default Header;
