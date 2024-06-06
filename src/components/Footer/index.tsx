"use client";

import Image from "next/image";
import ptLogo from '../../../public/pt-logo-v2.svg'
import instagramIcon from '../../../public/Instagram.svg'
import linkedInIcon from '../../../public/LinkedIn.svg'
import { useState } from "react";

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText("info@parkingtime.se")
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000); 
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    fallbackCopyTextToClipboard("info@parkingtime.se");
                });
        } else {
            fallbackCopyTextToClipboard("info@parkingtime.se");
        }
    };

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <footer className="py-12 px-8 md:p-20 bg-pt-primary text-white gap-12 md:gap-5 flex flex-col font-mono">
            <div className="flex justify-between flex-col gap-12 md:gap-8 md:flex-row">
                <div className="flex gap-6 md:gap-8 flex-col md:flex-row">
                    <a href="/" className=" w-20">
                        <Image src={ptLogo} alt="image" className="min-w-20" />
                    </a>
                    <div className="flex flex-col text-base">
                        <p className="font-semibold md:font-bold text-lg font-sans pb-1 md:pb-0">Address:</p>
                        <p className="font-normal">Nyköpingsvägen 52 | 611 50</p>
                        <p className="font-normal">NYKÖPING</p>
                        </div>
                    <div className="flex flex-col gap-8 md:gap-1">
                        <div className="text-base">
                            <p className="font-semibold md:font-bold text-lg font-sans pb-1 md:pb-0">Contact:</p>
                            <p className="font-normal underline cursor-pointer ">
                                <a href="tel:+46 72 722 44 00">+46 72 722 44 00</a>
                            </p>
                            <p className="font-normal underline cursor-pointer" onClick={handleCopy}>
                                info@parkingtime.se
                                {copied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a target="_blank" href="https://www.instagram.com/parkingtimesweden/">
                                <Image src={instagramIcon} alt="image" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/parking-time-sweden/">
                                <Image src={linkedInIcon} alt="image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:gap-0 gap-3">
                    <div className="font-semibold md:font-bold text-lg">Links</div>
                    <div className="flex flex-col md:flex-row gap-6 text-sm md:text-base font-semibold md:font-medium underline">
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        <a href="/about">
                            <p>About us</p>
                        </a>
                        <a href="/news">
                            <p>News</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-solid border-0 border-t">
                <div className="flex flex-col-reverse md:flex-row gap-6 justify-between pt-6">
                    <div className="text-sm font-normal">© 2024 Parking Time AB</div>
                    <a href="/privacy-policy" className="underline font-normal md:font-medium text-sm md:text-base">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer
