import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link rel="icon" type="image/svg" href="/icons/bio.svg" />
                <link rel="icon" sizes="32x32" type="image/svg" href="/icons/bio.svg" />
                <link rel="icon" sizes="16x16" type="image/svg" href="/icons/bio.svg" />

                <meta name="description" content="Rasel Mahmud Portfolio website"/>

                <meta name="keywords" content="Rasel Mahmud, Rasel Mahmud portfolio, rasel.mahmud.dev, rasel"/>
                <meta name="author" content="Rasel Mahmud"/>

                <meta property="og:title" content="Rasel Mahmud Portfolio website"/>
                <meta property="og:description" content="Rasel Mahmud Portfolio website"/>
                <meta property="og:url" content="https://rasel-portfolio.vercel.app"/>
                <meta property="og:site_name" content="Rasel Mahmud Portfolio website"/>
                <meta property="og:image" content="https://biodata-management.netlify.app/rasel-mahmud.webp"/>

                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
                <div id="backdrop_root"></div>
            <NextScript/>
            </body>
        </Html>
    )
}