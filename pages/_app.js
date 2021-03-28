import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/layout";
import "../styles/globals.css";
import React, { useReducer } from "react";

// if (process.browser) {
//   const EVENTS_TO_MODIFY = []; // Fill in events you want to modify
//   const originalAddEventListener = document.addEventListener.bind(null);
//   document.addEventListener = () => {
//     let modOptions = options;
//     if (EVENTS_TO_MODIFY.includes(type)) {
//       if (typeof options === "boolean") {
//         modOptions = {
//           capture: options,
//           passive: false,
//         };
//       } else if (typeof options === "object") {
//         modOptions = {
//           passive: false,
//           ...options,
//         };
//       }
//     }
//     return originalAddEventListener(type, listener, modOptions);
//   };
// }
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
