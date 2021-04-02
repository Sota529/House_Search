import { Text, Image, Box, useMediaQuery, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeartIcon } from "../Icons/HeartIcon";
//swiperをimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Virtual } from "swiper";

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
  let house;
  let houseGroup;
  {
    house = posts.map(({ doc, id, name, price, images, favo }) => {
      return (
        <SwiperSlide key={id}>
          <Box
            my={4}
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
            mr="5"
          >
            <Box
              onClick={() => {
                handleClick(id);
              }}
            >
              <Image
                src={images[0]}
                alt="家の写真"
                width="100%"
                borderRadius="lg"
                key={images[0]}
              />
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
                {walktime}分
              </Box>
              <Box p={2}>
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
                      <Box ml={2}>
                        <Text fontSize={"0.8em"}>敷金:{price}</Text>
                        <Text fontSize={"0.8em"}>礼金:{price}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box position="absolute" bottom="6" right="6">
            <HeartIcon favo={favo} doc={doc} size={"15%"} />
          </Box>
        </SwiperSlide>
      );
    });
    houseGroup = (
      <Swiper navigation slidesPerView={3.2} freeMode={"true"}>
        {house}
      </Swiper>
    );
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
