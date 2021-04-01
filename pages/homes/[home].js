import Head from "next/head";
import { gethouselID, getOneData } from "../../lib/post";
// swiperからimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { HeartIcon } from "../../components/Icons/HeartIcon";
import Link from "next/link";
//swiperコンポーネントをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export async function getServerSideProps({ params }) {
  const posts = await (await getOneData(params)).result;
  return {
    props: { posts },
  };
}
export default function Home({ posts }) {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
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
      {posts.map(({ id, name, price, location, time, images, doc, favo }) => (
        <div key={id}>
          <Heading as="h1" align="center" isTruncated mb="8">
            {name}
          </Heading>
          <Box>
            {isLargerThan1000 ? (
              <Flex justify="space-between">
                <Box
                  boxSize="md"
                  width="50%"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mx="auto"
                  shadow="md"
                >
                  <Swiper navigation pagination={{ clickable: true }}>
                    {images.map((image) => {
                      return (
                        <SwiperSlide key={image}>
                          <Box pos="relative">
                            <Image
                              src={image}
                              alt=""
                              pb={8}
                              boxSize="md"
                              width={"100%"}
                            />
                          <HeartIcon favo={favo} doc={doc} size={"10%"} />
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
                </Box>
                <Box width="48%">
                  <Box boxShadow="sm" py={2}>
                    <Heading
                      as="h2"
                      size="lg"
                      align="center"
                      isTruncated
                      my={4}
                      py={1}
                    >
                      物件情報
                    </Heading>
                    <Stack spacing={4} align="center">
                      <Feature title="家賃" desc={`${price}円`} />
                      <Feature title="住所" desc={location} />
                      <Feature title="管理不動産" desc="コンフォート不動産" />
                    </Stack>
                  </Box>
                </Box>
              </Flex>
            ) : (
              <Box>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="md"
                  mx="auto"
                >
                  <Swiper navigation pagination={{ clickable: true }}>
                    {images.map((image) => {
                      return (
                        <SwiperSlide key={image}>
                          <Image src={image} alt="" width={"100%"} pb={8} />
                          <HeartIcon favo={favo} doc={doc} size={"12%"} />
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
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Box>

                <Text as="h2" size="sm" align="center" isTruncated my={4}>
                  物件情報
                </Text>

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
    <Box
      p={2}
      width="100%"
      borderWidth=""
      borderRadius="lg"
      shadow="sm"
      border="1px"
      borderColor="gray.200"
    >
      <Badge
        fontSize="md"
        mb={2}
        borderRadius="md"
        fontWeight="semibold"
        bg="teal.300"
        color="white"
      >
        {title}
      </Badge>
      <br />
      <Box
        as="span"
        borderRadius="md"
        color="black"
        pl={2}
        p="2px"
        fontWeight="bold"
      >
        {desc}
      </Box>
    </Box>
  );
}
