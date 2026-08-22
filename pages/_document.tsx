import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pl">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400..700&family=Spectral:ital,wght@0,400..600;1,400..600&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/images/website-icon.png" />
                <script
                    dangerouslySetInnerHTML={{
                        __html:
                            "(function(){try{var t=localStorage.getItem('ksw-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'system'}catch(e){document.documentElement.dataset.theme='system'}})()",
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
