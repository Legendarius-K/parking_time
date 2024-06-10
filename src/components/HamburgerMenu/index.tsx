import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";

interface HamburgerMenuProps {
    openBurger: boolean;
    closeBurger: () => void;
}

const HamburgerMenu = ({ openBurger, closeBurger }: HamburgerMenuProps) => {
    const [hideContactBtn, setHideContactBtn] = useState(false);
    const path = usePathname();
    const t = useTranslations('navigation')
    const burgerOpen = openBurger;

    const updateCloseBurger = () => {
        closeBurger();
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
    ];

    return (
        <>
            <div className={`fixed ${burgerOpen ? 'top-20' : '-top-[345px]'} transition-all ease-in-out duration-500 p-6 flex flex-col left-0 bg-pt-primary w-full z-20 md:hidden`}>
                {menuItems.map((item, index) => (
                    <motion.div key={index} className="m-4"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 + index * 0.1 } }}
                        viewport={{ once: false }}
                    >
                        <Link onClick={updateCloseBurger} href={item.link} className="text-white font-light relative">{item.name}</Link>
                    </motion.div>
                ))}
                <div className="flex">
                <LanguageSelector closeSelector={burgerOpen} hamburgerMargin="mt-12" addClass="flex ml-4 mt-6 mb-4" hideContact={setHideContactBtn} />
                <p className="mt-[28px] ml-3 font-nunito font-thin text-white text-sm">{t('language')}</p>
                </div>
                <div className={`transition-all ${hideContactBtn ? 'h-56' : 'h-20'}`}>
                    {!hideContactBtn && <Button closeBurger={closeBurger} route="/contact" btnText={t('contact')} colors="bg-white text-black" />}
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
