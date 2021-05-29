import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import { Header } from "./header";
import { Footer } from "./footer";
import React, { VFC } from "react";

const Layout: VFC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <Header />
        <Container m="4em auto " maxW="container.lg" minH="70vh">
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};
export default Layout;
