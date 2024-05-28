import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={`${inter.className} ${'flex flex-col min-h-full'}`}>
                <Header />
                <section className="grow">
                    {children}
                </section>
                <Footer />
            </body>
        </html>
    );
}
