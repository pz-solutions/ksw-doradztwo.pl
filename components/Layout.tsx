import Head from "next/head";
import { ReactNode, useState } from "react";
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
        <div className={`body`}>
            <div id="wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    </>
    );
}
