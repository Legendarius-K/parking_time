'use client'

import EmailIcon from "../../../../public/Email.svg"
import PhoneIcon from "../../../../public/Phone.svg"
import PinIcon from "../../../../public/Pin.svg"
import Chevronicon from "../../../../public/Chevron.svg"
import Image from "next/image";
import Button from "@/components/Button"
import Check from "../../../../public/check.svg"
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl"

const Contact = () => {

    const t = useTranslations('contact')

    const [openAccordion1, toggleAccordion1] = useState(false);
    const [openAccordion2, toggleAccordion2] = useState(false);

    const handleClick1 = () => {
        toggleAccordion1(!openAccordion1);
    }

    const handleClick2 = () => {
        toggleAccordion2(!openAccordion2);
    }
   

    const accordionClick = () => {
        console.log("item in accordion is clicked")
    }


    return (
        <div className="flex justify-center">
            <div className="flex justify-center max-w-[1300px]">
                <div className="flex flex-col md:flex-row mt-[80px] pt-[100px] px-[30px] md:px-16 md:py-[100px] pb-[80px] font-mono gap-[70px] text-pt-darkblue1">
                    <div className="flex flex-col md:w-[50%] gap-7">
                        <p className="text-5xl font-sans font-bold text-pt-secondary">{t('contact')}</p>
                        <p className="text-base font-semibold text-pt-darkblue2 leading-8 md:w-[75%]">{t('text1')}</p>
                        <div className="flex flex-col gap-4 text-pt-darkblue1">
                            <div className="flex flex-row gap-4 mt-[10px]">
                                <Image src={EmailIcon} alt="Email icon" />
                                <a className="underline font-semibold" href="">info@parkingtime.se</a>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Image src={PhoneIcon} alt="Phone icon" />
                                <a className="underline font-semibold" href="tel:+46 72 399 15 15">+46 72 399 15 15 </a>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Image src={PinIcon} alt="Pin icon" />
                                <a className="font-semibold" href="">Nyköpingsvägen 52 | 611 50 NYKÖPING</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-[50%] gap-8 font-semibold">
                        <div className="flex flex-col gap-2">
                            <p>{t('name')}</p>
                            <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 text-base font-medium" type="text" name="nameInput" id="" placeholder={t('name')} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>{t('title')}</p>
                            <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder={t('title')} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
                            <div className="flex flex-col gap-2  md:w-[60%]">
                                <p>Email</p>
                                <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="ex. name@email.com" />
                            </div>
                            <div className="flex flex-col gap-2 w-[70%] md:w-[40%]">
                                <p>{t('phone')}</p>
                                <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="+46708123456" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p>{t('reason')} Accordion only</p>
                            <div onClick={handleClick1} className="flex-col bg-pt-background rounded-[10px] py-3 px-[18px] text-pt-darkblue2 cursor-pointer">
                                <div className="flex justify-between align-center">
                                    <p className="font-bold text-base">{t('choose')}</p>  <Image src={Chevronicon} alt="Pin icon" />
                                </div>
                                <section className={`${openAccordion1 ? 'flex-col' : 'hidden'} gap-2 flex`}>
                                    <div onClick={accordionClick} className="rounded-[10px] border-zinc-400 p-3 hover:bg-white">placeholder</div>
                                    <div onClick={accordionClick} className="rounded-[10px] border-zinc-400 p-3 hover:bg-white">placeholder</div>
                                    <div onClick={accordionClick} className="rounded-[10px] border-zinc-400 p-3 hover:bg-white">placeholder</div>
                                </section>

                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p>{t('reason')} Input only</p>
                            <div className="flex flex-col gap-2">
                            <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="Reason for contact" />
                        </div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p>{t('reason')} Accordion and Input</p>
                            <div onClick={handleClick2} className={` ${openAccordion2 ? '' : 'cursor-pointer'} flex-col bg-pt-background rounded-[10px] py-3 px-[18px] text-pt-darkblue2 `}>
                                <div className="flex justify-between align-center cursor-pointer">
                                    <p className=" font-bold text-base" >{t('choose')}</p>  <Image src={Chevronicon} alt="Pin icon" />
                                </div>
                                <section className={`${openAccordion2 ? 'flex-col' : 'hidden'} gap-2 flex`}>
                                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="Reason for contact" />
                                    <div onClick={accordionClick} className="rounded-[10px] border-zinc-400 border-[1px] p-3 hover:bg-white">placeholder</div>
                                    <div onClick={accordionClick} className="rounded-[10px] border-zinc-400 border-[1px] p-3 hover:bg-white">placeholder</div>
                                    <div onClick={accordionClick} className="rounded-[10px] border-zinc-400 border-[1px] p-3 hover:bg-white">placeholder</div>
                                </section>

                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>{t('message')}</p>
                            <textarea name="" id="" placeholder={t('message')} className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 min-h-24 font-medium "></textarea>
                        </div>
                        <div className="flex align-middle gap-3 text-sm text-pt-darkblue2">
                            <div className="relative flex">
                                <input className="peer absolute top-0 left-0 h-[18px] w-[18px] cursor-pointer opacity-0" type="checkbox" name="" id="" />
                                <span className="h-[18px] w-[18px] rounded-[3px] border-[1.5px] border-pt-darkblue2 peer-checked:bg-pt-green"><Image src={Check} alt="Pin icon" /></span>
                            </div>
                            <span className="flex align-middle font-medium">
                                <p >{t('terms1')}</p>
                                <a className="px-1 cursor-pointer underline" href="">
                                    <p>{t('terms2')}</p>
                                </a>
                            </span>
                        </div>
                        <Button btnText={t('contact')} route="/" colors="bg-custom-black text-white"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact
