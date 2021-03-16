import { Text, Image, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
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
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };
  {
    posts.map(({ id, name, time, price, images }) => {
      return time === walktime
        ? house.push(
            <SwiperSlide key={id}>
              <Box
                my={4}
                maxW="sm"
                minW="100"
                rounded="md"
                boxShadow="md"
                overflow="hidden"
                borderRadius="lg"
                _hover={{ bg: "#ebedf0", cursor: "pointer" }}
                mr="5"
                onClick={() => {
                  handleClick(id);
                }}
              >
                <Image
                  src={images[0]}
                  alt="家の写真"
                  width="100%"
                  height="80%"
                  borderRadius="lg"
                  key={images[0]}
                />
                <Box p={2}>
                  <Box
                    mt=""
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {name}
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
            </SwiperSlide>
          )
        : null;
    });
  }
  const emptyText = (
    <Text py={2} align="center">
      お探しの物件は見つかりませんでした
    </Text>
  );
  return (
    <>
      <Box display="flex">
        <Image src="/images/walking.jpg" alt="アイコン" boxSize="24px"></Image>{" "}
        <Text>{walktime}分</Text>
      </Box>
      {isLargerThan1000 ? (
        <Swiper navigation slidesPerView={3.2} freeMode={"true"}>
          {house}
        </Swiper>
      ) : (
        <Swiper navigation slidesPerView={2.3} freeMode={"true"}>
          {house}
        </Swiper>
      )}
    </>
  );
}
