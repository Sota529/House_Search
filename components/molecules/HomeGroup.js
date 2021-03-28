import { Text, Image, Box, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeartIcon } from "../atoms/icon";
//swiperをimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Virtual } from "swiper";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Virtual]);

export default function HomeGroup({ posts, walktime }) {
  const router = useRouter();
  let house = [];
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };
  {
    posts.map(({ doc, id, name, time, price, images, favo }) => {
      return time === walktime ? (
        house.push(
          <SwiperSlide key={id}>
            <Box
              my={4}
              maxW="sm"
              rounded="md"
              boxShadow="md"
              overflow="hidden"
              borderRadius="lg"
              pos="relative"
              _hover={{ bg: "#ebedf0", cursor: "pointer" }}
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
                  {time}分
                </Box>
                <Box p={2}>
                  <Box
                    mt=""
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Box top="0">{name}</Box>
                  </Box>
                  <Box
                    as="span"
                    borderRadius="md"
                    fontWeight="semibold"
                    bg="green.400"
                    color="white"
                    isTruncated
                    px={2}
                    h={8}
                  >
                    ¥{price}
                  </Box>
                </Box>
              </Box>
              <HeartIcon favo={favo} doc={doc} size={"15%"} />
            </Box>
          </SwiperSlide>
        )
      ) : (
        <>
          <Text py={2} align="center">
            お探しの物件は見つかりませんでした
          </Text>
        </>
      );
    });
  }

  return (
    <>
      <Box display="flex">
        <Image src="/images/walking.jpg" alt="アイコン" boxSize="24px"></Image>{" "}
        <Text>{walktime}分</Text>
      </Box>
      {isLargerThan700 ? (
        <Swiper navigation slidesPerView={3.2} freeMode={"true"}>
          {house}
        </Swiper>
      ) : (
        <Swiper  slidesPerView={2.3} freeMode={"true"}>
          {house}
        </Swiper>
      )}
    </>
  );
}
