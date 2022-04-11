import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Foxy Bot is a Discord Bot developed by F.O.X.Y"
                    />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />    
                    
                    <link rel="icon" type="image/x-icon" href="favicon.ico" />

                </Head>

                <body>
                    <noscript>You need to enable JavaScript to run this app!</noscript>
                    <div id="root"></div>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;