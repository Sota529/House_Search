import { Box, Icon, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import style from "../styles/icon.module.css";
export async function handleClick(doc) {
  const DocumentID = { id: doc };
  axios
    .get("http://localhost:3000/api/hello", { params: DocumentID })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function HeartEmptyIcon({ favo, doc }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  let favorite;
  isLargerThan768
    ? (favorite = (
        <Box
          w={"12%"}
          pos="absolute"
          top="6"
          right="8"
          onClick={() => {
            handleClick(doc);
          }}
        >
          {/* <div id="heart" className={style.heart}> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="heart"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          {/* </div> */}
        </Box>
      ))
    : (favorite = (
        <Box
          w={"20%"}
          pos="absolute"
          top="6"
          right="6"
          onClick={() => {
            handleClick(doc);
          }}
        >
          {/* <div id="heart" className=""> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {/* </div> */}
        </Box>
      ));
  return <>{favorite}</>;
}
