import { useTranslations } from 'next-intl';
import React from 'react';

const CEOValues = () => {
    const t = useTranslations("")
    return (
        <>
            <div className='bg-pt-background'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-4xl pt-[12%] md:pt-[5%] font-normal font-nunito'>Our Values</h1>
                    <p className='md:mt-[2%] font-normal hidden md:block'>What we believe in</p>
                    <p className='mt-[2%] md:hidden'>The things we believe in</p>
                </div>
            </div>
            <div className='flex justify-evenly'>

                    <div className='align-top inline-block text-center w-[120px]'>
                        <img className="w-screen" src="/Simplicity.svg" alt="simplicity image" />
                        <h1>hello</h1>
                        <p className='block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius necessitatibus dolorem.</p>
                    </div>
                    <div className='align-top inline-block text-center w-[120px]'>
                        <img src="/Innovation.svg" alt="innovation image" />
                        <h1>hello</h1>
                        <p className='block	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius necessitatibus dolorem.</p>
                    </div>
                    <div className='align-top inline-block text-center w-[120px]'>
                        <img src="/User.svg" alt="User friendly image" /> 
                        <h1 >hello</h1>
                        <p className='block	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius necessitatibus dolorem.</p>
                    </div>

            </div>
            
            <div className='mt-[8%] ml-[25%] mb-8 w-3/6 italic text-center flex justify-center align-center font-nunito font-light text-xl'>
                <p>“Of all the things you need to think about during the day, parking should be one of the least. Parking should be so seamless that you hardly need to think about it; it should just work. We call this Smart Parking."</p>
            </div>
            <div>
                <p className='italic mb-[8%] text-center flex justify-center font-nunito font-light text-xl'>- Matilda, CEO and Founder.</p>
            </div>
        </>
    )
}

export default CEOValues;//lägg i samma div, gå tillbaka till hur det var innan och gör separata divs med bild, h1 och p x3 och gör samma styling