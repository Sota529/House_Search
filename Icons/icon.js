import { Box, useMediaQuery } from "@chakra-ui/react";
import { UpdateFavo } from "../lib/post";

export async function handleClick(){
  console.log("start")
  UpdateFavo()
  console.log("finished!")
}
export function HeartEmptyIcon({ favo, ID }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  let heartoff;
  isLargerThan768
    ? (heartoff = (
        <Box
          w={"12%"}
          pos="absolute"
          top="6"
          right="8"
          onClick={() => {
            handleClick(ID);
          }}
        >
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
        </Box>
      ))
    : (heartoff = (
        <Box
          w={"20%"}
          pos="absolute"
          top="6"
          right="6"
          onClick={() => {
            handleClick(ID);
          }}
        >
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
        </Box>
      ));
  return <>{heartoff}</>;
}
