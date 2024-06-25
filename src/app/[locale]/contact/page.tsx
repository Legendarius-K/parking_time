'use client'
import emailjs from '@emailjs/browser';
import EmailIcon from "../../../../public/Email.svg"
import PhoneIcon from "../../../../public/Phone.svg"
import PinIcon from "../../../../public/Pin.svg"
import Image from "next/image";
import Check from "../../../../public/check.svg"
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from "next-intl"
import ContactHero from "@/components/ContactHero"

type ErrorsType = {
    name?: string;
    email?: string;
    message?: string;
    checkbox?: string;
};

const Contact = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [reason, setReason] = useState('');  
    const [errors, setErrors] = useState<ErrorsType>({}); 
    const [submitted, setSubmitted] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const t = useTranslations('contact')
    const form = useRef<HTMLFormElement>(null);

    const notifySuccess = () => {
        toast.success('Form submitted successfully!', {
            position: "top-center"
        });
    };
   
    const validateForm = () => { 

        let errors: ErrorsType = {}; 
  
        if (!name) { 
            errors.name = 'Name is required.'; 
        } 
  
        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        }

        if (!message) { 
            errors.message = 'Message is required.'; 
        }

        if (!isCheckboxChecked) { 
            errors.checkbox = 'Please accept the terms.'; 
        } else {
            delete errors.checkbox; 
        }
  
        setErrors(errors); 
        return Object.keys(errors).length === 0; 
    }; 

    const handleSubmit = (e : any) => {
        e.preventDefault();
        setSubmitted(true);
        
        if (validateForm() && form.current) {
          emailjs
            .sendForm('service_b3do2pt', 'template_2ehdyff', form.current, {
              publicKey: '3WiSQ3V1YWjMsLH05',
            })
            .then(
              () => {
                console.log('SUCCESS!'); 
                setName('');
                setEmail('');
                setMessage('');
                setTitle('');
                setPhoneNumber('');
                setSubmitted(false);
                setErrors({});
                setReason('');
                setIsCheckboxChecked(false);
                notifySuccess();
              },
              (error) => {
                console.log('FAILED...', error.text);
              }
            );
            
        } else {
          console.log('Form has errors. Please correct them.');
        }
    };
  
    return (
        <>
        <ContactHero />
        <div className="flex justify-center">
            <ToastContainer></ToastContainer>
            <div className="flex justify-center max-w-[1300px]">              
                <div className="flex flex-col md:flex-row mt-[80px] pt-[50px] px-[30px] md:px-16 md:py-[100px] pb-[80px] font-mono gap-[70px] text-pt-darkblue1">
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
                    <form className="flex flex-col md:w-[50%] gap-8 font-semibold" ref={form} onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <p>{t('name')}*</p>
                            <input 
                                onChange={(e) => setName(e.target.value)}
                                value={name} 
                                className={`rounded-[10px] border-pt-darkblue2 border-[1px] p-3 text-base font-medium ${
                                    submitted && errors.name ? 'border-red-500 bg-red-100' : 'border-gray-300'
                                }`} 
                                type="text" 
                                name="name_user" 
                                placeholder={t('name')} 
                            />
                            {submitted && errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>{t('title')}</p>
                            <input 
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}

                                className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" 
                                type="text" 
                                name="user_title" 
                                placeholder={t('title')} 
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
                            <div className="flex flex-col gap-2 md:w-[60%]">
                                <p>Email*</p>
                                <input 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value={email}
                                    className={`rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium ${
                                        submitted && errors.email ? 'border-red-500 bg-red-100' : 'border-gray-300'
                                    }`} 
                                    type="text" 
                                    name="user_email" 
                                    placeholder="ex. name@email.com" 
                                />
                                {submitted && errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-2 w-[70%] md:w-[40%]">
                                <p>{t('phone')}</p>
                                <input 
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" 
                                    type="text" 
                                    name="user_phoneNumber" 
                                    placeholder="+46708123456" 
                                />
                            </div>
                        </div>
                            <div className="flex flex-col gap-2 ">
                                <p>{t('reason')}</p>
                                <div className="flex flex-col gap-2">
                                <input onChange={(e) => setReason(e.target.value)} value={reason} className="rounded-[10px] border-pt-darkblue2 border-[1px] p-3 font-medium" type="text" name="user_reason" id="" placeholder={t('reason-placeholder')} />
                                </div>
                            </div>
                        
                        <div className="flex flex-col gap-2">
                            <p>{t('message')}*</p>
                            <textarea 
                                onChange={(e) => setMessage(e.target.value)}
                                value={message} 
                                name="message" 
                                placeholder={t('message')} 
                                className={`rounded-[10px] border-pt-darkblue2 border-[1px] p-3 min-h-24 font-medium ${
                                    submitted && errors.message ? 'border-red-500 bg-red-100' : 'border-gray-300'
                                }`} 
                            />
                            {submitted && errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                        </div>
                        <div className=''>
                        <div className="flex align-middle gap-3 text-sm text-pt-darkblue2">
                            <div className="relative flex">
                                <input onChange={() => setIsCheckboxChecked(!isCheckboxChecked)} checked={isCheckboxChecked} className="peer absolute top-0 left-0 h-[18px] w-[18px] cursor-pointer opacity-0" 
                                    type="checkbox" 
                                    name="termsCheckbox" 
                                    id="termsCheckbox" />
                                <span  className={`h-[18px] w-[18px] rounded-[3px] border-[1.5px] border-pt-darkblue2 peer-checked:bg-pt-green ${
                                        submitted && errors.checkbox ? 'border-red-500 bg-red-100' : 'border-gray-300'
                                    }`}><Image src={Check} alt="Pin icon" />
                                </span>
                            </div>
                            <span className="flex align-middle font-medium">
                                <p >{t('terms1')}</p>
                                <a className="px-1 cursor-pointer underline" href="">
                                    <p>{t('terms2')}</p>
                                </a>
                                <p>*</p>
                            </span>
                        </div>
                        {submitted && errors.checkbox && <span className="text-red-500 text-sm">{errors.checkbox}</span>}
                        </div>
                        <div className='md:mr-auto'>
                            <input className="bg-pt-secondary text-white w-full max-w-[400px] flex justify-center px-8 py-3 rounded-full font-light md:mr-4 transition cursor-pointer" type="submit" value="Contact us" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contact