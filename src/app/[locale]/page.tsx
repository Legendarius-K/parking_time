import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
    const t = useTranslations('navigation')
    return (
        <main className="">
            <p>Test:</p>
            {t('home')}
        </main>
    );
}
