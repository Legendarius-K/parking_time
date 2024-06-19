import Image from "next/image";
<<<<<<< HEAD
import { usePathname, useRouter } from "next/navigation";
=======
import { usePathname } from "next/navigation";
>>>>>>> 640b3dc7a347b1a849b7e092b4f7c43bd357dc57
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
<<<<<<< HEAD
    const router = useRouter();
    const t = useTranslations('navigation');
=======
    const t = useTranslations('navigation')
>>>>>>> 640b3dc7a347b1a849b7e092b4f7c43bd357dc57
    const burgerOpen = openBurger;

    const updateCloseBurger = () => {
        closeBurger();
<<<<<<< HEAD
    };

    const scrollToSection = (section: string) => {
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); 
    };

    const handleScroll = (section: string) => async (event: React.MouseEvent) => {
        event.preventDefault();
        closeBurger();
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
            }, 100);
        }
    };

    return (
        <div className={`fixed ${burgerOpen ? 'top-[64px]' : '-top-full'} max-h-[calc(100vh-70px)] overflow-auto border-t-[1px] border-neutral-400 font-nunito transition-all ease-in-out duration-700 p-6 pt-12 pb-10 flex flex-col left-0 bg-pt-primary/50 backdrop-blur-[10px] webkit-blur-10 w-full z-20 md:hidden shadow-2xl`}>
            <motion.div className="m-4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                viewport={{ once: false }}
            >
                <Link onClick={handleScroll('why-component')} href="/" className="text-white font-light relative">{t('home')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                viewport={{ once: false }}
            >
                <Link onClick={updateCloseBurger} href="/about" className="text-white font-light relative">{t('about')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
                viewport={{ once: false }}
            >
                <Link onClick={updateCloseBurger} href="/news" className="text-white font-light relative">{t('news')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <motion.div className="m-4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
                viewport={{ once: false }}
            >
                <Link onClick={handleScroll('faq-component')} href="/" className="text-white font-light relative">{t('faq')}</Link>
            </motion.div>

            <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

            <div className="flex">
                <LanguageSelector closeSelector={burgerOpen} hamburgerMargin="mt-12" addClass="flex ml-4 mt-6 mb-4" hideContact={setHideContactBtn} />
                <p className="mt-[28px] ml-3 font-nunito font-thin text-white text-sm">{t('language')}</p>
            </div>
            <div className={`transition-all ${hideContactBtn ? 'h-56' : 'h-16'}`}>
                {!hideContactBtn && <Button closeBurger={closeBurger} route="/contact" btnText={t('contact')} colors="bg-white text-black" />}
            </div>
        </div>
=======
    }

    return (
        <>

            <div className={`fixed ${burgerOpen ? 'top-[64px]' : '-top-full'} border-t-[1px] border-neutral-400 font-nunito transition-all ease-in-out duration-700 p-6 pt-12 pb-10 flex flex-col left-0 bg-pt-primary/50 backdrop-blur-[10px] webkit-blur-10 w-full z-20 md:hidden shadow-2xl`}>

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

                <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

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

                <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

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

                <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

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

                <div className="h-[1px] w-3/5 bg-neutral-400 opacity-60"></div>

                <div className="flex">
                    <LanguageSelector closeSelector={burgerOpen} hamburgerMargin="mt-12" addClass="flex ml-4 mt-6 mb-4" hideContact={setHideContactBtn} />
                    <p className="mt-[28px] ml-3 font-nunito font-thin text-white text-sm">{t('language')}</p>
                </div>
                <div className={`transition-all ${hideContactBtn ? 'h-56' : 'h-16'}`}>
                    {!hideContactBtn && <Button closeBurger={closeBurger} route="/contact" btnText={t('contact')} colors="bg-white text-black" />}
                </div>
            </div>
        </>
>>>>>>> 640b3dc7a347b1a849b7e092b4f7c43bd357dc57
    );
};

export default HamburgerMenu;
