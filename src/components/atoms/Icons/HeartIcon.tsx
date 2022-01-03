import { Box, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext, VFC, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { AuthContext } from "../../../pages/_app";

interface Props {
  favo: string[];
  doc: string;
  size: string;
}

export const HeartIcon: VFC<Props> = ({ favo, doc, size }) => {
  const toast = useToast();
  const UserId = useContext(AuthContext)?.uid;
  const [isfavo, setFavo] = useState<boolean>(false);
  useEffect(() => {
    setFavo(favo?.includes(UserId ? UserId : ""));
  }, [UserId]);
  async function handleClick(doc: string) {
    if (!UserId) {
      toast({
        title: "いいねできません",
        description: "ログインまたは新規登録してください",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    setFavo(!isfavo);
    axios
      .get(`//${location.host}/api/favo`, {
        params: {
          UserId: UserId,
          docId: doc,
          favorite: !isfavo,
        },
      })
      .then((res) => {})
      .catch((error) => {});
  }
  const Heart = (
    <Icon
      boxSize={size}
      onClick={() => {
        handleClick(doc);
      }}
    >
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
    </Icon>
  );
  return (
    <>
      {isfavo ? (
        <Box
          color="red.500"
          borderRadius="full"
          _hover={{ bg: "gray.200" }}
          display="inline-block"
        >
          {Heart}
        </Box>
      ) : (
        <Box
          borderRadius="full"
          _hover={{ bg: "red.100" }}
          display="inline-block"
        >
          {Heart}
        </Box>
      )}
    </>
  );
};
