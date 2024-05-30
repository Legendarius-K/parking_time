'use client'

import Image from "next/image";
import ptLogo from '../../../public/pt-logo.png'
import sweflag from '../../../public/sweflag.png'
import Navigation from "../Navigation";
import HamburgerMenu from "../HamburgerMenu";
import { useState } from "react";

const Header = () => {

    const [burgerOpen, setBurgerOpen] = useState(false)

    const handleClick = () => {
        setBurgerOpen(!burgerOpen)
    }

    console.log(burgerOpen);

    return (
        <>
        <header className="h-20 bg-pt-primary flex items-center justify-between px-8 lg:px-20 fixed top-0 left-0 w-full md:relative z-30">
            <div className="w-16">
                <a href="/">
                    <Image src={ptLogo} alt="image" />
                </a>
            </div>
            <div className="flex items-center">
                <Navigation openBurger={handleClick}/>
                <div className="w-6 cursor-pointer hidden md:block">
                    <Image className="rounded-full" src={sweflag} alt="Swedish flag" />
                </div>
            </div>
        </header>
            <HamburgerMenu openBurger={burgerOpen}/>
            <div onClick={handleClick} className={`${burgerOpen ? 'fixed' : 'hidden'} OVERLAY top-0 left-0 w-full h-full`}></div>
        </>
    )
};

export default Header
 