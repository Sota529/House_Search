import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/layout.jsx";
import React, { useState, createContext, useEffect } from "react";
import { auth } from "../lib/db";

export const AuthContext = createContext({ currentUser: undefined });

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <>
      <ChakraProvider>
        <AuthContext.Provider value={currentUser}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContext.Provider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
