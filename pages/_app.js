import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        </ChakraProvider>
    </>
  );
}
export default MyApp;
