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
            <body>{children}</body>
        </html>
    );

}