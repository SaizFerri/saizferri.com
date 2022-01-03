import { ApolloProvider } from "@apollo/client";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";

import { useApollo } from "../../lib/apolloClient";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ApolloProvider>
  );
}

export default MyApp;
