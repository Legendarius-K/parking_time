'use client'

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
    image: StaticImageData;
}

const Card: React.FC<CardProps> = ({ image }) => {
    // const [showOverlay, setShowOverlay] = useState(false);
    return (
        <motion.div className="relative overflow-hidden h-[200px] min-w-[200px] flex justify-center items-center">
            {/* {showOverlay && (
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
                </div>
            )} */}
            <Image src={image} alt="logo"  />
        </motion.div>
    )
};

export default Card
