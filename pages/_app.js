import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import "../styles/globals.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const [load, setload] = useState(false);
  const router = useRouter();
  router.events?.on("routeChangeStart", () => setload(true));
  router.events?.on("routeChangeComplete", () => setload(false));
  router.events?.on("routeChangeError", () => setload(false));

  return (
    <>
      <ChakraProvider>
        {load ? (
          <Center pos="absolute" top="50vh" left="50vw">
            <Spinner size="xl" thickness="3px" />
          </Center>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ChakraProvider>
    </>
  );
}
export default MyApp;
