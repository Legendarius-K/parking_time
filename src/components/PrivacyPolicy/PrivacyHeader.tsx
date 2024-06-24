import React from 'react';
import { useTranslations } from 'next-intl';
const PrivacyHeader = () => {

  const q = useTranslations('privacy-policy-header')

  return (
    <header className="bg-white mt-20 px-5 md:px-16 py-16 md:py-28 flex flex-col items-start w-full">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="w-full md:w-[768px] text-3xl md:text-4xl lg:text-5xl font-bold text-pt-secondary" style={{ height: '58px', lineHeight: '58px' }}>
        {q('Privacy_Policy-title')}
        </h1>
        <p className="w-full md:w-[768px] text-sm md:text-base text-pt-gray1 mt-6" style={{ height: '24px', lineHeight: '24px' }}>
         {q('Privacy_Policy-date')}
        </p>
      </div>
    </header>
  );
}

export default PrivacyHeader;