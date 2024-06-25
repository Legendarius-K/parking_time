import Button from "@/components/Button";
import why1 from '../../../public/whyone.svg'
import why2 from '../../../public/why2.svg'
import why3 from '../../../public/why3.svg'
import why4 from '../../../public/why4.svg'
import { useTranslations } from "next-intl";
import Image from "next/image";

const Why = () => {

    const t = useTranslations('why')

    return (
        <>
            <div id="whyComponent" className="flex flex-wrap justify-center gap-6 bg-pt-primary h-full mt-sm pt-12 pb-12">
                <h1 className="text-white text-4xl font-bold text-center mt-12 bg-pt-primary" >{t('headline')}</h1>
                <ul className="flex flex-wrap w-full gap-4 justify-center">
                    <li className="text-white p-6 w-full md:w-4/12 ">
                        <Image className="mb-6" src={why1} alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                        <Image className="mb-4" src={why2} alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                        <Image className="mb-4" src={why3} alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">{t('heading1')}</h2>
                        <span className="font-nunito font-thin">{t('text1')}</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                        <Image className="mb-4" src={why4} alt="vector" />
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