import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"
import { useTranslations } from "next-intl";
import Why from "@/components/Why";

import Article from "@/components/Article";


const Home = () => {
    const t = useTranslations('navigation')
    return (
        <main className="">
            <Hero />
            <SmartParkingSolution />
            <Article/>
            <How />
            <Why />
        </main>
    );
}

export default Home;