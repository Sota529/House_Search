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
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext, VFC } from "react";
import { AuthContext } from "../../pages/_app";
import { LogoutModal } from "../atoms/LogoutModal";

export const Header: VFC = () => {
  const isLogin = useContext(AuthContext);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      bg="gray.100"
      top="0"
      left="0"
      py="1.5em"
      display="flex"
      justifyContent="space-around"
    >
      <Link href="/">
        <Heading fontSize="xl" my="auto">
          お部屋探し
        </Heading>
      </Link>
      <Box>
        {isLogin.currentUser === null ? (
          isLargerThan600 ? (
            <>
              <Link href="/user/signup">
                <Button
                  colorScheme="blue"
                  _focus={{ border: "none" }}
                  mr="0.2em"
                >
                  新規登録
                </Button>
              </Link>
              <Link href="/user/signin">
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
                    link: "/user/signup",
                    title: "新規登録",
                  },
                  {
                    Icon: <CheckIcon />,
                    link: "/user/signin",
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
};

type HamburgerMenuType = {
  values: {
    link: string;
    title: string;
    Icon: React.ReactElement;
  }[];
  Logout?: boolean;
};
const HamburgerMenu: VFC<HamburgerMenuType> = (props) => {
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
};
