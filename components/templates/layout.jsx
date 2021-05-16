import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
function Layout({ children }) {
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
        <Container m="4em auto " maxW="container.lg">
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}
export default Layout;
