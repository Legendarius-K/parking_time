'use client'

import EmailIcon from "../../../../public/Email.svg"
import PhoneIcon from "../../../../public/Phone.svg"
import PinIcon from "../../../../public/Pin.svg"
import Chevronicon from "../../../../public/Chevron.svg"
import Image from "next/image";
import Button from "@/components/Button"
import Check from "../../../../public/check.svg"
import { useEffect, useState } from "react";

const Contact = () => {

    const [openAccordion, toggleAccordion] = useState(false);

    const handleClick = () => {
        toggleAccordion(!openAccordion);
    }

    const accordionClick = () => {
        console.log("item in accordion is clicked")
    }


    return (
        <>
          <div className="flex flex-col md:flex-row mt-[80px] pt-[100px] px-[30px] md:px-16 md:py-[100px] pb-[80px] font-mono gap-[70px] text-pt-darkblue1">
            <div className="flex flex-col md:w-[50%] gap-7">
                <p className="text-5xl font-sans font-bold text-pt-secondary">Contact us</p>
                <p className="text-base font-semibold text-pt-darkblue2 leading-8 md:w-[75%]">Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.</p>
                <div className="flex flex-col gap-4 text-pt-darkblue1">
                    <div className="flex flex-row gap-4 mt-[10px]">
                        <Image src={EmailIcon} alt="Email icon"/>
                        <a className="underline font-semibold" href="">info@parkingtime.se</a>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Image src={PhoneIcon} alt="Phone icon"/>
                        <a className="underline font-semibold" href="tel:+46 72 399 15 15">+46 72 399 15 15 </a>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Image src={PinIcon} alt="Pin icon"/>
                        <a className="font-semibold" href="">Nyköpingsvägen 52 | 611 50 NYKÖPING</a>
                    </div>
                </div>   
            </div>
            <div className="flex flex-col md:w-[50%] gap-8 font-semibold">
                <div className="flex flex-col gap-2">
                    <p>First and last name</p>
                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 text-base font-medium" type="text" name="nameInput" id="" placeholder="First and last name" />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Job title</p>
                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="Job title" />
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-4">
                    <div className="flex flex-col gap-2  md:w-[60%]">
                        <p>Email</p>
                        <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="ex. name@email.com" />
                    </div>
                    <div className="flex flex-col gap-2 w-[70%] md:w-[40%]">
                        <p>Phone number</p>
                        <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="nameInput" id="" placeholder="+46708123456" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <p>Reason for contact</p>
                    <div onClick={handleClick} className="flex-col bg-pt-background rounded-[10px] py-3 px-[18px] text-pt-darkblue2 cursor-pointer">
                        <div className="flex justify-between align-center">
                            <p className="font-bold text-base">Choose from</p>  <Image src={Chevronicon} alt="Pin icon"/>
                        </div>
                        <section className={`${openAccordion ? 'flex-col' : 'hidden'} gap-2`}>
                            <div onClick={accordionClick} className="">1</div>
                            <div onClick={accordionClick} className="">2</div>
                            <div onClick={accordionClick} className="">3</div>
                        </section>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Write us a message</p>
                    <textarea name="" id="" placeholder="Type your message..." className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 min-h-24 font-medium "></textarea>
                </div>
                <div className="flex align-middle gap-3 text-sm text-pt-darkblue2">
                    <div className="relative flex">
                        <input className="peer absolute top-0 left-0 h-[18px] w-[18px] cursor-pointer opacity-0" type="checkbox" name="" id="" />
                        <span className="h-[18px] w-[18px] rounded-[3px] border-[1.5px] border-pt-darkblue2 peer-checked:bg-pt-green"><Image src={Check} alt="Pin icon"/></span>
                    </div>
                    <span className="flex align-middle font-medium">
                        <p >I accept the</p>
                        <a className="px-1 cursor-pointer underline" href="">
                            <p>Terms</p>
                        </a>
                    </span> 
                </div>
                   <Button btnText="Contact us" route="/" colors="bg-custom-black text-white"></Button>
                </div>
          </div>
        </>
    )
};

export default Contact
