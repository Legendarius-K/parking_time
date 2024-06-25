'use client'

import Hamburger from 'hamburger-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '../Button';
import { Link } from '@/navigation';

interface NavigationProps {
    openBurger: () => void;
    updateIsOpen: boolean;
}

const Navigation = ({ openBurger, updateIsOpen }: NavigationProps) => {
    const [isOpen, setOpen] = useState(false);
    const path = usePathname();
    const router = useRouter();
    const t = useTranslations('navigation');

    useEffect(() => {
        updateIsOpen ? setOpen(true) : setOpen(false);
    }, [updateIsOpen]);

    const handleClick = () => {
        openBurger();
    };
    
    return (
        <>
            <nav className="items-center hidden md:flex">
                <Link
                    href="/#whyComponent"
                    className="text-white m-4 font-nunito font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]"
                >
                    {t('home')}
                </Link>
                <Link
                    href="/about"
                    className="text-white m-4 font-nunito font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]"
                >
                    {t('about')}
                </Link>
                <Link
                    href="/news"
                    className="text-white m-4 font-nunito font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]"
                >
                    {t('news')}
                </Link>
                <Link
                    href="/#faqComponent"
                    className="text-white m-4 font-nunito font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]"
                >
                    {t('faq')}
                </Link>
                <Button route="/contact" btnText={t('contact')} colors="bg-white text-black hover:bg-gray-300" />
            </nav>
            <nav onClick={handleClick} className="md:hidden">
                <Hamburger duration={0.6} rounded color="#fff" toggled={isOpen} toggle={setOpen} />
            </nav>
        </>
    );
};

export default Navigation;
