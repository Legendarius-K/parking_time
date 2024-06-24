import { useTranslations } from 'next-intl';
import React from 'react';

const AboutHero = () => {
    const t = useTranslations("aboutHero")
    return (
        <div className="relative flex justify-center items-start h-[50vh] md:h-[50vh] overflow-hidden">
  <img className="w-full h-full md:block object-cover object-center" src="/bild.png" alt="hero picture" />
  <div className="absolute left-0 h-full w-full bg-slate-900/20 backdrop-blur md:bg-slate-900/20 md:backdrop-blur md:w-2/4">
    <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
    </div>
  </div>
  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-2 sm:p-16 md:p-18">
    <div className="flex items-center">
      <div>
        <p className="text-white text-sm leading-loose md:leading-loose mt-16 flex items-center ml-4">{t("about")}</p>
      </div>
    </div>
    <div className="mt-4 ml-4">
      <h1 className="text-5xl md:text-5xl md:w-6/12 w-full text-white">{t("title")}</h1>
      <p className="text-white font-nunito font-light w-full sm:w-[70%] md:w-[40%] lg:w-[40%] mt-5 sm:text-sm md:text-sm max-w-screen-md leading-loose md:leading-loose mr-10">{t("paragraf")} </p>
    </div>
  </div>
  <div className="absolute inset-0 bg-slate-900/20 opacity-50"></div> 
</div>

    );
}

export default AboutHero;
