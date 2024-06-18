'use client'

import React, { useRef } from 'react';
import Button from '../Button';
import { useTranslations } from 'next-intl';
import zones from '../../../public/smart-zones.png'
import note from '../../../public/smart-note.png'
import rules from '../../../public/smart-rules.png'
import reg from '../../../public/smart-reg.png'
import phoneBg from '../../../public/smart-phone-bg.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion'


const SmartParkingSolution: React.FC = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [70, -70]);
    const y3 = useTransform(scrollYProgress, [0, 1], [90, -90]);
    const y4 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const x1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const x3 = useTransform(scrollYProgress, [0, 1], [-10, 10]);
    const x4 = useTransform(scrollYProgress, [0, 1], [10, -10]);

    const t = useTranslations('smart-parking') 

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col justify-center md:flex-row bg-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8 max-w-[1400px]">
                <div className='flex justify-center items-center'>
                    <div className="hidden lg:flex relative lg:mr-[70px] w-fit h-fit justify-center md:justify-center">
                        <div className='relative min-w-[80%]'>
                            <Image className='' layout="responsive" src={phoneBg} alt='background' style={{ width: "100%", height: "auto" }} />
                        </div>
                        <motion.div
                            ref={targetRef}
                            style={{ y: y1, x: x1 }}
                            className='w-[100px] md:w-[140px] absolute -left-4 top-[60px] '>
                            <Image src={reg} alt='reg nr' style={{ width: "100%", height: "auto" }} />
                        </motion.div>
                        <motion.div
                            ref={targetRef}
                            style={{ y: y2, x: x2 }}
                            className='w-[100px] md:w-[140px] absolute -left-8 bottom-12'>
                            <Image src={rules} alt='rules sign' style={{ width: "100%", height: "auto" }} />
                        </motion.div>
                        <motion.div
                            ref={targetRef}
                            style={{ y: y3, x: x3 }}
                            className='w-[100px] md:w-[150px] absolute -right-8 md:-right-12 top-14'>
                            <Image src={zones} alt='parking zones' style={{ width: "100%", height: "auto" }} />
                        </motion.div>
                        <motion.div
                            ref={targetRef}
                            style={{ y: y4, x: x4 }}
                            className='w-[100px] md:w-[140px] absolute -right-8 bottom-20'>
                            <Image src={note} alt='notification' style={{ width: "100%", height: "auto" }} />
                        </motion.div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex lg:hidden justify-center md:justify-center">
                    <img src="/Smart-Parking-Solution3.png" alt="Smart Parking Solution" className="w-full md:w-auto object-contain" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
                    <h2 className="text-[38px] leading-[43.2px]text-2xl md:text-4xl font-bold pt-darkblue1-900">{t('headline')}</h2>
                    <p className="text-[16px] leading-[24px]text-sm md:text-base pt-darkblue1-700">
                        {t('text1')}
                    </p>
                    <ul className="space-y-2 md:space-y-">
                        <li className="flex items-center space-x-2">
                            <span className="text-pt-red font-semibold">›</span>
                            <span className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1 font-semibold py-0.5 md:py-0">{t('bullet1')}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-pt-red font-semibold">›</span>
                            <span className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1 font-semibold py-0.5 md:py-0">{t('bullet2')}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-pt-red font-semibold">›</span>
                            <span className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1 font-semibold py-0.5 md:py-0">{t('bullet3')}</span>
                        </li>
                    </ul>
                    <p className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1-700">
                        {t('text2')}
                    </p>
                    <Button route="/contact" btnText={t('contact')} colors="bg-custom-black text-white" />
                </div>
            </div>
        </div>
    );
};

export default SmartParkingSolution;