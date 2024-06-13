import How from "@/components/How";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution";
import Why from "@/components/Why";
import CarDriving from "@/components/CarDriving";
import TrustedBy from "@/components/TrustedBy";
import Faq from "@/components/Faq";

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Hero />
            <SmartParkingSolution />
            <CarDriving />
            <How />
            <div id="why-component">
                <Why />
            </div>
            <TrustedBy />
            <div id="faq-component">
                <Faq />
            </div>
        </main>
    );
};

export default Home;
