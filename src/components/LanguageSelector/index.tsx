'use client'

import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";
import sweflag from '../../../public/flags/sweflag.png';
import norflag from '../../../public/flags/norflag.png';
import denflag from '../../../public/flags/denflag.png';
import fiflag from '../../../public/flags/fiflag.png';
import gerflag from '../../../public/flags/gerflag.png';
import engflag from '../../../public/flags/engflag.png';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

interface LanguageSelectorProps {
    addClass: string;
    hamburgerMargin?: string;
    closeSelector: boolean;
    hideContact?: (hide: boolean) => void;
}

export default function LanguageSelector({ addClass, hamburgerMargin, closeSelector, hideContact }: LanguageSelectorProps) {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const searchParams = useSearchParams();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        setOpen(closeSelector && false);
    }, [closeSelector]);

    useEffect(() => {
        hideContact?.(open);
    }, [open, hideContact]);

    const staggerList = stagger(0.1, { startDelay: 0.25 });

    useEffect(() => {
        animate(
            "section",
            {
                width: open ? 100 : 0,
                height: open ? 232 : 0,
                opacity: open ? 1 : 0,
                display: open ? 'flex' : 'none'
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.4
            }
        );
        animate(
            "li",
            open
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.3, x: -50 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0
            }
        );
    }, [open]);

    const handleItemClick = (value: string) => {
        const currentPath = pathname || "/";
        const currentSearchParams = searchParams.toString();

        const pathSegments = currentPath.split('/');
        if (pathSegments.length > 1 && pathSegments[1].length === 2) {
            pathSegments[1] = value;
        } else {
            pathSegments.splice(1, 0, value);
        }

        const newPath = pathSegments.join('/');
        const newUrl = `${newPath}${currentSearchParams ? `?${currentSearchParams}` : ''}`;

        router.replace(newUrl);
        setOpen(false);
    };



    return (
        <div ref={dropdownRef}>
            <div className={`App z-50 ${addClass}`} ref={scope}>
                <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 1.3 }} className="flex justify-center items-center">
                    <div className={`w-7 cursor-pointer flex hover:border-neutral-300 hover:border-[2px] rounded-full`}>
                        {locale === 'se' && <Image className="rounded-full w-8" src={sweflag} alt="Swedish flag" />}
                        {locale === 'en' && <Image className="rounded-full w-8" src={engflag} alt="English flag" />}
                        {locale === 'no' && <Image className="rounded-full w-8" src={norflag} alt="Norwegian flag" />}
                        {locale === 'de' && <Image className="rounded-full w-8" src={gerflag} alt="German flag" />}
                        {locale === 'da' && <Image className="rounded-full w-8" src={denflag} alt="Danish flag" />}
                        {locale === 'fi' && <Image className="rounded-full w-8" src={fiflag} alt="Finnish flag" />}
                    </div>
                </motion.button>
                <section
                    className={`hidden h-0 flex-col justify-evenly absolute min-w-[82%] sm:min-w-[90%]  md:min-w-[30px] rounded-lg p-2 shadow-2xl min-h-fit bg-pt-background overflow-hidden ${hamburgerMargin}`}
                >
                    <li onClick={() => handleItemClick('se')} className="w-7 m-1 cursor-pointer flex items-center hover:ml-2 transition-all">
                        <Image className="rounded-full" src={sweflag} alt="Swedish flag" />
                        <p className="pl-3">SV</p>
                    </li>
                    <li onClick={() => handleItemClick('en')} className="w-7 m-1 cursor-pointer flex items-center hover:ml-2 transition-all">
                        <Image className="rounded-full" src={engflag} alt="English flag" />
                        <p className="pl-3">EN</p>
                    </li>
                    <li onClick={() => handleItemClick('no')} className="w-7 m-1 cursor-pointer flex items-center hover:ml-2 transition-all">
                        <Image className="rounded-full" src={norflag} alt="Norwegian flag" />
                        <p className="pl-3">NO</p>
                    </li>
                    <li onClick={() => handleItemClick('da')} className="w-7 m-1 cursor-pointer flex items-center hover:ml-2 transition-all">
                        <Image className="rounded-full" src={denflag} alt="Danish flag" />
                        <p className="pl-3">DA</p>
                    </li>
                    <li onClick={() => handleItemClick('fi')} className="w-7 m-1 cursor-pointer flex items-center hover:ml-2 transition-all">
                        <Image className="rounded-full" src={fiflag} alt="Finnish flag" />
                        <p className="pl-3">FI</p>
                    </li>
                    <li onClick={() => handleItemClick('de')} className="w-7 m-1 cursor-pointer flex items-center hover:ml-2 transition-all">
                        <Image className="rounded-full" src={gerflag} alt="German flag" />
                        <p className="pl-3">DE</p>
                    </li>
                </section>
            </div>
        </div>
    );
}
