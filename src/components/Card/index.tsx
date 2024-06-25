'use client'

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
    image: StaticImageData;
}

const Card: React.FC<CardProps> = ({ image }) => {
    return (
        <motion.div className="relative overflow-hidden h-[200px] min-w-[200px] flex justify-center items-center">
            <Image src={image} alt="logo"  />
        </motion.div>
    )
};

export default Card
