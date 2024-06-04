'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import sweflag from '../../../public/sweflag.png'
import ContactBtnMobile from "../ContactBtnMobile";

interface HamburgerMenuProps {
    openBurger: boolean
    closeBurger: () => void
}

const HamburgerMenu = ({ openBurger, closeBurger }:HamburgerMenuProps) => {

    
    const path = usePathname();

    const burgerOpen = openBurger
    const updateCloseBurger = () => {
        closeBurger()
    }
   

    const menuItems = [
        {
            name: 'Why Parking Time?',
            link: '/'
        },
        {
            name: 'About us',
            link: '/about'
        },
        {
            name: 'News',
            link: '/news'
        },
        {
            name: 'FAQ',
            link: '/privacy'
        },

    ]

    return (
        <>
            <div className={`fixed ${burgerOpen ? 'top-20' : '-top-full'} transition-all ease-in-out duration-500 p-6 flex flex-col left-0 bg-pt-primary w-full z-20 md:hidden`}>
                {menuItems.map((item, index) => <Link onClick={closeBurger} className="text-white m-4 font-light relative " key={index} href={item.link}>{item.name}</Link>)}
                <div className="flex">
                    <div className="m-4 w-6 cursor-pointer">
                        <Image className="rounded-full" src={sweflag} alt="Swedish flag" />
                    </div>
                    <p className="my-4 text-white">Change Language</p>
                </div>
                <ContactBtnMobile btnText="Contact us" colors="bg-white text-black" />
            </div>
        </>
    )
};

export default HamburgerMenu