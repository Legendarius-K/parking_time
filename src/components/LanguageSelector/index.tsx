'use client'

import { useState, useEffect } from "react";
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

    console.log(locale);

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
                opacity: open ? 1 : 0
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
        <div className={`App z-50 ${addClass}`} ref={scope}>
            <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} className="flex justify-center items-center">
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
                className={`flex flex-col justify-evenly absolute min-w-[90%] md:min-w-[30px] rounded-lg p-2 shadow-2xl min-h-fit bg-pt-background overflow-hidden ${hamburgerMargin}`}
                style={{ width: 0, height: 0, opacity: 0 }}
            >
                <li onClick={() => handleItemClick('se')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full hover:border-neutral-600 hover:border-[2px]" src={sweflag} alt="Swedish flag" />
                    <p className="pl-3">SV</p>
                </li>
                <li onClick={() => handleItemClick('en')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full hover:border-neutral-600 hover:border-[2px]" src={engflag} alt="English flag" />
                    <p className="pl-3">EN</p>
                </li>
                <li onClick={() => handleItemClick('no')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full hover:border-neutral-600 hover:border-[2px]" src={norflag} alt="Norwegian flag" />
                    <p className="pl-3">NO</p>
                </li>
                <li onClick={() => handleItemClick('da')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full hover:border-neutral-600 hover:border-[2px]" src={denflag} alt="Danish flag" />
                    <p className="pl-3">DA</p>
                </li>
                <li onClick={() => handleItemClick('fi')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full hover:border-neutral-600 hover:border-[2px]" src={fiflag} alt="Finnish flag" />
                    <p className="pl-3">FI</p>
                </li>
                <li onClick={() => handleItemClick('de')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full hover:border-neutral-600 hover:border-[2px]" src={gerflag} alt="German flag" />
                    <p className="pl-3">DE</p>
                </li>
            </section>
        </div>
    );
}
