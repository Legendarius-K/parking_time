'use client'

import EmailIcon from "../../../public/Email.svg"
import PhoneIcon from "../../../public/Phone.svg"
import PinIcon from "../../../public/Pin.svg"
import Chevronicon from "../../../public/Chevron.svg"
import Image from "next/image";
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
          <div className="flex flex-col mt-[80px] pt-[100px] px-[30px] pb-[80px] font-mono gap-[50px] text-pt-darkblue1">
            <div className="flex flex-col gap-5">
                <p className="text-5xl font-sans font-bold text-pt-secondary">Contact us</p>
                <p className="text-base font-medium text-pt-darkblue2">Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.</p>
                <div className="flex flex-col gap-4 text-pt-darkblue1">
                    <div className="flex flex-row gap-4 ">
                        <Image src={EmailIcon} alt="Email icon"/>
                        <a className="underline font-medium" href="">info@parkingtime.se</a>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Image src={PhoneIcon} alt="Phone icon"/>
                        <a className="underline font-medium" href="tel:+46 72 399 15 15">+46 72 399 15 15 </a>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Image src={PinIcon} alt="Pin icon"/>
                        <a className="font-medium" href="">Nyköpingsvägen 52 | 611 50 NYKÖPING</a>
                    </div>
                </div>   
            </div>
            <div className="flex flex-col gap-8 font-medium">
                <div className="flex flex-col gap-2">
                    <p>First and last name</p>
                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 text-base" type="text" name="nameInput" id="" placeholder="First and last name" />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Job title</p>
                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3" type="text" name="nameInput" id="" placeholder="Job title" />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Email</p>
                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3" type="text" name="nameInput" id="" placeholder="ex. name@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Phone number</p>
                    <input className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3" type="text" name="nameInput" id="" placeholder="+46708123456" />
                </div>
                <div className="flex flex-col gap-2 ">
                    <p>Reason for contact</p>
                    <div onClick={handleClick} className="flex-col bg-pt-background rounded-[10px] py-3 px-[18px] text-pt-darkblue2">
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
                    <textarea name="" id="" placeholder="First and last name" className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3  min-h-24 "></textarea>
                </div>
                <div className="flex align-middle gap-3 text-sm text-pt-darkblue2">
                    <input className="size-[18px] my-auto rounded-[3px] border-pt-darkblue2" type="checkbox" name="checkbox" id="" /> 
                    <span className="flex align-middle ">
                        <p >I accept the</p>
                        <a className="px-1 cursor-pointer underline" href="">
                            <p>Terms</p>
                        </a>
                    </span> 
                </div>
                    <button>Contact us</button>
                </div>
          </div>
        </>
    )
};

export default Contact

/*

  <div className="mt-[80px] font-mono">
                <div className="">

                </div>
                <div className="pt-[100px] px-[30px] pb-[80px]">

                    <div className="flex flex-col gap-5">
                    
                        <h3 className="text-5xl font-sans text-pt-secondary">Contact us</h3>
                        <p className="text-base font-medium">Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.</p>
                    </div>

                    <div className="">
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <Image src={EmailIcon} alt="Email icon"/>
                                <a href="">info@parkingtime.se</a>
                            </div>
                            <div className="flex flex-row">
                                <Image src={PhoneIcon} alt="Phone icon"/>
                                <a href="tel:+46 72 399 15 15">+46 72 399 15 15 </a>
                            </div>
                                
                            <div className="flex flex-row">
                                <Image src={PinIcon} alt="Pin icon"/>
                                <a href="">Nyköpingsvägen 52 | 611 50 NYKÖPING</a>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <p>First and last name</p>
                                <input className="" type="text" name="" id="" />
                            </div>
                            <div className="">
                                <p>Job title</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="">
                                <p>Email</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="">
                                <p>Phone number</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="">
                                <p>Reason for contact</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="">
                                <p>Write us a message</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="">
                                <input type="checkbox" name="checkbox" id="" />
                            </div>
                            <button>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>  

*/