import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
    const router = useRouter();
    const t = useTranslations('navigation');
    const burgerOpen = openBurger;

    const updateCloseBurger = () => {
        closeBurger();
    };

    return (
        <div className={`fixed ${burgerOpen ? 'top-[64px]' : '-top-full'} text-black max-h-[calc(100vh-70px)] overflow-auto border-t-[1px] border-neutral-400 font-nunito transition-all ease-in-out duration-700 p-6 pt-12 pb-10 flex flex-col left-0 bg-pt-primary backdrop-blur-[10px] webkit-blur-10 w-full z-20 md:hidden shadow-2xl`}>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                viewport={{ once: false }}
            >
                <Link onClick={updateCloseBurger} href="/#whyComponent" className="text-black font-light relative">{t('home')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 130 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                viewport={{ once: false }}
            >
                <Link onClick={updateCloseBurger} href="/about" className="text-black font-light relative">{t('about')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 140 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                viewport={{ once: false }}
            >
                <Link onClick={updateCloseBurger} href="/news" className="text-black font-light relative">{t('news')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                viewport={{ once: false }}
            >
                <Link onClick={updateCloseBurger} href="/#faqComponent" className="text-black font-light relative">{t('faq')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <div className="flex">
                <LanguageSelector closeSelector={burgerOpen} hamburgerMargin="mt-12" addClass="flex ml-4 mt-6 mb-4" hideContact={setHideContactBtn} />
                <p className="mt-[28px] ml-3 font-nunito font-thin text-black text-sm">{t('language')}</p>
            </div>
            <div className={`transition-all ${hideContactBtn ? 'h-56' : 'h-16'}`}>
                {!hideContactBtn && <Button closeBurger={closeBurger} route="/contact" btnText={t('contact')} colors="bg-black text-white" />}
            </div>
        </div>
    );
};

export default HamburgerMenu;
