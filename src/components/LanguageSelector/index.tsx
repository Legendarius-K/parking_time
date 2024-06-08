// LanguageSelector.tsx
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";
import sweflag from '../../../public/flags/sweflag.png';
import norflag from '../../../public/flags/norflag.png';
import denflag from '../../../public/flags/denflag.png';
import fiflag from '../../../public/flags/fiflag.png';
import gerflag from '../../../public/flags/gerflag.png';
import engflag from '../../../public/flags/engflag.png';

interface LanguageSelectorProps {
    hideClass: string;
    hamburgerMargin?: string;
    closeSelector: boolean;
    hideContact?: (hide: boolean) => void;  // Changed to a function
}

export default function LanguageSelector({ hideClass, hamburgerMargin, closeSelector, hideContact }: LanguageSelectorProps) {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    useEffect(() => {
        setOpen(closeSelector && false);
    }, [closeSelector]);

    useEffect(() => {
        hideContact?.(open);
    }, [open, hideContact]);  // Update the parent's state when open changes

    // the stagger effect
    const staggerList = stagger(0.1, { startDelay: 0.25 });

    // create the animations that will be applied
    // whenever the open state is toggled
    useEffect(() => {
        animate(
            "ul",
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

    return (
        <div className={`App z-50 ${hideClass}`} ref={scope}>
            <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} className="flex justify-center items-center">
                <div className={`"w-7 cursor-pointer flex"`}>
                    <Image className="rounded-full w-8" src={sweflag} alt="Swedish flag" />
                </div>
            </motion.button>
            <ul className={`flex flex-col justify-evenly absolute max-w-24 rounded-lg p-2 shadow-2xl mt-2 min-h-fit bg-pt-background ${hamburgerMargin}`}>
                <li onClick={() => setOpen(!open)} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={sweflag} alt="Swedish flag" />
                    <p>Sv</p>
                </li>
                <li onClick={() => setOpen(!open)} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={engflag} alt="English flag" />
                    <p>En</p>
                </li>
                <li onClick={() => setOpen(!open)} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={norflag} alt="Norwegian flag" />
                    <p>No</p>
                </li>
                <li onClick={() => setOpen(!open)} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={denflag} alt="Danish flag" />
                    <p>Da</p>
                </li>
                <li onClick={() => setOpen(!open)} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={fiflag} alt="Finnish flag" />
                    <p>Fi</p>
                </li>
                <li onClick={() => setOpen(!open)} className="w-7 m-1 cursor-pointer flex items-center">
                    <Image className="rounded-full mr-3" src={gerflag} alt="German flag" />
                    <p>De</p>
                </li>

            </ul>
        </div>
    );
}
