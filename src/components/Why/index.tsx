import Button from "@/components/Button";
import { useTranslations } from "next-intl";

const Why = () => {

    const t = useTranslations('why')

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 bg-pt-primary h-full mt-sm pt-12 pb-12">
            <h1 className="text-white text-4xl font-bold text-center mt-12 bg-pt-primary" >{t('headline')}</h1>
                <ul className="flex flex-wrap w-full gap-4 justify-center">
                    <li className="text-white p-6 w-full md:w-4/12 ">
                        <img className="mb-6"src="./whyone.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                        <img className="mb-4" src="./why2.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                    <img className="mb-4" src="./why3.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                    <img className="mb-4" src="./why4.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                </ul>
                <Button route="/about" btnText={t('about')} colors="bg-white text-custom-black" />
            </div>
        </>
    )
}

export default Why;