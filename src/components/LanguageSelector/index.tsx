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

interface LanguageSelectorProps {
    hideClass: string;
    hamburgerMargin?: string;
    closeSelector: boolean;
    hideContact?: (hide: boolean) => void;
}

export default function LanguageSelector({ hideClass, hamburgerMargin, closeSelector, hideContact }: LanguageSelectorProps) {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

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
                width: open ? 150 : 0,
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

        // Extract the current locale from the URL
        const pathSegments = currentPath.split('/');
        if (pathSegments.length > 1 && pathSegments[1].length === 2) {
            // Remove the current locale segment
            pathSegments[1] = value;
        } else {
            // Add the new locale segment
            pathSegments.splice(1, 0, value);
        }

        const newPath = pathSegments.join('/');
        const newUrl = `${newPath}${currentSearchParams ? `?${currentSearchParams}` : ''}`;

        router.replace(newUrl);
        setOpen(false);
    };

    return (
        <div className={`App z-50 ${hideClass}`} ref={scope}>
            <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} className="flex justify-center items-center">
                <div className={`w-7 cursor-pointer flex`}>
                    <Image className="rounded-full w-8" src={sweflag} alt="Swedish flag" />
                </div>
            </motion.button>
            <section className={`flex flex-col justify-evenly absolute max-w-24 rounded-lg p-2 shadow-2xl min-h-fit bg-pt-background ${hamburgerMargin}`}>
                <li onClick={() => handleItemClick('se')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={sweflag} alt="Swedish flag" />
                    <p>Sv</p>
                </li>
                <li onClick={() => handleItemClick('en')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={engflag} alt="English flag" />
                    <p>En</p>
                </li>
                <li onClick={() => handleItemClick('no')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={norflag} alt="Norwegian flag" />
                    <p>No</p>
                </li>
                <li onClick={() => handleItemClick('da')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={denflag} alt="Danish flag" />
                    <p>Da</p>
                </li>
                <li onClick={() => handleItemClick('fi')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={fiflag} alt="Finnish flag" />
                    <p>Fi</p>
                </li>
                <li onClick={() => handleItemClick('de')} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={gerflag} alt="German flag" />
                    <p>De</p>
                </li>
            </section>
        </div>
    );
}
