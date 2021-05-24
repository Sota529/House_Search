import {
  HamburgerIcon,
  InfoOutlineIcon,
  StarIcon,
  AddIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../pages/_app";
import {LogoutModal} from "../atoms/LogoutModal.tsx";

export default function Header() {
  const isLogin = useContext(AuthContext);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

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
      <h1>
        <Link href="/">
          <Button
            variant="ghost"
            colorScheme="gray"
            _focus={{ border: "none" }}
          >
            お部屋探し
          </Button>
        </Link>
      </h1>
      <Box>
        {isLogin === null ? (
          isLargerThan600 ? (
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
                  _focus={{ border: "none" }}
                  _hover={{ bg: "gray.200" }}
                >
                  ログイン
                </Button>
              </Link>
            </>
          ) : (
            <>
              <HamburgerMenu
                values={[
                  {
                    Icon: <AddIcon />,
                    link: "/user/create",
                    title: "新規登録",
                  },
                  {
                    Icon: <CheckIcon />,
                    link: "/user/login",
                    title: "ログイン",
                  },
                ]}
              />
            </>
          )
        ) : isLargerThan600 ? (
          <>
            <LogoutModal />
            <Link href="/favorite">
              <Button
                variant="ghost"
                colorScheme="gray"
                _focus={{ border: "none" }}
                _hover={{ bg: "gray.200" }}
              >
                お気に入り
              </Button>
            </Link>
          </>
        ) : (
          <HamburgerMenu
            values={[
              { Icon: <StarIcon />, link: "/favorite", title: "お気に入り" },
            ]}
            Logout
          />
        )}
      </Box>
    </Box>
  );
}

function HamburgerMenu(props) {
  return (
    <Menu closeOnSelect={false} autoSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon boxSize="2em" />}
        variant="ghost"
      />
      <MenuList>
        {props.values.map((value) => {
          return (
            <Link href={value.link} key={value.title}>
              <MenuItem icon={value.Icon}>{value.title}</MenuItem>
            </Link>
          );
        })}
        {props.Logout ? (
          <Box
            py="0.4em"
            display="flex"
            pl="0.8em"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
          >
            <InfoOutlineIcon my="auto" mr="0.57em" />
            <LogoutModal Hamburger />
          </Box>
        ) : null}
      </MenuList>
    </Menu>
  );
}
