import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
// swiperからimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper";
import {
  Badge,
  Box,
  Image,
  Text,
  Button,
  useMediaQuery,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  DrawerFooter,
  useToast,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

//swiperコンポーネントをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

import axios from "axios";
import { HeartIcon } from "../../components/atoms/Icons/HeartIcon";
import { Price } from "../../components/atoms/price";
import { AuthContext } from "../_app";

export default function Home() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [data, setData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const Area = location.pathname.replace(/\/homes\//, "");
      await axios
        .get(`//${location.host}/api/getOne`, {
          params: { id: Area },
        })
        .then((res) => {
          setData(res.data.props.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.map(({ id, name, price, location, time, images, doc, favoUser }) => (
        <React.Fragment key={id}>
          <Text
            fontSize={"2.5em"}
            fontWeight="semibold"
            textAlign="center"
            mb="0.5em"
          >
            {name}
          </Text>
          <Box display={{ md: "flex" }}>
            <Box
              my="auto"
              borderRadius="lg"
              width={{ sm: "100%", md: "60%" }}
              key={id}
            >
              <Swiper
                navigation
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
              >
                {images.map((image) => {
                  return (
                    <SwiperSlide key={image}>
                      <Box pos="relative">
                        <Image
                          src={image}
                          alt={image}
                          pb={8}
                          fallbackSrc="https://placehold.jp/f0f0f0/f0f0f0/150x150.png?text=%0A"
                          borderTopLeftRadius="md"
                          borderTopRightRadius="md"
                        />
                        <Box
                          position="absolute"
                          top="0"
                          left="0"
                          bg="salmon"
                          px="4"
                          py="2"
                          borderBottomRightRadius="md"
                          borderTopLeftRadius="md"
                          fontWeight="semibold"
                          color="white"
                        >
                          {time}分
                        </Box>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Swiper
                id="thumbs"
                slidesPerView={3}
                spaceBetween={10}
                watchSlidesVisibility
                watchSlidesProgress
                scrollbar={{ draggable: true }}
                onSwiper={setThumbsSwiper}
              >
                {images.map((image) => {
                  return (
                    <SwiperSlide key={image}>
                      <Image
                        src={image}
                        alt={images}
                        mb={3}
                        fallbackSrc="https://placehold.jp/f0f0f0/f0f0f0/150x150.png?text=%0A"
                        borderRadius="md"
                        _hover={{
                          border: "2px",
                          borderColor: "teal.300",
                          cursor: "pointer",
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
            <Box m="auto" width={{ sm: "100%", md: "38%" }} mt="1em">
              <Box
                boxShadow="base"
                borderRadius="md"
                p={(0, 3, 4, 3)}
                mx="auto"
                textAlign="center"
              >
                <Flex justifyContent="space-around">
                  <Box bg="" borderRadius="full">
                    <HeartIcon favo={favoUser} doc={doc} size="2.5em" />
                    <Text fontSize="0.4em">いいね</Text>
                  </Box>
                </Flex>
                <Price price={price} size="2.5em" />
                <Box>
                  <Flex justifyContent="center">
                    <Box
                      fontSize={"1em"}
                      borderRadius="md"
                      fontWeight="semibold"
                      bg="gray.400"
                      color="white"
                      p={"0.1em"}
                      mr={1}
                    >
                      敷
                    </Box>
                    <Box display="inline">50000円</Box>
                    <Box
                      fontSize={"1em"}
                      borderRadius="md"
                      fontWeight="semibold"
                      bg="gray.400"
                      color="white"
                      p={"0.1em"}
                      mx={1}
                    >
                      礼
                    </Box>
                    <Box display="inline">0円</Box>
                  </Flex>
                </Box>
                <Box mt={2} borderRadius="md" textAlign="left">
                  <FeatureBadge title="住所" />
                  <Text fontWeight="semibold" my={1} textAlign="center">
                    {location}
                  </Text>
                  <FeatureBadge title="管理不動産" />
                  <Text fontWeight="semibold" my={1} textAlign="center">
                    {name}不動産
                  </Text>
                </Box>
              </Box>
              <Box
                border="2px"
                borderStyle="semibold"
                borderRadius="lg"
                borderColor="teal.300"
                mt={"2em"}
              >
                <Box bg="teal.300" px={"2em"} textAlign="center">
                  <Text
                    fontWeight="semibold"
                    color="white"
                    as="h2"
                    mx="auto"
                    fontSize="1.2em"
                    py={"0.5em"}
                  >
                    お問い合わせはこちら
                  </Text>
                </Box>
                <Box mx={"1.3em"} textAlign="center">
                  <Box mt={"0.6em"} bg="yellow.100">
                    <Text fontWeight="semibold" mb={"0.5em"}>
                      電話でお問い合わせ
                    </Text>
                    <Text fontWeight="extrabold" display="inline" mb={"0.2em"}>
                      0000-000-000
                    </Text>
                    <br />
                    <Text fontWeight="extrabold" display="inline">
                      ({name}不動産)
                    </Text>
                  </Box>
                  <Box mt={"0.9em"}>
                    <Text fontWeight="semibold" mb={"0.5em"}>
                      メールでお問い合わせ
                    </Text>
                    <MailDrawer />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </React.Fragment>
      ))}
    </>
  );
}

function FeatureBadge({ title }) {
  return (
    <Box width="100%" borderWidth="" borderRadius="lg">
      <Badge
        fontSize="md"
        borderRadius="md"
        fontWeight="semibold"
        bg="green.400"
        color="white"
        shadow="md"
      >
        {title}
      </Badge>
    </Box>
  );
}
function MailDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const UserId = useContext(AuthContext)?.uid;
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
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">送信フォーム</DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">名前</FormLabel>
                  <Input
                    ref={firstField}
                    id="username"
                    placeholder="名前を入力してください"
                  />
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
}
