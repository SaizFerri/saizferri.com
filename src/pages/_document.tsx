import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const SEO = {
  name: "Adrian Saiz Ferri",
  title: "Adrian Saiz Ferri",
  description: "Portfolio of Adrian Saiz Ferri, Software Engineer",
};

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width" />
          <meta key="author" name="author" content="Adrian Saiz Ferri" />
          <meta
            key="description"
            name="description"
            content={SEO.description}
          />
          <meta itemProp="name" content={SEO.title} />
          <meta itemProp="description" content={SEO.description} />
          <meta
            name="keywords"
            content="web-development,javascript,typescript,freelancer,freelancing,html,css,node.js,scss,remote"
          />
          <meta key="og:title" property="og:title" content={SEO.title} />
          <meta
            key="og:site_name"
            property="og:site_name"
            content={SEO.title}
          />
          <meta
            key="og:description"
            property="og:description"
            content={SEO.description}
          />
          <meta
            key="og:url"
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_HOST_URL}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
