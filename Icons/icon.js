import { Box, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import style from "../styles/icon.module.css";

const Icon = (
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
);

export function HeartIcon({ favo, doc }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isfavo, setFavo] = useState(favo);
  async function handleClick(doc) {
    console.log(typeof isfavo)
    setFavo(!isfavo);
    axios
      .get("http://localhost:3000/api/favo", {
        params: { id: doc, favorite: !isfavo },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  let favorite;
  isLargerThan768
    ? (favorite = (
        <Box
          w={"12%"}
          pos="absolute"
          top="6"
          right="8"
          onClick={() => {
            handleClick(doc, favo);
          }}
        >
          {Icon}
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
          {Icon}
        </Box>
      ));
  return (
    <>
      {isfavo ? (
        <div className={style.heart}> {favorite}</div>
      ) : (
        <>{favorite}</>
      )}
    </>
  );
}
