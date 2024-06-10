'use client'

import Link from "next/link";


interface ButtonProps {
    route: string
    btnText: string
    colors: string
    closeBurger?:() => void 
    targetBlank?: boolean 
}

const Button = ({ route, btnText, colors, closeBurger, targetBlank=false }: ButtonProps) => {

    const updateCloseBurger = () => {
        closeBurger?.()
    }

    return (
        <Link className="w-full md:w-fit flex justify-center" href={route} target={targetBlank ? "_blank" : "_self"}>
            <div onClick={updateCloseBurger} className={`${colors} w-full max-w-[400px] flex justify-center px-8 py-3 rounded-full font-light m-4 transition`}>
                {btnText}
            </div>
        </Link>
    )
};

export default Button
 