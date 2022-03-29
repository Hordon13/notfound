import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <title>404: NOT_FOUND</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/font/Ashley-Black.otf"
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href="/font/Altero-Regular.otf"
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href="/font/Altero-Outline.otf"
          as="font"
          type="font/otf"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
