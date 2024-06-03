
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Parking Time",
    description: "What time is it? Parking Time!",
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang="en" className="h-screen">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body className={`${'font-sans font-thin flex flex-col min-h-full'}`}>
                    {/* <Header /> */}
                <NextIntlClientProvider messages={messages}>
                    <section className="grow">
                        {children}
                    </section>
                </NextIntlClientProvider>
                    <Footer />
            </body>
        </html>
    );
}



// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Roboto } from "next/font/google";



// const roboto = Roboto({ subsets: ['latin'], weight: '400' })

// // const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "Parking Time",
//     description: "What time is it? Parking Time!",
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en" className="h-screen">
//             <head>
//                 <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
//             </head>
//             <body className={`${'font-sans font-thin flex flex-col min-h-full'}`}>
//                 <Header />
//                 <section className="grow">
//                     {children}
//                 </section>
//                 <Footer />
//             </body>
//         </html>
//     );
// }
