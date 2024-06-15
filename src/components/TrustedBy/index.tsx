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
import { useEffect, useState } from 'react';

const TrustedBy = () => {
    let [ref, { width }] = useMeasure();
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);


    const partnersarray = [
        partner1,
        partner2,
        partner3,
        partner4,
        partner5,
        partner6,
        partner7,
        partner8,
        partner9,
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

    const FAST_DURATION =40;
    const SLOW_DURATION = 75;
    const [duration, setDuration] = useState(FAST_DURATION)


    const xTranslation = useMotionValue(0);


    useEffect(() => {
        let controls;
        const finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender)
                },
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }



        return controls?.stop;

    }, [xTranslation, width, duration, rerender]);

    return (
        <main className='h-[216px] w-[100%] pt-4 relative overflow-hidden'>
            <h2 className='absolute left-1/2  transform -translate-x-1/2 font-mono text-xl'>Trusted By</h2>
            <motion.div className='absolute left-0 flex gap-4 '
                ref={ref}
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION)}}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION)}}
                onTouchStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION)}}
                onTouchEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION)}}
            >
                {[...partnersarray, ...partnersarray].map((item, index) => (
                    <Card image={item} key={index} />
                ))}
            </motion.div>
        </main>
    );
};

export default TrustedBy;
