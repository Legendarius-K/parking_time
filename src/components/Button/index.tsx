import Link from "next/link";


interface ContactBtnProps {
    route: string
    btnText: string
    colors: string
}

const Button = ({ route, btnText, colors }: ContactBtnProps) => {
    return (
        <Link href={route}>
            <div className={`${colors} px-8 py-3 rounded-full font-mono font-light m-4 transition`}>
                {btnText}
            </div>
        </Link>
    )
};

export default Button
 