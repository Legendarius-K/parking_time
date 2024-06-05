"use client"

import Image from "next/image";
import { motion } from "framer-motion";

interface HowBoxProps {
    srcIcon: string
    altIcon: string
    number: string
    heading: string
    text: string
}

const HowBox = ({ srcIcon, altIcon, number, heading, text }:HowBoxProps) => {
    return (
        <>
            <motion.div className="bg-white rounded-[20px] w-[100%] md:w-[29%] overflow-hidden h-full pb-6 sm:pb-3 drop-shadow-xl"
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1 
                    }
                }}
                viewport={{ once: true }}
            >
                <div className="flex relative h-[91px]">
                    <div className="m-6">
                        <Image src={srcIcon} alt={altIcon}/> 
                    </div>
                    <p className="absolute font-mono -right-6 -top-5 text-9xl font-extrabold text-pt-gray2">{number}</p>
                </div>
                <h3 className="font-bold text-3xl m-6">{heading}</h3>
                <p className="m-6 font-thin">{text}</p>
            </motion.div>   
        </>
    )
};

export default HowBox
