import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import React, { useState, createContext, useEffect } from "react";
import { auth } from "../lib/db";
import { AppProps } from "next/app";
import firebase from "firebase";


type AuthType = {
  currentUser: firebase.User | null;
  uid: string | undefined;
};

export const AuthContext = createContext<AuthType>({
  currentUser: null,
  uid: undefined,
});
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentUser, setCurrentUser] = useState<{
    currentUser: firebase.User | null;
    uid: string | undefined;
  }>({ currentUser: null, uid: undefined });

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setCurrentUser({ currentUser: user, uid: user?.uid });
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
};

export default MyApp;
