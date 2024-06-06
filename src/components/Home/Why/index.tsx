import Button from "@/components/Button";

const Why = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 bg-pt-primary h-full mt-sm pt-12">
            <h1 className="text-white text-4xl font-bold text-center mt-12 bg-pt-primary">Why Parking Time?</h1>
                <ul className="flex flex-wrap w-full gap-4 justify-center">
                    <li className="text-white p-6 w-full md:w-4/12">
                        <img className="mb-6"src="./whyone.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">Avoid fines & reduce stress</h2>
                        <span>Our digital solution attracts more visitors by eliminating physical discs and reducing fines. This simplifies parking, boosts foot traffic, economic activity and city vibrancy while reducing stress.</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                        <img className="mb-4" src="./why2.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">Simplified parking for users</h2>
                        <span>Our app lets you effortlessly set, adjust, and monitor parking time. With a user-friendly interface, you can quickly find spots and manage parking. We continuously update based on customer feedback to ensure an efficient and hassle-free experience.</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                    <img className="mb-4" src="./why3.svg" alt="vector" />
                        <h2 className="text-2xl font-semibold mb-4">Integration with existing systems</h2>
                        <span>Our system for parking attendants integrates seamlessly with your existing setup. A unified system benefits you by streamlining operations and enhancing the experience for personnel by eliminating the need for two different systems and devices. We make this integration efficient, intuitive, and simple!</span>
                    </li>
                    <li className="text-white p-6 w-full md:w-4/12">
                    <img className="mb-4" src="./why4.svg" alt="vector" />

                        <h2 className="text-2xl font-semibold mb-4">Data-driven urban planning</h2>
                        <span>The digital parking disc can eventually optimize parking resources and urban planning through valuable usage data and behavior patterns, leading to a safer society with better control and access to parking spaces.</span>
                    </li>
                </ul>
                <Button route="/about" btnText="Learn more about us" colors="bg-white text-custom-black" />
            </div>
        </>
    )
}

export default Why;