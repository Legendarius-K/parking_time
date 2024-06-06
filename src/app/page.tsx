import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"
import Why from "@/components/Home/Why";

const Home = () => {
    return (
        <main className="">
            <Hero />
            <SmartParkingSolution />
            <How />
            <Why />
        </main>
    );
}

export default Home;