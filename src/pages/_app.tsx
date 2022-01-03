import { ApolloProvider } from "@apollo/client";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import Script from "next/script";

import { useApollo } from "../../lib/apolloClient";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <NextIntlProvider messages={pageProps.messages}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D0ESW5KE4H" />
        <Script id="gtag" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D0ESW5KE4H');
        `}</Script>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ApolloProvider>
  );
}

export default MyApp;
