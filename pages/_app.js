import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </ChakraProvider>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,144C560,171,640,181,720,192C800,203,880,213,960,197.3C1040,181,1120,139,1200,128C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </>
  );
}

export default MyApp;
