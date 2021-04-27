import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../pages/_app";
import LogoutModal from "../atoms/LogoutModal";

export default function Header() {
  const isLogin = useContext(AuthContext);
  return (
    <Box
      bg="gray.100"
      pos=""
      top="0"
      left="0"
      py="1.5em"
      // pl="4em"
      // pr="20em"
      display="flex"
      justifyContent="space-around"
    >
      <Box>
        <Link href="/">
          <Button
            variant="ghost"
            colorScheme="gray"
            _focus="none"
            _hover="none"
          >
            お部屋探し
          </Button>
        </Link>
      </Box>
      <Box>
        {isLogin === null ? (
          <>
            <Link href="/user/create">
              <Button colorScheme="blue" _focus="none" mr="0.2em">
                新規登録
              </Button>
            </Link>
            <Link href="/user/login">
              <Button
                variant="ghost"
                colorScheme="gray"
                _focus="none"
                _hover={{ bg: "gray.200" }}
              >
                ログイン
              </Button>
            </Link>
          </>
        ) : (
          <>
            <LogoutModal />
            <Link href="/favorite">
              <Button
                variant="ghost"
                colorScheme="gray"
                _focus="none"
                _hover={{ bg: "gray.200" }}
              >
                お気に入り
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
}
