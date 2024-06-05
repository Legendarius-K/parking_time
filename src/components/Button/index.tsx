import Link from "next/link";


interface ContactBtnProps {
    route: string
    btnText: string
    colors: string
    targetBlank?: boolean
}

const Button = ({ route, btnText, colors, targetBlank=false }: ContactBtnProps) => {
    return (
        <Link href={route} target={targetBlank ? "_blank" : "_self"}>
            <div className={`${colors} px-8 py-3 rounded-full font-mono font-light m-4 transition`}>
                {btnText}
            </div>
        </Link>
    )
};

export default Button
 