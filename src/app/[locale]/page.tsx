import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"
import { useTranslations } from "next-intl";
import Why from "@/components/Why";
import CarDriving from "@/components/CarDriving";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";



const Home = () => {
    const t = useTranslations('navigation')
    return (
        <main className="overflow-hidden">
            <Stats />
            <Hero />
            <SmartParkingSolution />
            <CarDriving />
            <How />
            <Why />
            <TrustedBy />
        </main>
    );
}

export default Home;