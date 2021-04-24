import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/db";

export const AuthContext = createContext({ currentUser: undefined });

function MyApp({ Component, pageProps }) {
  const [load, setload] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const router = useRouter();
  router.events?.on("routeChangeStart", () => setload(true));
  router.events?.on("routeChangeComplete", () => setload(false));
  router.events?.on("routeChangeError", () => setload(false));

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);

  return (
    <>
      <ChakraProvider>
        <AuthContext.Provider value={currentUser}>
          {load ? (
            <Center pos="absolute" top="50vh" left="50vw">
              <Spinner size="xl" thickness="3px" />
            </Center>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthContext.Provider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
