import Navbar from '@features/landing-page/navbar';
import Footer from './footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
