'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactBtn from "../ContactBtn";

const Navigation = () => {

    const path = usePathname();

    const menuItems = [
        {
            name: 'Why Parking Time?',
            link: '/'
        },
        {
            name: 'About Us',
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
        <nav className="flex items-center">
            {menuItems.map((item, index) => <Link className="text-white m-4 font-light" key={index} href={item.link}>{item.name}</Link>)}
            <ContactBtn btnText="Contact Us" colors="bg-white text-black" />
        </nav>
    )
};

export default Navigation
