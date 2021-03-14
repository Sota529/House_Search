import Head from "next/head";
import { Container } from "@chakra-ui/react";
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
      <Container mt={16} maxW="container.lg">
        {children}
      </Container>
    </>
  );
}
export default Layout;
