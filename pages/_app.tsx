import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const buildTitle = (): string => {
    const SUFFIX_TITLE = "知人と物々交換出来るアプリ BUTSUKO";

    switch (router.pathname) {
      case "/":
        return SUFFIX_TITLE;
      default:
        return SUFFIX_TITLE;
    }
  };

  return (
    <>
      <Head>
        <title>{buildTitle()}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
