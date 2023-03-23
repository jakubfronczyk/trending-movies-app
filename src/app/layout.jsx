import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
    title: "Movie Search App",
    description: "Movie Search App for trending movies",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
