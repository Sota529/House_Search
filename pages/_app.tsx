import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import React, { useState, createContext, useEffect } from "react";
import { auth } from "../lib/db";
import { AppProps } from "next/app";
import firebase from "firebase";

type AuthType = {
  currentUser?: firebase.User;
  uid?: string;
};

export const AuthContext = createContext<AuthType>({ currentUser: undefined });
const MyApp = ({ Component, pageProps }: AppProps) => {
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
};
export default MyApp;
