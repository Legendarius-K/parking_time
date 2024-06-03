'use client'

import Hamburger from "hamburger-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactBtn from "../ContactBtn";
import { useEffect, useState } from "react";
import sweflag from '../../../public/sweflag.png'
import ContactBtnMobile from "../ContactBtnMobile";
import { useTranslations } from "next-intl";

interface NavigationProps {
    openBurger: () => void
    updateIsOpen: boolean
}

const Navigation = ({ openBurger, updateIsOpen }:NavigationProps) => {
    const t = useTranslations('navigation')

    const [isOpen, setOpen] = useState(false)
    const path = usePathname();

    useEffect(() => {
        updateIsOpen ? setOpen(true) : setOpen(false);
    },[updateIsOpen])
    

    const handleClick = () => {
        openBurger()
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
            <nav className=" items-center hidden md:flex">
                <Link href={'/'} >{t('home')}</Link>
                {menuItems.map((item, index) => <Link className="text-white m-4 font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" key={index} href={item.link}>{item.name}</Link>)}
                <ContactBtn btnText="Contact Us" colors="bg-white text-black hover:bg-pt-gray1 hover:text-white" />
            </nav>
            <nav onClick={handleClick} className="md:hidden">
                <Hamburger duration={0.6} rounded color="#fff" toggled={isOpen} toggle={setOpen} />
            </nav>
        </>
    )
};

export default Navigation