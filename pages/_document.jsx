import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="amorris.ca" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="amorris.ca" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/images/icons/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/images/icons/favicon-72x72.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="twitter:creator" content="@AAorris" />
          <meta property="og:site_name" content="amorris.ca" />
          <script
            async
            defer
            data-domain="amorris.ca"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            body[data-gr-c-s-loaded="true"] {
              display: block;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
