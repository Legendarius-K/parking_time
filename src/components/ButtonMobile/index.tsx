import Link from "next/link";


interface ContactBtnMobileProps {
    route: string
    btnText: string
    colors: string
}

const ButtonMobile = ({ route, btnText, colors }: ContactBtnMobileProps) => {
    return (
        <Link className="self-center w-11/12" href={route}>
            <div className={`${colors}  flex justify-center px-8 py-3 rounded-full font-light m-4 transition`}>
                {btnText}
            </div>
        </Link>
    )
};

export default ButtonMobile
 