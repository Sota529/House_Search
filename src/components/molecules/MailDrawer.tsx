import React, { VFC } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from "@chakra-ui/toast";
import { Button } from "@chakra-ui/button";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Box, Stack } from "@chakra-ui/layout";
import { FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";

type MailDrawerType = {
  userId?: string;
};

export const MailDrawer: VFC<MailDrawerType> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const UserId = props.userId;
  const toast = useToast();
  const handleClick = () => {
    if (!UserId) {
      toast({
        title: "お問い合わせできません",
        description: "ログインまたは新規登録してください",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    onOpen();
  };
  return (
    <>
      <Button
        colorScheme="green"
        variant="solid"
        size="md"
        mb={"1em"}
        height={"2.6em"}
        width={"10em"}
        shadow="md"
        onClick={() => {
          handleClick();
        }}
      >
        <EmailIcon mr={"0.4em"} />
        お問い合わせ
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">送信フォーム</DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">名前</FormLabel>
                  <Input id="username" placeholder="名前を入力してください" />
                </Box>
                <Box>
                  <FormLabel htmlFor="mail">メールアドレス</FormLabel>
                  <InputGroup>
                    <Input
                      type="mail"
                      id="mail"
                      placeholder="アドレスを入力してください"
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={onClose}>
                送信
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
