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

            {/* <div className={`fixed ${burgerOpen ? 'top-20' : '-top-[345px]'} transition-all ease-in-out duration-500 p-6 flex flex-col left-0 bg-pt-primary w-full z-20 md:hidden`}>
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
======= */}



            <div className={`fixed ${burgerOpen ? 'top-[64px]' : '-top-full'} border-t-[1px] border-grey font-nunito transition-all ease-in-out duration-700 p-6 pt-16 pb-10 flex flex-col left-0 bg-pt-primary/50 backdrop-blur-[10px] webkit-blur-10 w-full z-20 md:hidden shadow-2xl`}>

                <motion.div className="m-4"

                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.4
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <Link onClick={updateCloseBurger} href={'/'} className="text-white  font-light relative ">{t('home')}</Link>
                </motion.div>

                <div className="h-[0.7px] w-3/5 bg-neutral-400 opacity-60"></div>

                <motion.div className="m-4"

                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <Link onClick={updateCloseBurger} href={'/about'} className="text-white  font-light relative ">{t('about')}</Link>
                </motion.div>

                <div className="h-[0.7px] w-3/5 bg-neutral-400 opacity-60"></div>

                <motion.div className="m-4"

                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.7
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <Link onClick={updateCloseBurger} href={'/news'} className="text-white  font-light relative ">{t('news')}</Link>
                </motion.div>

                <div className="h-[0.7px] w-3/5 bg-neutral-400 opacity-60"></div>

                <motion.div className="m-4"

                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.9
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <Link onClick={updateCloseBurger} href={'/'} className="text-white  font-light relative ">{t('faq')}</Link>
                </motion.div>

                <div className="h-[0.7px] w-3/5 bg-neutral-400 opacity-60"></div>

                <div className="flex">
                    <LanguageSelector closeSelector={burgerOpen} hamburgerMargin="mt-12" addClass="flex ml-4 mt-6 mb-4" hideContact={setHideContactBtn} />
                    <p className="mt-[28px] ml-3 font-nunito font-thin text-white text-sm">{t('language')}</p>
                </div>
                <div className={`transition-all ${hideContactBtn ? 'h-56' : 'h-16'}`}>
                    {!hideContactBtn && <Button closeBurger={closeBurger} route="/contact" btnText={t('contact')} colors="bg-white text-black" />}
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
