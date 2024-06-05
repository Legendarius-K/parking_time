import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Parking Time",
    description: "What time is it? Parking Time!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-screen">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </head>
            <body className={`${'font-sans font-thin flex flex-col min-h-full box-border'}`}>
                <Header />
                <section className="grow mt-[80px]">
                    {children}
                </section>
                <Footer />
            </body>
        </html>
    );
}
