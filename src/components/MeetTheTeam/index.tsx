'use client'

import Image, { StaticImageData } from "next/image";
import matilda from '../../../public/matilda.png'
import placeholder from '../../../public/placeholder-person.png'
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TeamMemberProps {
    image: StaticImageData;
    name: string;
    title: string;
    duration: number
}

const MeetTheTeam = () => {
    const t = useTranslations('MeetTheTeam')

    return (
        <div className="bg-pt-background px-5 py-20 flex justify-center">
            <main className="max-w-[1500px]">
                <section className="text-center">
                    <h2 className="text-4xl mt-6 mb-5">{t('headline')}</h2>
                    <p className="font-nunito text-lg text-pretty">{t('text')}</p>
                </section>
                <section className="pt-10 flex flex-col md:flex-row justify-around md:items-stretch items-center">
                    <TeamMember image={matilda} name="Matilda Öhman" title="CEO" duration={0.15}/>
                    <TeamMember image={placeholder} name="Johan E. Bengtsson" title="Chief Technical Officer" duration={0.25} />
                    <TeamMember image={placeholder} name="Ingemar Öhman" title="Accountant" duration={0.35} />
                    <TeamMember image={placeholder} name="Fredrik Jodstam" title="Business Strategist" duration={0.45} />
                </section>
            </main>
        </div>
    )
};

const TeamMember = ({ image, name, title, duration }: TeamMemberProps) => {
    return (
        <motion.div className="bg-white shadow-lg rounded-3xl my-5 md:w-1/5 w-fit flex flex-col items-center"
            initial={{
                opacity: 0,
                y: 80
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: duration
                }
            }}
            viewport={{ once: false }}
        >
            <div>
                <Image src={image} alt={name} />
            </div>
            <div className="p-5">
                <h2 className="text-xl mb-2">{name}</h2>
                <p className="font-nunito">{title}</p>
            </div>
        </motion.div>
    )
}

export default MeetTheTeam;
