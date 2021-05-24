import React, { VFC } from "react";
import {
  Button,
  useDisclosure,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import { auth } from "../../lib/db";
import { useRouter } from "next/router";

type LogoutType = {
  Hamburger: boolean;
};

export const LogoutModal: VFC<LogoutType> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const Logout = () => {
    auth.signOut().catch((error) => {
      alert(`ログアウト時にエラーが発生しました (${error})`);
    });
    router.push("/");
  };

  return (
    <>
      {props.Hamburger ? (
        <Box onClick={onOpen}>ログアウト</Box>
      ) : (
        <Button
          colorScheme="gray"
          _focus={{ border: "none" }}
          _hover={{ bg: "gray.200" }}
          onClick={onOpen}
        >
          ログアウト
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody fontWeight="semibold">ログアウトしますか？</ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                Logout();
              }}
            >
              ログアウト
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
