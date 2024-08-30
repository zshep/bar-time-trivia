import "bootstrap/dist/css/bootstrap.min.css"
import './globals.css'
import Headbanner from './ui/headbanner';
import { Metadata } from 'next';


// Metadata info
export const metadata: Metadata = {
    title: {
      template: '%s | Bar Time Trivia',
      default: 'Bar Time Trivia',
    },
    description: 'A trivia app for bars to use with their customers',
    metadataBase: new URL('https://github.com/zshep'),
  };



export default function RootLayout ({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <html lang="en">
            
            
            <body>
            <Headbanner></Headbanner>
                {children}
            </body>
        </html>
    );

}