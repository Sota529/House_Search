import Head from "next/head";
import { useRouter } from "next/router";
import { DataFetch } from "../../lib/post";

// swiperからimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
//swiperコンポーネントをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  const router = useRouter();
  const datas = DataFetch();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {datas.map(({ name, price, location }) => (
        <div key={name}>
          <Heading as="h1" align="center" isTruncated mb="8">
            {name}
          </Heading>
          <Box>
            {isLargerThan1000 ? (
              <Flex justify="space-between">
                <Box
                  // boxSize="lg"
                  width="50%"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="md"
                  mx="auto"
                >
                  <Swiper navigation pagination={{ clickable: true }}>
                    <SwiperSlide>
                      <Image src="/images/Frame.svg" alt="" boxSize="lg" />
                    </SwiperSlide>
                  </Swiper>
                </Box>
                <Box width="48%">
                  <Heading as="h2" size="lg" align="center" isTruncated my={4}>
                    物件情報
                  </Heading>
                  <Stack spacing={8} align="center">
                    <Feature title="家賃" desc={`${price}円`} />
                    <Feature title="住所" desc={location} />
                    <Feature title="管理不動産" desc="コンフォート不動産" />
                  </Stack>
                </Box>
              </Flex>
            ) : (
              <Box>
                <Box
                  width="80%"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="md"
                  mx="auto"
                >
                  <Swiper navigation pagination={{ clickable: true }}>
                    <SwiperSlide>
                      <Image src="/images/Frame.svg" alt="" width="100%" />
                    </SwiperSlide>
                  </Swiper>
                </Box>

                <Heading as="h2" size="lg" align="center" isTruncated my={4}>
                  物件情報
                </Heading>
                <Box width="80%" mx="auto">
                  <Stack spacing={8} align="center">
                    <Feature title="家賃" desc={`${price}円`} />
                    <Feature title="住所" desc={location} />
                    <Feature title="管理不動産" desc="コンフォート不動産" />
                  </Stack>
                </Box>
              </Box>
            )}
          </Box>
        </div>
      ))}
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <Box p={5} shadow="md" width="100%" borderWidth="1px" borderRadius="lg">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
