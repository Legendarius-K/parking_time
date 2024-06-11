import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"
import { useTranslations } from "next-intl";
import Why from "@/components/Why";
import CarDriving from "@/components/CarDriving";
import TrustedBy from "@/components/TrustedBy";



const Home = () => {
    const t = useTranslations('navigation')
    return (
        <main className="">
            <TrustedBy />
            <Hero />
            <SmartParkingSolution />
            <CarDriving />
            <How />
            <Why />
        </main>
    );
}

export default Home;