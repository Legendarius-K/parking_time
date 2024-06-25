import Image from "next/image";
import matilda from '../../../public/matilda-square.png'
import { Link } from "@/navigation";
import Button from "../Button";
import { useTranslations } from "next-intl";


const WantToKnowMore = () => {
    const t = useTranslations('WantToKnowMore')

    return (
        <main className="bg-neutral-800 p-5 text-white py-28 md:py-20 md:pb-24 flex justify-center">
            <section className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center md:justify-around">
                <div className="flex flex-col items-center w-full md:w-[40%]">
                    <div className="h-fit max-w-[300px] w-[62%] my-8">
                        <Image className="rounded-full" src={matilda} alt="Matilda Öhman" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <h2 className="text-3xl md:text-2xl">Matilda Öhman, CEO</h2>
                    <Link className="font-nunito text-lg md:text-lg my-2" href="mailto:chefen@parkingtime.se">chefen@parkingtime.se</Link>
                </div>
                <div className="text-center md:text-start md:w-[40%]">
                    <h2 className="text-5xl mt-16 mb-8">{t('headline')}</h2>
                    <p className="font-nunito text-lg leading-8 px-3 md:px-0 mb-5 text-pretty">{t('text')}</p>
                    <div className="w-full md:justify-start flex justify-center m-0 md:-ml-[16px]">
                        <Button route="/contact" colors="bg-white text-black" btnText={t('contact')} />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default WantToKnowMore
