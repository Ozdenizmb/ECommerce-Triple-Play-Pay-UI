import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

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
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://www.tripleplaypay.com/static/js/sandbox.js"></script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-light`}>
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout