'use client'

import Link from "next/link";


interface ContactBtnMobileProps {
    route: string
    btnText: string
    colors: string
    closeBurger?:() => void 
    targetBlank?: boolean 
}

const ButtonMobile = ({ route, btnText, colors, closeBurger, targetBlank=false }: ContactBtnMobileProps) => {

    const updateCloseBurger = () => {
        closeBurger?.()
    }

    return (
        <Link className="w-full flex justify-center" href={route} target={targetBlank ? "_blank" : "_self"}>
            <div onClick={updateCloseBurger} className={`${colors} w-[85%] max-w-[700px] flex justify-center px-8 py-3 rounded-full font-light m-4 transition`}>
                {btnText}
            </div>
        </Link>
    )
};

export default ButtonMobile
 