'use client'

import { motion, animate, useMotionValue } from 'framer-motion';
import partner1 from '../../../public/partner1.png';
import partner2 from '../../../public/partner2.png';
import partner3 from '../../../public/partner3.png';
import partner4 from '../../../public/partner4.png';
import partner5 from '../../../public/partner5.png';
import partner6 from '../../../public/partner6.png';
import partner7 from '../../../public/partner7.png';
import partner8 from '../../../public/partner8.png';
import partner9 from '../../../public/partner9.png';
import Card from '../Card';
import useMeasure from 'react-use-measure';
import { useEffect } from 'react';

const TrustedBy = () => {
    const images2 = [
        partner1,
        partner2,
        partner3,
        partner4,
        partner5,
        partner6,
        partner7,
        partner8,
        partner9
    ];

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    // useEffect(() => {
    //     let controls;
    //     let finalPosition = -width / 2 - 8;

    //     controls = animate(xTranslation, [0, finalPosition], {
    //         ease: 'linear',
    //         duration: 25,
    //         repeat: Infinity,
    //         repeatType: 'loop',
    //         repeatDelay: 0,
    //     }),
    // })

    useEffect(() => {
        const finalPosition = -width / 2 - 8;

        const controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;

    }, [xTranslation, width]);

    return (
        <main className='h-[200px]'>
            <motion.div className='absolute left-0 flex gap-4' ref={ref} style={{ x: xTranslation }}>
                {[...images2, ...images2].map((item, index) => (
                    <Card image={item} key={index} />
                ))}
            </motion.div>
        </main>
    );
};

export default TrustedBy;
