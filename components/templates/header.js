import { Box, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
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
            mr="0.2em"
          >
            お部屋探し
          </Button>
        </Link>
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
}
