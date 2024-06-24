'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import ptLogo from '../../../public/Logotype-1.svg';
import Navigation from "../Navigation";
import HamburgerMenu from "../HamburgerMenu";
import { Link } from "@/navigation";
import LanguageSelector from "../LanguageSelector";
import useWindowSize from "@/hooks/useWindowSize";

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [initialScrollY, setInitialScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hideThreshold, setHideThreshold] = useState(0);
    const [showThreshold, setShowThreshold] = useState(0);

    const windowSize = useWindowSize();

    const handleClick = () => {
        setBurgerOpen(!burgerOpen);
        setInitialScrollY(window.scrollY);
    };

    const closeBurger = () => {
        setBurgerOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (windowSize.width && windowSize.width > 959) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setIsHeaderVisible(true);
                return;
            }

            if (burgerOpen && Math.abs(currentScrollY - initialScrollY) >25) {
                setBurgerOpen(false);
            }

            if (currentScrollY > lastScrollY) {
                setHideThreshold(prevThreshold => prevThreshold + currentScrollY - lastScrollY);
                setShowThreshold(0);
            } else {
                setShowThreshold(prevThreshold => prevThreshold + lastScrollY - currentScrollY);
                setHideThreshold(0);
            }

            if (hideThreshold > 100) {
                setIsHeaderVisible(false);
            } else if (showThreshold > 1) {
                setIsHeaderVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [burgerOpen, initialScrollY, lastScrollY, hideThreshold, showThreshold, windowSize.width]);

    return (
        <>
            <header className={`md:h-20 h-16 bg-pt-primary md:bg-pt-primary flex items-center justify-between px-6 md:px-20 fixed top-0 left-0 w-full md:relative z-40 ${!burgerOpen ? 'shadow-md' : ''} backdrop-blur-[18px] webkit-blur-10 transition-transform duration-500 ${isHeaderVisible ? 'transform-none' : '-translate-y-full'}`}>
                <div className="w-16">
                    <Link href="/">
                        <Image src={ptLogo} alt="image" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Navigation openBurger={handleClick} updateIsOpen={burgerOpen} />
                    <LanguageSelector closeSelector={burgerOpen} addClass="ml-3 hidden md:block" hamburgerMargin="mt-2" />
                </div>
            </header>
            <HamburgerMenu openBurger={burgerOpen} closeBurger={closeBurger} />
            <div onClick={handleClick} className={`${burgerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed bg-gray-900/50 backdrop-blur-[3px] webkit-blur-3 transition-all duration-400 OVERLAY z-10 top-0 left-0 w-full h-full`}></div>
        </>
    );
};

export default Header;
