import { useTranslations } from 'next-intl';
import React from 'react';

const ContactHero = () => {
    const t = useTranslations("contactHero")
    return (
        <div className="relative">
            <img className="w-full object-cover object-center h-[55vh]" src="/contact-hero-new.jpg" alt="hero picture" />
            <div className="absolute w-full md:w-2/5 bg-slate-900/20 backdrop-blur inset-0 flex flex-col items-start justify-center py-8 px-4 sm:px-10 md:px-10">
                <div className="w-full md:ml-8 flex flex-col">
                    <div className="flex items-center mx-5">
                        <p className="text-sm text-white">{t("contact")}</p>
                    </div>
                    <div className="flex flex-col mx-5">
                        <h1 className="md:text-5xl text-4xl leading-10 text-white mt-4">{t("headline")}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;