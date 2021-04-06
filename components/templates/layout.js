import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import Header from "./header";
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
        <Container py={16} maxW="container.lg">
          {children}
        </Container>
      </Box>
    </>
  );
}
export default Layout;
