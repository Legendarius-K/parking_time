'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import ptLogo from '../../../public/Logotype-1.svg';
import Navigation from "../Navigation";
import HamburgerMenu from "../HamburgerMenu";
import { Link } from "@/navigation";
import LanguageSelector from "../LanguageSelector";

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
            if (burgerOpen && Math.abs(currentScrollY - initialScrollY) > 100) {
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
            <header className=" md:h-20 h-16 bg-pt-primary/50 md:bg-pt-primary flex items-center justify-between px-8 lg:px-20 fixed top-0 left-0 w-full md:relative z-40 backdrop-blur-[5px] webkit-blur-5">
                <div className="w-16">
                    <Link href="/">
                        <Image src={ptLogo} alt="image" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Navigation openBurger={handleClick} updateIsOpen={burgerOpen} />
                    <LanguageSelector closeSelector={burgerOpen} addClass="ml-3 hidden md:block" hamburgerMargin="mt-2"/>
                </div>
            </header>
            <HamburgerMenu openBurger={burgerOpen} closeBurger={closeBurger} />
            <div onClick={handleClick} className={`${burgerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed bg-gray-900/50 backdrop-blur-[3px] webkit-blur-3 transition-all duration-400 OVERLAY z-10 top-0 left-0 w-full h-full`}></div>
        </>
    );
};

export default Header;
