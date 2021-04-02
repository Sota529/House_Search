import Head from "next/head";
import { useEffect, useState } from "react";
import { gethouselID, getOneData } from "../../lib/post";
// swiperからimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  Badge,
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  useMediaQuery,
  Flex,
  Spacer,
} from "@chakra-ui/react";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

//swiperコンポーネントをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import axios from "axios";
import { HeartIcon } from "../../components/Icons/HeartIcon";
import Link from "next/link";
import { Price } from "../../components/atoms/price";

export default function Home() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Area = location.pathname.replace(/\/homes\//, "");
      await axios
        .get(`//${location.host}/api/getOne`, {
          params: { id: Area },
        })
        .then((res) => {
          setData(res.data.props.data);
          data.map((d) => {
            console.log(String(d.price).slice(0, 1));
            console.log(String(d.price).slice(1, 2));
          });
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
      <Box display="block" align="right" mr={4} mb={2}>
        <Link href="/favorite">
          <Button>お気に入り</Button>
        </Link>
      </Box>

      {data.map(({ id, name, price, location, time, images, doc, favo }) => (
        <Flex key={id}>
          {/* <Heading as="h1" align="center" isTruncated mb="8">
            {name}
          </Heading> */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow=""
            width={"60%"}
            key={id}
          >
            <Swiper navigation pagination={{ clickable: true }}>
              {images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <Box pos="relative">
                      <Image src={image} alt="" pb={8} width={"100%"} />
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        bg="salmon"
                        px="4"
                        py="2"
                        borderBottomRightRadius="10"
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
            <HStack spacing="24px">
              <Image src={images[1]} alt="" boxSize="100px" key={1} />
              <Image src={images[2]} alt="" boxSize="100px" key={2} />
              <Image src={images[0]} alt="" boxSize="100px" key={0} />
            </HStack>
          </Box>
          <Spacer />
          <Box width="36%">
            <Box boxShadow="sm" py={2}>
              <FeatureBadge title="家賃" />
              <Price price={price}/>
              <FeatureBadge title="住所" />
              {location}
              <FeatureBadge title="管理不動産" />
              コンフォート不動産
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
        bg="teal.300"
        color="white"
      >
        {title}
      </Badge>
    </Box>
  );
}
