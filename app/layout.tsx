import "bootstrap/dist/css/bootstrap.min.css"
import './globals.css'
import Headbanner from './ui/headbanner';
import { Metadata } from 'next';
import footerbar from "./ui/footerbar";
import { Style } from "util";


// Metadata info
export const metadata: Metadata = {
    title: {
        template: '%s | Bar Time Trivia',
        default: 'Bar Time Trivia',
    },
    description: 'A trivia app for bars to use with their customers',
    metadataBase: new URL('https://github.com/zshep'),
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;

}) {
    return (
        <html lang="en">

            <body>
                <Headbanner />
                <div className="d-flex justify-content-center align-items-stretch text-center mt-4">
                    {children}
                </div>
            </body>
        </html>
    );

}