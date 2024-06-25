'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../Button";
import arrow from '../../../public/faq-arrow.png';
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface QuestionProps {
    question: string;
    answer: JSX.Element;
    isActive: boolean;
    onClick: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, answer, isActive, onClick }) => {
    return (
        <div onClick={onClick} className="relative border-[1px] border-gray-300 hover:border-gray-600 bg-white p-5 rounded-3xl cursor-pointer w-full max-w-[700px] transition-all pr-20 my-3">
            <div className="h-fit w-[25px] absolute right-6 inset-y-0 top-1/2 -translate-y-1/2">
                <Image className={`${isActive ? '-rotate-180' : ''} transition-all duration-300`} src={arrow} alt="arrow" style={{ width: "100%", height: "auto" }} />
            </div>
            <h2 className="text-lg font-sans">{question}</h2>
            <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isActive ? 'max-h-screen opacity-100 my-4' : 'max-h-0 opacity-0 my-0'}`}>
                {answer}
            </div>
        </div>
    );
}

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
    const [appStoreLink, setAppStoreLink] = useState<string>('');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        if (/windows phone/i.test(userAgent)) {
            setAppStoreLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1');
        } else if (/android/i.test(userAgent)) {
            setAppStoreLink('https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1');
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            setAppStoreLink('https://apps.apple.com/se/app/parking-time/id1611019108');
        } else {
            setAppStoreLink('/#download')
        }
        
    }, []);

    const t = useTranslations('faq');
    
    const questions = [
        {
            id: 'q1',
            question: t('q1q'),
            answer: <p>{t('q1a')}</p>,
        },
        {
            id: 'q2',
            question: t('q2q'),
            answer: (
                <p>
                    <Link href={appStoreLink} target="_blank" className="text-blue-500">{t('q2l')}</Link>{t('q2a')}
                </p>
            ),
        },
        {
            id: 'q3',
            question: t('q3q'),
            answer: <p>{t('q3a')}</p>,
        },
        {
            id: 'q4',
            question: t('q4q'),
            answer: <p>{t('q4a')}</p>,
        },
    ];

    const handleClick = (id: string) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <main className="bg-pt-background py-24 p-8 text-pretty font-nunito">
            <section className="content flex flex-col items-center">
                <div className="upper text-center mb-5">
                    <h3 className="text-lg">FAQ</h3>
                    <h2 className="text-4xl font-sans mx-2 my-5">{t('headline1')}</h2>
                    <p className="text-lg my-10">{t('subheader1')}</p>
                </div>
                {questions.map((q) => (
                    <Question
                        key={q.id}
                        question={q.question}
                        answer={q.answer}
                        isActive={activeQuestion === q.id}
                        onClick={() => handleClick(q.id)}
                    />
                ))}
                <div className="lower text-center flex flex-col items-center">
                    <h2 className="text-4xl font-sans mx-2 my-5 mt-16">{t('headline2')}</h2>
                    <p className="text-lg my-4">{t('subheader2')}</p>
                    <Button route="/contact" btnText={t('contact')} colors="bg-black text-white" />
                </div>
            </section>
        </main>
    );
};

export default Faq;
