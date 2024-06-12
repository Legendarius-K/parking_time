'use client'

import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useTranslations, useLocale } from "next-intl";

interface NavigationProps {
    openBurger: () => void
    updateIsOpen: boolean
}

const Navigation = ({ openBurger, updateIsOpen }: NavigationProps) => {

    const [isOpen, setOpen] = useState(false)
    const path = usePathname();
    const t = useTranslations('navigation');

    useEffect(() => {
        updateIsOpen ? setOpen(true) : setOpen(false);
    }, [updateIsOpen])


    const handleClick = () => {
        openBurger()
    }


    const menuItems = [
        {
            name: t('home'),
            link: '/' //Should lead to home and scroll to why-component
        },
        {
            name: t('about'),
            link: '/about'
        },
        {
            name: t('news'),
            link: '/news'
        },
        {
            name: t('faq'),
            link: '/' //Should lead to home and scroll to faq-component
        },

    ]

    return (
        <>
            <nav className=" items-center hidden md:flex">
                {menuItems.map((item, index) => <Link className="text-white m-4 font-nunito font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]" key={index} href={item.link}>{item.name}</Link>)}
                <Button route="/contact" btnText={t('contact')} colors="bg-white text-black hover:bg-gray-300" />
            </nav>
            <nav onClick={handleClick} className="md:hidden">
                <Hamburger duration={0.6} rounded color="#fff" toggled={isOpen} toggle={setOpen} />
            </nav>
        </>
    )
};

export default Navigation 
