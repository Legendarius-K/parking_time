'use client'

import React, { useEffect, useState } from 'react';
import { Link } from '@/navigation';
import Button from '../Button';
import { useTranslations } from 'next-intl';
import useWindowSize from '@/hooks/useWindowSize'; // Adjust this path based on your actual file structure

const Homehero: React.FC = () => {
  const [appStoreLink, setAppStoreLink] = useState<string>('');
  const { width } = useWindowSize();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/windows phone/i.test(userAgent)) {
      setAppStoreLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1');
    } else if (/android/i.test(userAgent)) {
      setAppStoreLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setAppStoreLink('https://apps.apple.com/se/app/parking-time/id1611019108');
    } else {
      setAppStoreLink('/#download');
    }
  }, []);

  const t = useTranslations('home-hero');

  const getBackgroundImage = () => {
    if (width && width < 640) {
      return 'url(/hero-new-mobile.jpg)';
    } else if (width && width < 960) {
      return 'url(/hero-new-tablet.jpg)';
    } else {
      return 'url(/hero-new.jpg)';
    }
  };

  return (
    <div className="relative flex items-center bg-cover bg-center h-[155vh] sd:h-[100vh] md:min-h-[calc(100vh-80px)]" style={{ backgroundImage: getBackgroundImage() }}>
      <div className="absolute inset-0 bg-black bg-opacity-30 md:w-[46%] w-full"></div>
      <div className="relative flex flex-col items-start justify-center h-full text-white gap-8 px-8 lg:px-16">
        <h1 className="text-[42px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ opacity: 1 }}>
          Parking Time <br /> {t('sweden')}
        </h1>
        <div className="text-[16px] leading-[30px] text-sm md:text-base lg:text-lg xl:text-xl" style={{ opacity: 1 }}>
          <p>{t('slogan')}</p>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4 px-3 md:px-0">
          <Link className='max-w-[300px]' href={appStoreLink} target='_blank'>
            <button className="bg-custom-black text-white w-full max-w-[400px] flex justify-center px-12 py-3 rounded-full font-light transition" style={{ opacity: 1 }}>{t('app')}</button>
          </Link>
          <Link className='max-w-[300px]' href="/contact">
            <button className="bg-white text-custom-black w-full max-w-[400px] flex justify-center px-12 py-3 rounded-full font-light transition" style={{ opacity: 1 }}>{t('contact')}</button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-neutral-300 px-8 py-3.5 text-center text-white">
        <ul className="text-black grid grid-cols-2 md:flex md:justify-around text-xs md:text-sm lg:text-base list-disc list-inside gap-4">
          <p className="font-roboto font-medium leading-8 text-left px-4">{t('bullet1')}</p>
          <p className="font-roboto font-medium leading-8 text-left px-4">{t('bullet2')}</p>
          <p className="font-roboto font-medium leading-8 text-left px-4">{t('bullet3')}</p>
          <p className="font-roboto font-medium leading-8 text-left px-4">{t('bullet4')}</p>
        </ul>
      </div>
    </div>
  );
}

export default Homehero;
