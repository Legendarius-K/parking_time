import { useTranslations } from 'next-intl';
import React from 'react';

const CEOValues = () => {
    const t = useTranslations("OurValues")
    return (
        <>
            <div className='bg-pt-background'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-4xl pt-[12%] md:pt-[5%] mb-[7%] md:mb-[2%] font-normal font-nunito'>{t('title')}</h1>
                    <p className='md:mt-[2%] font-normal hidden md:block font-nunito'>{t('titleParagraf')}</p>
                    <p className='mt-[2%] md:hidden'>{t('titleParagrafTwo')}</p>
                </div>
            </div>
            <div className='flex justify-center bg-pt-background md:flex-row flex-col items-center mb-[2%]'>
                <div className='align-top inline-block text-center w-[200px] mb-[10%] md:mb-[5%] mx-auto'>
                    <img className="w-full" src="/simplicity.svg" alt="simplicity image" />
                    <h1 className='text-xl font-semibold mb-[4%]'>{t('simplicityTitle')}</h1>
                    <p className='block font-nunito'>{t('simplicityParagraf')}</p>
                </div>
                <div className='align-top inline-block text-center w-[200px] mb-[10%] md:mb-[5%] mx-auto'>
                    <img className="w-full" src="/Innovation.svg" alt="innovation image" />
                    <h1 className='text-xl font-semibold mb-[4%]'>{t('innovationTitle')}</h1>
                    <p className='block font-nunito'>{t('innovationParagraf')}</p>
                </div>
                <div className='align-top inline-block text-center w-[200px] mx-auto mb-[10%] md:mb-[4%]'>
                    <img className="w-full" src="/User.svg" alt="User friendly image" />
                    <h1 className='text-xl font-semibold mb-[4%]'>{t('userFriendlyTitle')}</h1>
                    <p className='block font-nunito'>{t('userFriendlyParagraf')}</p>
                </div>
            </div>
            <div className='mt-[8%] mx-auto mb-8 w-4/5 md:w-3/6 italic text-center flex justify-center align-center font-nunito font-light text-xl'>
                <p>{t('CEOQuote')}</p>
            </div>
            <div>
                <p className='italic mb-[8%] text-center flex justify-center font-nunito font-light text-xl'>{t('CEOEnd')}</p>
            </div>
        </>
    )
}

export default CEOValues;
