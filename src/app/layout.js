import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from "@/components/Topbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "E-Commerce",
    description: "E-Commerce",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} bg-light`}>
                <Topbar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout