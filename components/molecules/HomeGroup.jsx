import { Text, Image, Box, useMediaQuery, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeartIcon } from "../atoms/Icons/HeartIcon.jsx";
//swiperをimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Virtual } from "swiper";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import { Price } from "../atoms/price.jsx";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Virtual]);

export default function HomeGroup({ posts, walktime }) {
  const router = useRouter();
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };

  const text = (
    <>
      <Text py={2} align="center">
        <Box
          fontWeight="semibold"
          display="inline"
          as="mark"
        >{`${walktime}分`}</Box>
        の物件は見つかりませんでした
      </Text>
    </>
  );

  return (
    <>
      <Box display="flex">
        <Image src="/images/walking.jpg" alt="アイコン" boxSize="24px"></Image>
        <Text>{walktime}分</Text>
      </Box>
      <Swiper
        navigation
        slidesPerView="2.2"
        breakpoints={{ 720: { slidesPerView: 3.2 } }}
        freeMode={true}
        cssMode={true}
      >
        {posts.length
          ? posts.map(({ doc, id, name, price, images, favoUser }) => {
              return (
                <SwiperSlide key={id}>
                  <Box
                    my={"1em"}
                    rounded="md"
                    boxShadow="md"
                    overflow="hidden"
                    borderRadius="lg"
                    pos="relative"
                    minW="8em"
                    _hover={{
                      border: "2px",
                      borderColor: "teal.300",
                      cursor: "pointer",
                    }}
                    mr="1em"
                    onClick={() => {
                      handleClick(id);
                    }}
                  >
                    <Box>
                      <Image
                        src={images[0]}
                        objectFit="cover"
                        fallbackSrc="https://placehold.jp/f0f0f0/f0f0f0/150x150.png?text=%0A"
                        alt="家の写真"
                        borderRadius="lg"
                        key={images[0]}
                        w="100%"
                      />
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        bg="salmon"
                        px={{ sm: "2em", md: "1em" }}
                        py="2"
                        borderBottomRightRadius="10"
                        fontWeight="semibold"
                        color="white"
                      >
                        {walktime}分
                      </Box>
                    </Box>
                    <Box p="0.4em" h="5em">
                      <Box fontWeight="semibold" as="h4" display="block">
                        {name}
                      </Box>
                      <Box>
                        <Flex>
                          <Price price={price} size={"1.8em"} />
                          {isLargerThan700 ? (
                            <Box ml={2}>
                              <Text fontSize={"0.8em"}>敷:{price}</Text>
                              <Text fontSize={"0.8em"}>礼:{price}</Text>
                            </Box>
                          ) : null}
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  {isLargerThan700 ? (
                    <Box position="absolute" bottom="6" right="6">
                      <HeartIcon favo={favoUser} doc={doc} size={"3em"} />
                    </Box>
                  ) : (
                    <Box position="absolute" bottom="7" right="5">
                      <HeartIcon favo={favoUser} doc={doc} size={"2.0em"} />
                    </Box>
                  )}
                </SwiperSlide>
              );
            })
          : text}
      </Swiper>
    </>
  );
}