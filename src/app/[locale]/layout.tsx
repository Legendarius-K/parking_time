import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { 
    title: "Parking Time",
    description: "What time is it? Parking Time!",
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string
    }
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {

    const messages = await getMessages();

    return (
        <html lang={locale} className="h-screen">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body className={`${'font-sans font-thin flex flex-col min-h-full box-border'}`}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <section className="grow">
                        {children}
                    </section>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}