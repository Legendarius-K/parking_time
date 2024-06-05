import Image from "next/image";

interface HowBoxProps {
    srcIcon: string
    altIcon: string
    number: string
    heading: string
    text: string
}

const HowBox = ({ srcIcon, altIcon, number, heading, text }:HowBoxProps) => {
    return (
        <>
            <div className="bg-white rounded-[20px] basis-1/4 overflow-hidden ">
                <div className="flex relative">
                    <div className="m-6">
                        <Image src={srcIcon} alt={altIcon}/> 
                    </div>
                    <p className="absolute font-mono -right-6 -top-5 text-9xl font-extrabold text-pt-gray2">{number}</p>
                </div>
                <h3 className="font-bold text-3xl m-7">{heading}</h3>
                <p className="m-7 font-thin">{text}</p>
            </div>   
        </>
    )
};

export default HowBox
