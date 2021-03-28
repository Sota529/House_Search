import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import style from "../../styles/icon.module.css";

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

export function HeartIcon({ favo, doc ,size}) {
  const [isfavo, setFavo] = useState(favo);
  async function handleClick(doc) {
    setFavo(!isfavo);
    axios
      .get(`//${location.host}/api/favo`, {
        params: { id: doc, favorite: !isfavo },
      })
      .then((res) => {})
      .catch((error) => {});
  }
  let favorite;
  favorite = (
    <Box
      w={size}
      pos="absolute"
      top="0"
      right="2"
      onClick={() => {
        handleClick(doc);
      }}
    >
      {Icon}
    </Box>
  );
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
