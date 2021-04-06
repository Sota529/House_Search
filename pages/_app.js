import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import "../styles/globals.css";
import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
