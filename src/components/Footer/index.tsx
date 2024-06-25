"use client";

import Image from "next/image";
import ptLogo from '../../../public/pt-logo-v2.svg'
import instagramIcon from '../../../public/Instagram.svg'
import linkedInIcon from '../../../public/LinkedIn.svg'
import { Link } from '@/navigation';
import { useTranslations } from "next-intl";
import { copyToClipboard } from '/src/utils/copyToClipboard.ts';
import React, { useState } from 'react';

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const t = useTranslations('footer');

    const handleCopy = () => {
        copyToClipboard("info@parkingtime.se", setCopied);
    };

    return (
        <footer className="py-12 px-8 md:px-20 md:pt-20 pb-4 md:pb-0 bg-pt-primary text-white gap-12 md:gap-5 flex flex-col font-mono">
            <div className="flex justify-between flex-col gap-12 md:gap-8 md:flex-row">
                <div className="flex gap-6 md:gap-8 flex-col md:flex-row">
                    <Link href="/" className=" w-20">
                        <Image src={ptLogo} alt="image" className="min-w-20" />
                    </Link>
                    <div className="flex flex-col text-base">
                        <p className="font-semibold md:font-bold text-lg font-sans pb-1 md:pb-0">{t('address')}:</p>
                        <p className="font-normal">Nyköpingsvägen 52 | 611 50</p>
                        <p className="font-normal">NYKÖPING</p>
                    </div>
                    <div className="flex flex-col gap-8 md:gap-1">
                        <div className="text-base">
                            <p className="font-semibold md:font-bold text-lg font-sans pb-1 md:pb-0">{t('contact')}:</p>
                            <p className="font-normal underline cursor-pointer ">
                                <a href="tel:+46 72 722 44 00">+46 72 722 44 00</a>
                            </p>
                            <p className="font-normal underline cursor-pointer" onClick={handleCopy}>
                                info@parkingtime.se
                                {copied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link target="_blank" href="https://www.instagram.com/parkingtimesweden/">
                                <Image src={instagramIcon} alt="image" />
                            </Link>
                            <Link target="_blank" href="https://www.linkedin.com/company/parking-time-sweden/">
                                <Image src={linkedInIcon} alt="image" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:gap-0 gap-3">
                    <div className="font-semibold md:font-bold text-lg">{t('links')}</div>
                    <div className="flex flex-col md:flex-row gap-6 text-sm md:text-base font-semibold md:font-medium underline">
                        <Link href="/contact">
                            <p>{t('contact')}</p>
                        </Link>
                        <Link href="/about">
                            <p>{t('about')}</p>
                        </Link>
                        <Link href="/news">
                            <p>{t('news')}</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-solid border-0 border-t">
                <div className="flex flex-col-reverse md:flex-row gap-6 justify-between pt-6">
                    <div className="text-sm font-normal">© 2024 Parking Time AB</div>
                    <Link href="/privacy" className="underline font-normal md:font-medium text-sm md:text-base">{t('policy')}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;