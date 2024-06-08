// HamburgerMenu.tsx
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import LanguageSelector from "../LanguageSelector";

interface HamburgerMenuProps {
    openBurger: boolean;
    closeBurger: () => void;
}

const HamburgerMenu = ({ openBurger, closeBurger }: HamburgerMenuProps) => {
    const [hideContactBtn, setHideContactBtn] = useState(false);
    const path = usePathname();
    const burgerOpen = openBurger;

    const updateCloseBurger = () => {
        closeBurger();
    }

    const menuItems = [
        {
            name: 'Why Parking Time?',
            link: '/' //scroll to why component
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
            link: '/' //scroll to faq component
        },
    ];

    return (
        <>
            <div className={`fixed ${burgerOpen ? 'top-20' : '-top-[335px]'} transition-all ease-in-out duration-500 p-6 flex flex-col left-0 bg-pt-primary w-full z-20 md:hidden`}>
                {menuItems.map((item, index) => (
                    <motion.div key={index} className="m-4"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 + index * 0.1 } }}
                        viewport={{ once: false }}
                    >
                        <Link onClick={updateCloseBurger} href={item.link} className="text-white font-light relative">{item.name}</Link>
                    </motion.div>
                ))}
                <LanguageSelector closeSelector={burgerOpen} hamburgerMargin="mt-10" hideClass="flex ml-4 mt-6 mb-4" hideContact={setHideContactBtn} />
                {!hideContactBtn && <Button closeBurger={closeBurger} route="/contact" btnText="Contact us" colors="bg-white text-black" />}
            </div>
        </>
    );
};

export default HamburgerMenu;
