import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

interface ContactBtnProps {
    btnText: string
    colors: string
}

const ContactBtn = ({ btnText, colors }:ContactBtnProps) => {
    return (
        <div className={`${colors} px-8 py-3 rounded-full font-light m-4`}>
            {btnText}
        </div>
    )
};

export default ContactBtn
