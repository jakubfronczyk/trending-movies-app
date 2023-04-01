import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
    title: "Movie Search App",
    description: "Movie Search App for trending movies",
    icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    <Navbar />
                    <SearchBox />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
