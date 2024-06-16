'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import Button from '../Button';
import { useTranslations } from 'next-intl';
import zones from '../../../public/smart-zones.png'
import note from '../../../public/smart-note.png'
import phone from '../../../public/smart-phone.png'
import rules from '../../../public/smart-rules.png'
import reg from '../../../public/smart-reg.png'
import bg from '../../../public/smart-bg.png'
import phoneBg from '../../../public/smart-phone-bg.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion'


const SmartParkingSolution: React.FC = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [170, -170]);
    const y2 = useTransform(scrollYProgress, [0, 1], [70, -70]);
    const y3 = useTransform(scrollYProgress, [0, 1], [90, -90]);
    const y4 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    // const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    const t = useTranslations('smart-parking')

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col justify-center md:flex-row bg-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8 max-w-[1400px]">
                <div className="relative  lg:mr-[70px] w-fit h-fit flex justify-center md:justify-center">
                    <div className='relative w-4/5'>
                        <Image className='' src={phoneBg} alt='background' style={{ width: "100%", height: "auto" }} />
                        {/* <div className='absolute bottom-[29px] right-[170px] w-[310px]'>
                            <Image src={phone} alt='phone' style={{ width: "100%", height: "auto" }} />
                        </div> */}
                    </div>
                    <motion.div 
                        ref={targetRef}
                        style={{ y: y1 }}
                        className='w-[100px] md:w-[140px] absolute -left-4 top-[60px] '>
                        <Image src={reg} alt='reg nr' style={{ width: "100%", height: "auto" }} />
                    </motion.div>
                    <motion.div 
                        ref={targetRef}
                        style={{ y: y2 }}
                        className='w-[100px] md:w-[140px] absolute -left-8 bottom-12'>
                        <Image src={rules} alt='rules sign' style={{ width: "100%", height: "auto" }} />
                    </motion.div>
                    <motion.div 
                        ref={targetRef}
                        style={{ y: y3 }}
                        className='w-[100px] md:w-[140px] absolute -right-8 md:-right-6 top-14'>
                        <Image src={zones} alt='parking zones' style={{ width: "100%", height: "auto" }} />
                    </motion.div>
                    <motion.div
                        ref={targetRef}
                        style={{ y: y4 }}
                        className='w-[100px] md:w-[140px] absolute -right-6 bottom-16'>
                        <Image src={note} alt='notification' style={{ width: "100%", height: "auto" }} />
                    </motion.div>
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