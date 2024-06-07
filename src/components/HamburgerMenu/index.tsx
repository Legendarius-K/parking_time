'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import sweflag from '../../../public/sweflag.png'
import Button from "../Button";
import { motion } from "framer-motion";

interface HamburgerMenuProps {
    openBurger: boolean
    closeBurger: () => void
}

const HamburgerMenu = ({ openBurger, closeBurger }: HamburgerMenuProps) => {


    const path = usePathname();

    const burgerOpen = openBurger
    const updateCloseBurger = () => {
        closeBurger()
    }


    const menuItems = [
        {
            name: 'Why Parking Time?',
            link: '/' //scroll to why component
        },
        {
            name: 'About us',
            link: '/about'
        },
        {
            name: 'News',
            link: '/news'
        },
        {
            name: 'FAQ',
            link: '/' //scroll to faq component
        },

    ]

    return (
        <>
            <div className={`fixed ${burgerOpen ? 'top-[62.9px]' : '-top-full'} border-t-[2px] border-grey font-nunito transition-all ease-in-out duration-700 p-6 pt-16 pb-10 flex flex-col left-0 bg-pt-primary/50 backdrop-blur-[10px] webkit-blur-10 w-full z-20 md:hidden`}>

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
                    <Link onClick={updateCloseBurger} href={'/'} className="text-white  font-light relative ">Varför Parking Time?</Link>
                </motion.div>

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
                    <Link onClick={updateCloseBurger} href={'/about'} className="text-white  font-light relative ">Om oss</Link>
                </motion.div>

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
                    <Link onClick={updateCloseBurger} href={'/news'} className="text-white  font-light relative ">Nyheter</Link>
                </motion.div>

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
                    <Link onClick={updateCloseBurger} href={'/'} className="text-white  font-light relative ">FAQ</Link>
                </motion.div>

                <div className="flex mt-4">
                    <div className="m-4 w-6 cursor-pointer">
                        <Image className="rounded-full" src={sweflag} alt="Swedish flag" />
                    </div>
                    <p className="my-4 text-white">Change Language</p>
                </div>
                <Button closeBurger={closeBurger} route="/contact" btnText="Contact us" colors="bg-white text-black" />
            </div>
        </>
    )
};

export default HamburgerMenu