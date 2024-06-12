import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"
import { useTranslations } from "next-intl";
import Why from "@/components/Why";
import CarDriving from "@/components/CarDriving";
import Download from "@/components/Download";


const Home = () => {
    const t = useTranslations('navigation')
    return (
        <main className="">
            <Hero />
            <SmartParkingSolution />
            <CarDriving />
            <How />
            <Why />
            <Download />
        </main>
    );
}

export default Home;