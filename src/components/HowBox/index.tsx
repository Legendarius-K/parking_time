"use client"

import Image from "next/image";
import { motion } from "framer-motion";

interface HowBoxProps {
    srcIcon: string
    altIcon: string
    number: string
    heading: string
    text: string
<<<<<<< HEAD
    transition: number
}

const HowBox = ({ srcIcon, altIcon, number, heading, text, transition }:HowBoxProps) => {
=======
}

const HowBox = ({ srcIcon, altIcon, number, heading, text }:HowBoxProps) => {
>>>>>>> 640b3dc7a347b1a849b7e092b4f7c43bd357dc57
    return (
        <>
            <motion.div className="bg-white rounded-[20px] w-[100%] md:w-[29%] overflow-hidden h-full pb-6 sm:pb-3 shadow-xl"
                initial={{
                    opacity: 0,
                    y: 80
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
<<<<<<< HEAD
                        duration: transition 
=======
                        duration: 1.3 
>>>>>>> 640b3dc7a347b1a849b7e092b4f7c43bd357dc57
                    }
                }}
                viewport={{ once: false }}
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
