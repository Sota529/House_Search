import Head from "next/head";
import { useEffect, useState } from "react";
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
  Spacer,
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
import { HeartIcon } from "../../components/Icons/HeartIcon";
import { Price } from "../../components/atoms/price";

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

      {data.map(({ id, name, price, location, time, images, doc, favo }) => (
        <Flex key={id}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow=""
            width={"60%"}
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
                        width={"100%"}
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
          <Spacer />
          <Box width="38%">
            <Box boxShadow="base" w="80%" borderRadius="md" p={(0, 3, 4, 3)}>
              <Text fontSize={24} fontWeight="semibold">
                {name}
              </Text>
              <Price price={price} size="2.5em" color="red.500" />
              <Box>
                <Flex>
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
            </Box>
            <Box mt={2} borderRadius="md" display="">
              <FeatureBadge title="住所" />
              <Text fontWeight="semibold" my={1}>
                {location}
              </Text>
            </Box>
            <FeatureBadge title="管理不動産" />
            <Text fontWeight="semibold" my={1}>
              {name}不動産
            </Text>
            <Box
              border="2px"
              borderStyle="semibold"
              borderRadius="lg"
              borderColor="teal.300"
              height={"14em"}
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
              <Box px={"1.3em"}>
                <Box mt={"0.6em"}>
                  <Text fontWeight="semibold" mb={"0.5em"}>
                    電話でお問い合わせ
                  </Text>
                  <Text fontWeight="extrabold" p={"0.6em"} as="mark">
                    0000-000-000({name}不動産)
                  </Text>
                </Box>
                <Box mt={"0.9em"}>
                  <Text fontWeight="semibold" mb={"0.5em"}>
                    メールでお問い合わせ
                  </Text>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    size="md"
                    height={"2.6em"}
                    width={"10em"}
                    shadow="md"
                  >
                    <EmailIcon mr={"0.4em"} />
                    お問い合わせ
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      ))}
    </>
  );
}

function FeatureBadge({ title, desc }) {
  return (
    <Box width="100%" borderWidth="" borderRadius="lg">
      <Badge
        fontSize="md"
        borderRadius="md"
        fontWeight="semibold"
        bg="green.400"
        color="white"
      >
        {title}
      </Badge>
    </Box>
  );
}
