'use client'

import Hamburger from "hamburger-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactBtn from "../ContactBtn";
import { useState } from "react";
import sweflag from '../../../public/sweflag.png'
import ContactBtnMobile from "../ContactBtnMobile";

const Navigation = () => {

    const [isOpen, setOpen] = useState(false)
    const [burgerOpen, setBurgerOpen] = useState(false)
    const path = usePathname();

    const handleClick = () => {
        setBurgerOpen(!burgerOpen)
    }

    console.log(burgerOpen);

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
            <nav className=" items-center hidden md:flex">
                {menuItems.map((item, index) => <Link className="text-white m-4 font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" key={index} href={item.link}>{item.name}</Link>)}
                <ContactBtn btnText="Contact Us" colors="bg-white text-black hover:bg-pt-gray1 hover:text-white" />
            </nav>
            <nav onClick={handleClick} className="md:hidden">
                <Hamburger rounded color="#fff" toggled={isOpen} toggle={setOpen} />
            </nav>
            <div className={`absolute ${burgerOpen ? 'top-full' : 'top-full'} p-6 flex flex-col left-0 bg-rose-500 w-full z-20 md:hidden`}>
                {menuItems.map((item, index) => <Link className="text-white m-4 font-light relative " key={index} href={item.link}>{item.name}</Link>)}
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

export default Navigation
