import How from "@/components/How";
import Hero from "@/components/Home-Hero";
import SmartParkingSolution from "@/components/SmartParkingSolution";
import Why from "@/components/Why";
import CarDriving from "@/components/CarDriving";
import TrustedBy from "@/components/TrustedBy";
import Faq from "@/components/Faq";
import Stats from "@/components/Stats";

import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";


const Home = () => {
    return (
        <main className="overflow-hidden">
            <Hero />
            <SmartParkingSolution />
            {/* <CarDriving /> */}
            <How />
            <div id="why-component">
                <Why />
            </div>
            <Testimonials />
            <TrustedBy />
            <Stats />
            <Download />
            <div id="faq-component">
                <Faq />
            </div>
        </main>
    );
};

export default Home;
