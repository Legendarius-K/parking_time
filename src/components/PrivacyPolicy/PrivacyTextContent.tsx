import React from 'react';
import { useTranslations } from 'next-intl';
const PrivacyTextContent = () => {

  const t = useTranslations('PrivacyTextContent')
  const q = useTranslations('privacy-policy-header')
  return (
    <main className="bg-white py-8 px-4 md:px-8 lg:px-16 mx-auto opacity-100">
      <div className="w-full max-w-screen-md mx-auto">
        <section className="mb-8 pb-4">
          <h3 className="text-2xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{q('Privacy_Policy-title')}</h3>
          <p className="text-base text-pt-darkblue2 font-semibold mb-4 text-[16px] leading-[24px]">
        {t('text-base')}

          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('personal_data')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('personal_data-text')}</p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text1')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text2')}          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text3')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text4')}
    
            </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text5')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text6')}

          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text7')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text8')}
            </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text9')}</h3>
          <ul className="list-disc list-inside pl-5 space-y-2">
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text10')}</li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text11')}</li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text12')}</li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text13')}</li>
          </ul>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text14')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text15')}   
              </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text16')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text17')}
          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text18')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text19')}
          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text20')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text21')}
          </p>
          <ul className="list-disc list-inside pl-5 space-y-2">
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text22')}</li>
          </ul>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text23')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text24')}
          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text25')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
        {t('Text26')}
          </p>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text27')}
  
            </p>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
        {t('Text28')}
          </p>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text29')}
          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4">{t('Text30')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
              {t('Text31')}
          </p>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
            {t('Text32')}

            <br />
            {t('Text33')}
            <br/>
          {t('Text34')}
          </p>
        </section>
        <section className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">{t('Text35')}</h3>
          <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {t('Text36')}
          </p>
          <ol className="list-decimal list-inside pl-5 space-y-4">
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
            {t('Text37')}
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text38')}</li>
              </ul>
            </li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
            
          {t('Text39')}
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text40')}</li>
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text41')}</li>
                <ul className="list-disc list-inside pl-5 space-y-2">
                  <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text42')}</li>
                  <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text43')}</li>
                </ul>
              </ul>
            </li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
             {t('Text44')}
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
                  {t('Text45')}       <a href="mailto:matildaohman@parkingtime.se" className="text-blue-600 underline">{t('Text46')}</a>{t('Text47')}
                </li>
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text48')}</li>
              </ul>
            </li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
          {t('Text49')}
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text50')}</li>
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text51')}</li>
                <ul className="list-disc list-inside pl-5 space-y-2">
                  <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text52')}</li>
                  <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text53')}</li>
                </ul>
              </ul>
            </li>
            <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
            {t('Text54')}
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text55')}</li>
                <li className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">{t('Text56')}</li>
              </ul>
            </li>
          </ol>
          <p className="text-base text-pt-darkblue2 mt-4 text-[16px] leading-[24px]">
            {t('Text57')}
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyTextContent;