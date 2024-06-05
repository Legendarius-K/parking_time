import arrow from '../../../public/Vectorarrow.png'
import Image from 'next/image';
import ButtonMobile from '../ButtonMobile';
import HowBox from '../HowBox';
import ptPen from '../../../public/pen.svg'
import ptPin from '../../../public/parkpin.svg'
import ptClock from '../../../public/clock.svg'

const How = () => {
    return (
        <section className="bg-pt-background lg:h-[50vh] py-16 flex flex-col items-center">
            <h2 className="text-center text-3xl">Hur det fungerar</h2>
            <div className="flex-col m-8 justify-between items-center">

                <HowBox srcIcon={ptPen} altIcon='A Pen' number='01' heading='Fyll i reg-nummer' text='Öppna appen, registrera dig med ditt registreringsnummer.' />

                <div className='flex justify-center rotate-90 m-4 md:rotate-0'>
                    <Image src={arrow} alt='arrow' />
                </div>

                <HowBox srcIcon={ptPin} altIcon='A Parking pin' number='02' heading='Hitta din parkeringszon' text='Använd kartan, sökfunktionen eller zonlistan för att hitta din parkeringsplats' />
                
                <div className='flex justify-center rotate-90 m-4 md:rotate-0'>
                    <Image src={arrow} alt='arrow' />
                </div>

                <HowBox srcIcon={ptClock} altIcon='A Clock' number='03' heading='Starta din digitala p-skiva' text='När du har hittat din parkeringszon kan du se över parkeringens regler, starta parkering och stänga appen' />

                {/* <div className="bg-white rounded-xl basis-1/4 m">
                    <div>
                        <p>image</p>
                        <p>num</p>
                    </div>
                    <h3>Fyll i registreringsnummer</h3>
                    <p>Öppna appen, registrera dig med ditt registreringsnummer. </p>
                </div> */}


                {/* <div className="bg-white rounded-xl basis-1/4">
                    <div>
                        <p>image</p>
                        <p>num</p>
                    </div>
                    <h3>Hitta din parkeringszon</h3>
                    <p>Använd kartan, sökfunktionen eller zonlistan för att hitta din parkeringsplats</p>
                </div> */}


                {/* <div className="bg-white rounded-xl basis-1/4">
                    <div>
                        <p>image</p>
                        <p>num</p>
                    </div>
                    <h3>Starta din digitala p-skiva</h3>
                    <p>När du har hittat din parkeringszon kan du se över parkeringens regler, starta parkering och stänga appen</p>
                </div> */}

            </div>
            <ButtonMobile targetBlank={true} route={'https://apps.apple.com/se/app/parking-time/id1611019108'} btnText='Ladda ner appen' colors='bg-black text-white' />
        </section>
    )
};

export default How
