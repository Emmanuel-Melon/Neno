import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  ColorModeProvider,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/lib/apolloClient";
import { SessionProvider } from "next-auth/react";
import { ColorThemeProvider, useColorTheme } from "../src/providers/theme";
import nenoTheme from "../src/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={nenoTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
