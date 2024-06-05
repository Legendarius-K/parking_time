'use client'

import arrow from '../../../public/Vectorarrow.png';
import Image from 'next/image';
import ButtonMobile from '../ButtonMobile';
import HowBox from '../HowBox';
import ptPen from '../../../public/pen.svg';
import ptPin from '../../../public/parkpin.svg';
import ptClock from '../../../public/clock.svg';
import useWindowSize from '@/hooks/useWindowSize';
import Button from '../Button'; // Assuming you have a Button component

const How = () => {
    const { width } = useWindowSize();

    return (
        <div className='bg-pt-background flex justify-center'>
            <section className="max-w-[1350px] py-16 md:px-10 flex flex-col items-center w-[70%] md:w-full ">
                <h2 className="text-center text-3xl md:text-[2.5rem] m-6">Hur det fungerar</h2>
                <div className="flex flex-col md:flex-row m-8 justify-between items-center">
                    <HowBox srcIcon={ptPen} altIcon='A Pen' number='01' heading='Fyll i registreringsnummer' text='Öppna appen, registrera dig med ditt registreringsnummer.' />

                    <div className='flex justify-center rotate-90 m-10 md:m-4 md:rotate-0'>
                        <Image src={arrow} alt='arrow' />
                    </div>

                    <HowBox srcIcon={ptPin} altIcon='A Parking pin' number='02' heading='Hitta din parkeringszon' text='Använd kartan, sökfunktionen eller zonlistan för att hitta din parkeringsplats' />

                    <div className='flex justify-center rotate-90 m-10 md:m-4 md:rotate-0'>
                        <Image src={arrow} alt='arrow' />
                    </div>

                    <HowBox srcIcon={ptClock} altIcon='A Clock' number='03' heading='Starta din digitala p-skiva' text='När du har hittat din parkeringszon kan du se över parkeringens regler, starta parkering och stänga appen.' />
                </div>
                {width && width > 960 ? (
                    <Button targetBlank={true} route={'https://apps.apple.com/se/app/parking-time/id1611019108'} btnText='Ladda ner appen' colors='bg-black text-white' />
                ) : (
                    <ButtonMobile targetBlank={true} route={'https://apps.apple.com/se/app/parking-time/id1611019108'} btnText='Ladda ner appen' colors='bg-black text-white' />
                )}
            </section>
        </div>
    );
};

export default How;
