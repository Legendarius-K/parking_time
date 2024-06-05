import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"
import { useTranslations } from "next-intl";

const Home = () => {
    const t = useTranslations('navigation')
    return (
        <main className="">
            <Hero />
            <SmartParkingSolution />
            <How />
        </main>
    );
}

export default Home;