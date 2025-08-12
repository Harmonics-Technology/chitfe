import Footer from '@features/landing-page/footer';
import Navbar from '@features/landing-page/navbar';

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
