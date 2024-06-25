import { useTranslations } from 'next-intl';

const Download = () => {
    const t = useTranslations('download')
        return (
            <>
                <div id='download' className="flex flex-col md:flex-row mb-[8%] md:mr-[1%] items-center justify-center mt-[8%] content-normal">
                    <div className="order-1 md:order-2 mb-[2%] mb:mb-0 flex justify-center items-center md:w-auto">
                        <img src="/iphone.svg" alt="hand with iphone" className="w-full" />
                    </div>
                    <div className="order-2 md:order-1 flex flex-col max-w-lg w-full md:w-auto">
                        <h1 className="text-5xl mt-3 ml-[5%]">{t("title")}</h1>
                        <p className="font-nunito font-thin w-full md:w-1000%] leading-loose p-[5%]">
                            {t("paragraf")}
                        </p>
                        <div className="flex mb-[7%] ml-[4%] mb:[2%] md:mb-0 cursor-pointer">
                        <a href="https://apps.apple.com/se/app/parking-time/id1611019108" target="_blank" rel="noopener noreferrer">
                            <img className="mr-2" src="/appstore.svg" alt="appstore download logo" />
                        </a>
                        <a href="https://play.google.com/store/search?q=parking%20time&c=apps" target="_blank" rel="noopener noreferrer">
                            <img src="/googlestore.svg" alt="googleplay download logo" />
                        </a>
                        </div>
                        <div className="mt-5 hidden md:block ml-[4%]">
                            <img src="/QR.svg" alt="QR kod" />
                        </div>
                    </div>
                </div>
            </>
    );
};

export default Download;