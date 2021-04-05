import { Text, Image, Box, useMediaQuery, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeartIcon } from "../Icons/HeartIcon";
//swiperをimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Virtual } from "swiper";
import { useEffect, useState } from "react";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { Price } from "../atoms/price";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Virtual]);

export default function HomeGroup({ posts, walktime }) {
  const router = useRouter();
  const [isLargerThan700] = useMediaQuery("(min-width: 600px)");
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
  let house;
  let houseGroup;
  {
    house = posts.map(({ doc, id, name, price, images, favo }) => {
      return (
        <SwiperSlide key={id}>
          <Box
            my={"1em"}
            maxW="sm"
            rounded="md"
            boxShadow="md"
            overflow="hidden"
            borderRadius="lg"
            pos="relative"
            _hover={{
              border: "2px",
              borderColor: "teal.300",
              cursor: "pointer",
            }}
            mr="1em"
          >
            <Box
              onClick={() => {
                handleClick(id);
              }}
            >
              <Image
                src={images[0]}
                fallbackSrc="https://placehold.jp/f0f0f0/f0f0f0/150x150.png?text=%0A"
                alt="家の写真"
                borderRadius="lg"
                key={images[0]}
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
              <Box p="0.4em">
                <Box>
                  <Box
                    mt=""
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    display="block"
                  >
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
            </Box>
          </Box>
          {isLargerThan700 ? (
            <Box position="absolute" bottom="6" right="6">
              <HeartIcon favo={favo} doc={doc} size={"3em"} />
            </Box>
          ) : (
            <Box position="absolute" top="4" right="5">
              <HeartIcon favo={favo} doc={doc} size={"2.2em"} />
            </Box>
          )}
        </SwiperSlide>
      );
    });
    {
      isLargerThan700
        ? (houseGroup = (
            <Swiper navigation slidesPerView={3.2} freeMode={"true"}>
              {house}
            </Swiper>
          ))
        : (houseGroup = (
            <Swiper navigation slidesPerView={2.4} freeMode={"true"}>
              {house}
            </Swiper>
          ));
    }
  }

  return (
    <>
      <Box display="flex">
        <Image src="/images/walking.jpg" alt="アイコン" boxSize="24px"></Image>{" "}
        <Text>{walktime}分</Text>
      </Box>
      {house.length ? houseGroup : text}
    </>
  );
}
