import Button from "@/components/Button";
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

const KnowMore = () => {
    const t = useTranslations("knowMore");
    return (
        <div className="flex justify-center items-center h-[50vh]">
            <div className="text-center leading-7 p-4 md:p-0">
                <h1 className="text-5xl font-semibold mt-8 md:mt-12">{t("title")}</h1>
                <p className="font-nunito font-thin max-w-md mx-auto mt-4 md:mt-6">{t("paragraf")}</p>
                <div className="flex justify-center mt-6 md:mt-8">
                    <Link href="/contact">
                        <button className="bg-custom-black text-white w-full max-w-xs mx-auto px-12 py-2 rounded-full font-light transition hover:bg-gray-300">
                            {t("button")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default KnowMore;
