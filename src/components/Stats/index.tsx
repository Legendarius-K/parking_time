'use client'

import Image from "next/image";
import arrow from '../../../public/stats-arrow.png';
import p from '../../../public/stats-p.png';
import zones from '../../../public/stats-zones.png';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const Stats = () => {
    const t = useTranslations('stats');

    const downloadCount = useMotionValue(0);
    const downloads = useTransform(downloadCount, Math.round);

    const sessionCount = useMotionValue(0);
    const sessions = useTransform(sessionCount, Math.round);

    const pZoneCount = useMotionValue(0);
    const pZones = useTransform(pZoneCount, Math.round);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const downloadAnimation = animate(downloadCount, 5000, {
                duration: 3.5,
            });

            const sessionAnimation = animate(sessionCount, 4700, {
                duration: 3,
            });

            const pZoneAnimation = animate(pZoneCount, 30, {
                duration: 2.5,
            });

            return () => {
                downloadAnimation.stop();
                sessionAnimation.stop();
                pZoneAnimation.stop();
            };
        }
    }, [isInView]);

    return (
        <div ref={ref} className="bg-pt-background py-28 w-full flex justify-center items-center">
            <div className="bg-white rounded-3xl min-h-[200px] w-11/12 max-w-[1500px] flex flex-col md:flex-row justify-evenly items-center shadow-xl">
                <div className="my-12 flex items-center">
                    <div className="mx-2 w-16">
                        <Image src={arrow} alt="Downloads"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>
                    <div className="mx-2 w-32">
                        <div className="flex items-center">
                            <motion.h2 className="text-2xl font-bold">{downloads}</motion.h2>
                            <p className="text-2xl ml-1">+</p>
                        </div>
                        <p>{t('downloads')}</p>
                    </div>
                </div>
                <div className="my-12 flex items-center">
                    <div className="mx-2 w-16">
                        <Image src={p} alt="Parking sessions"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>
                    <div className="mx-2 w-32">
                        <div className="flex items-center">
                            <motion.h2 className="text-2xl font-bold">{sessions}</motion.h2>
                            <p className="text-2xl ml-1">+</p>
                        </div>
                        <p>{t('sessions')}</p>
                    </div>
                </div>
                <div className="my-12 flex items-center">
                    <div className="mx-2 w-16">
                        <Image src={zones} alt="Parking zones"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>
                    <div className="mx-2 w-32">
                        <div className="flex items-center">
                            <motion.h2 className="text-2xl font-bold">{pZones}</motion.h2>
                            <p className="text-2xl ml-1">+</p>
                        </div>
                        <p>{t('zones')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
