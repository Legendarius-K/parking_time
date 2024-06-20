import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import Button from "../Button";

const OurVisionStory = () => {
    const t = useTranslations("ourStory");
    return (
        <>
            <div className="relative flex flex-col lg:flex-row lg-190:flex-col ml-[13%] mr-[8%] justify-center">
                <div className="order-2 lg:order-1 flex flex-col w-full lg:w-[55%] mr-[3%]">
                    <div>
                        <h1 className="text-3xl lg:text-3xl mb-6 lg:mb-8 mt-[35%]">{t('titleOne')}</h1>
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
                <div className="order-1 justify-center items-center lg:order-2 w-full lg:w-[100%] mb-10 mt-[8%] lg:block hidden">
                    <img
                        src="/story.svg"
                        alt="our story picture"
                        className="max-w-full w-full h-auto object-cover transition-opacity duration-300 lg:max-w-none lg:w-auto"
                        style={{ maxWidth: "115%" }}
                    />
                </div>
            </div>
        </>
    );
};

export default OurVisionStory;
