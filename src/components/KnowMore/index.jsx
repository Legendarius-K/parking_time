import Button from "@/components/Button";
import { useTranslations } from 'next-intl';
import React from 'react';

const KnowMore = () => {
    const t = useTranslations("knowMore")
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <div className="text-center leading-10 p-4 md:p-0">
                    <h1 className="text-5xl font-semibold mt-8 md:mt-12">{t("title")}</h1>
                    <p className="font-nunito font-thin max-w-md mx-auto mt-4 md:mt-6">{t("paragraf")}</p>
                    <div className="flex justify-center mt-6 md:mt-8">
                        <Button route="/contact" btnText={t("button")} colors="bg-black text-white hover:bg-gray-300" />
                    </div>
                </div>
            </div>
        )
    }

export default KnowMore;
