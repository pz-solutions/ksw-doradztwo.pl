import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pl">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,600;1,300;1,600&display=swap" rel="stylesheet" />
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
