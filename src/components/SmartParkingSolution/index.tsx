import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { useTranslations } from 'next-intl';

const SmartParkingSolution: React.FC = () => {

  const t = useTranslations('smart-parking')

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col md:flex-row bg-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8 max-w-[1400px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <img src="/Smart-Parking-Solution2.png" alt="Smart Parking Solution" className="w-full md:w-auto object-contain" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6">
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