'use client'

import arrow from '../../../public/Vectorarrow.png';
import Image from 'next/image';
import Button from '../Button';
import HowBox from '../HowBox';
import ptPen from '../../../public/pen.svg';
import ptPin from '../../../public/parkpin.svg';
import ptClock from '../../../public/clock.svg';
import useWindowSize from '@/hooks/useWindowSize';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const How = () => {
    const { width } = useWindowSize();
    const [appStoreLink, setAppStoreLink] = useState<string>('');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        if (/windows phone/i.test(userAgent)) {
            setAppStoreLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1');
        } else if (/android/i.test(userAgent)) {
            setAppStoreLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1');
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            setAppStoreLink('https://apps.apple.com/se/app/parking-time/id1611019108');
        } else {
            setAppStoreLink('/#download')
        }

    }, []);

    const t = useTranslations('how')

    return (
        <div className='bg-pt-background flex justify-center'>
            <section className="max-w-[1350px] py-16 md:px-10 flex flex-col items-center w-full sm:w-[70%] md:w-full ">
                <h2 className="text-center text-3xl md:text-[2.5rem] m-6">{t('headline')}</h2>
                <div className="flex flex-col md:flex-row m-8 justify-between items-center">
                    <HowBox srcIcon={ptPen} altIcon='A Pen' number='01' heading={t('heading1')} text={t('text1')} transition={0.2} />

                    <div className='flex justify-center rotate-90 m-10 md:m-4 md:rotate-0'>
                        <Image src={arrow} alt='arrow' />
                    </div>

                    <HowBox srcIcon={ptPin} altIcon='A Parking pin' number='02' heading={t('heading2')} text={t('text2')} transition={0.4} />

                    <div className='flex justify-center rotate-90 m-10 md:m-4 md:rotate-0'>
                        <Image src={arrow} alt='arrow' />
                    </div>

                    <HowBox srcIcon={ptClock} altIcon='A Clock' number='03' heading={t('heading3')} text={t('text3')} transition={0.6} />
                </div>
                <div className='mt-9 w-full px-3 flex justify-center'>
                    <Button targetBlank={true} route={appStoreLink} btnText={t('app')} colors='bg-black text-white' />
                </div>
            </section>
        </div>
    );
};

export default How;
