

interface ContactBtnMobileProps {
    btnText: string
    colors: string
}

const ContactBtnMobile = ({ btnText, colors }: ContactBtnMobileProps) => {
    return (
        <a className="self-center w-11/12" href="/contact">
            <div className={`${colors}  flex justify-center px-8 py-3 rounded-full font-light m-4 transition`}>
                {btnText}
            </div>
        </a>
    )
};

export default ContactBtnMobile
 