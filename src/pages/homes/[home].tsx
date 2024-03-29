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
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Center,
  Spinner,
} from "@chakra-ui/react";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

//swiperコンポーネントをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

import axios from "axios";
import { HeartIcon } from "src/components/atoms/Icons/HeartIcon";
import { Price } from "src/components/atoms/price";
import { AuthContext } from "src/pages/_app";
import { FeatureBadge } from "src/components/atoms/FeatureBadge";
import { MailDrawer } from "src/components/molecules/MailDrawer";
import { Map } from "src/components/atoms/Map";
import { HouseInfoType } from "src/type";

const Home = () => {
  const [data, setData] = useState<HouseInfoType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  useEffect(() => {
    const fetchData = async () => {
      const Area = location.pathname.replace(/\/homes\//, "");
      await axios
        .get<HouseInfoType[]>(`//${location.host}/api/getOne`, {
          params: { id: Area },
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
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

      {loading ? (
        <Center>
          <Spinner size="xl" thickness="3px" />
        </Center>
      ) : data.length === 0 ? (
        <Center minH={"50vh"}>Error</Center>
      ) : (
        data.map(
          ({ id, name, price, location, time, images, doc, favoUser }) => (
            <React.Fragment key={id}>
              <Heading mb="0.5em" textDecoration="underline">
                {name}
              </Heading>
              <Box display={{ md: "flex" }}>
                <Box
                  my=""
                  borderRadius="lg"
                  width={{ sm: "100%", md: "60%" }}
                  key={id}
                >
                  <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    thumbs={{ swiper: thumbsSwiper }}
                    cssMode={true}
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
                    cssMode={true}
                    onSwiper={setThumbsSwiper}
                  >
                    {images.map((image) => {
                      return (
                        <SwiperSlide key={image}>
                          <Image
                            src={image}
                            alt={image}
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
                  <Box mt="1em">
                    <Heading mb="0.5em" textDecoration="underline">
                      Map
                    </Heading>
                    <Map />
                  </Box>
                </Box>
                {/* 右の情報はここから */}
                <Box
                  ml="auto"
                  width={{ base: "100%", md: "38%" }}
                  mt={{ base: "1em", md: "0" }}
                  pos={{ md: "sticky" }}
                  top="50"
                  bottom="-20"
                  h="100%"
                >
                  <Box
                    boxShadow="base"
                    borderRadius="md"
                    px={3}
                    pb={4}
                    textAlign="center"
                  >
                    <Box>
                      <HeartIcon favo={favoUser} doc={doc} size="2.5em" />
                      <Text fontSize="0.4em">いいね</Text>
                    </Box>
                    <Price price={price} size="2.5em" />
                    <Flex justifyContent="center">
                      {[
                        { name: "敷", price: "5000" },
                        { name: "礼", price: "0" },
                      ].map((props) => {
                        return (
                          <>
                            <Box
                              fontSize={"1em"}
                              borderRadius="md"
                              fontWeight="semibold"
                              bg="gray.400"
                              color="white"
                              p={"0.1em"}
                              mr={1}
                            >
                              {props.name}
                            </Box>
                            <Box display="inline">{`${props.price}円`}</Box>
                          </>
                        );
                      })}
                    </Flex>
                    <Box mt={2} textAlign="left">
                      <FeatureBadge title="住所" value={location} />
                      <FeatureBadge
                        title="管理不動産"
                        value={`${name}不動産`}
                      />
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
                        <Text
                          fontWeight="extrabold"
                          display="inline"
                          mb={"0.2em"}
                        >
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
                        <MailDrawer userId={useContext(AuthContext)?.uid} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          )
        )
      )}
    </>
  );
};
export default Home;
