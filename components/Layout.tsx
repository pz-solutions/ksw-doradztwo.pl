import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export interface ILayoutProps {
    children: ReactNode
}

export function Layout({ children }: ILayoutProps) {
    return (<>
        <Head>
            <meta name="keywords" content="doradztwo, księgowość, kadry, rozliczenia, faktury" />
            <link rel="shortcut icon" href="/images/website-icon.png" />
        </Head>
        <div className="min-h-screen bg-navy">
            <div className="min-h-screen pt-11 sm:pt-[3.25rem]">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    </>
    );
}
