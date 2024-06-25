import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import Button from "../Button";
import Image from 'next/image';
import story from '../../../public/story.svg'

const OurVisionStory = () => {
    const t = useTranslations("ourStory");
    return (
        <div className='flex justify-center'>
            <div className="relative flex flex-col lg:flex-row items-center justify-center px-10 mt-20 max-w-[1300px] pb-20">
                <div className="order-2 lg:order-1 flex flex-col w-full lg:w-[65%] lg:mr-[3%]">
                    <div>
                        <h1 className="text-3xl lg:text-3xl mb-6 lg:mb-8 ">{t('titleOne')}</h1>
                        <p className=" font-nunito mb-6 lg:mb-8 text-lg lg:text-base">{t('paragrafOne')}</p>
                        <p className="font-nunito text-lg lg:text-base">{t('paragrafTwo')}</p>
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-3xl mt-8 mb-6 lg:mb-8">{t('titleTwo')}</h1>
                        <p className=" font-nunito mb-6 lg:mb-2 text-lg lg:text-base">{t('paragrafThree')}</p>
                        <Link href="/contact">
                            <button className="bg-custom-black text-white w-full lg:w-auto lg:max-w-xs mx-auto px-8 py-3 rounded-full font-light transition hover:bg-gray-300 mt-10 lg:mt-8">
                                {t('button')}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='order-1 h-fit w-full mb-14 lg:mb-0 max-w-[800px] hidden sm:block'>
                    <Image src={story} alt='Story' style={{ width: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    );
};

export default OurVisionStory;
