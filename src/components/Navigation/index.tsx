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

    const scrollToSection = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = (section: string) => async (event: React.MouseEvent) => {
        event.preventDefault();
        if (path === '/') {
            scrollToSection(section);
        } else {
            await router.push('/');
            const checkExist = setInterval(() => {
                const element = document.getElementById(section);
                if (element) {
                    scrollToSection(section);
                    clearInterval(checkExist);
                }
            }, 100); // Check every 100ms if the element is present
        }
    };

    const menuItems = [
        {
            name: t('home'),
            link: '/',
            section: 'why-component'
        },
        {
            name: t('about'),
            link: '/about',
            section: ''
        },
        {
            name: t('news'),
            link: '/news',
            section: ''
        },
        {
            name: t('faq'),
            link: '/',
            section: 'faq-component'
        },
    ];

    return (
        <>
            <nav className="items-center hidden md:flex">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        onClick={item.section ? handleScroll(item.section) : undefined}
                        className="m-4 font-nunito font-light relative hover:cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[55%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[55%] after:bottom-0 after:right-[50%]"
                    >
                        {item.name}
                    </Link>
                ))}
                <Button route="/contact" btnText={t('contact')} colors="bg-black text-white hover:bg-neutral-700" />
            </nav>
            <nav onClick={handleClick} className="md:hidden">
                <Hamburger duration={0.6} rounded color="#0B051D" toggled={isOpen} toggle={setOpen} />
            </nav>
        </>
    );
};

export default Navigation;
