import React from 'react';
import { Link } from '@/navigation';
import Button from '../Button';
import { useTranslations } from 'next-intl';

const Homehero: React.FC = () => {

  const t = useTranslations('home-hero')

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero-bg.png)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex flex-col items-start justify-center h-full text-white gap-8 px-8 lg:px-16">
        <h1 className="text-[42px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight w-full md:w-3/4 lg:w-2/3 xl:w-1/2" style={{ opacity: 1 }}>
          What time is it? <br /> Parking Time!
        </h1>
        <div className="text-[16px] leading-[30px] text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2" style={{ opacity: 1 }}>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4 px-3 md:px-0">
          <Link className='max-w-[300px]' href="/contact">
            <button className="bg-white text-custom-black  w-full max-w-[400px] flex justify-center px-12 py-3 rounded-full font-light transition" style={{ opacity: 1 }}>{t('contact')}</button>
          </Link>
          <Link className='max-w-[300px]' href="https://apps.apple.com/se/app/parking-time/id1611019108" target='_blank'>
            <button className="bg-custom-black text-white w-full max-w-[400px] flex justify-center px-12 py-3 rounded-full font-light transition" style={{ opacity: 1 }}>{t('app')}</button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-pt-green px-8 py-3.5 text-center text-white bg-opacity-80">
        <ul className="grid grid-cols-2 md:flex md:justify-around text-xs md:text-sm lg:text-base list-disc list-inside gap-4">
          <li className="font-roboto font-medium leading-8 text-left px-4">{t('bullet1')}</li>
          <li className="font-roboto font-medium leading-8 text-left px-4">{t('bullet2')}</li>
          <li className="font-roboto font-medium leading-8 text-left px-4">{t('bullet3')}</li>
          <li className="font-roboto font-medium leading-8 text-left px-4">{t('bullet4')}</li>
        </ul>
      </div>
  </div>
  );
}

export default Homehero;