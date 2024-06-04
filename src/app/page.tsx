import Image from "next/image";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution"

const Home = () => {
    return (
        <div>
            <Hero/>
            <SmartParkingSolution />
        </div>
    );
}

export default Home;