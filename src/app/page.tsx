import How from "@/components/How";
import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"


const Home = () => {
    return (
        <main className="">
            <Hero />
            <SmartParkingSolution />
            <How />
        </main>
    );
}

export default Home;