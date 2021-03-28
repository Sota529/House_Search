import { Text, Image, Box } from "@chakra-ui/react";
import { DataFetch } from "../lib/post";
import { useState } from "react";
import { useRouter } from "next/router";
import { getData } from "../lib/post";
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
  const [ishome, setIshome] = useState(true);
  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };
  const text = "sorry";
  return (
    <>
      <Box display="flex">
        <Image src="/images/walking.jpg" alt="アイコン" boxSize="24px"></Image>{" "}
        <Text>{walktime}分</Text>
      </Box>
      {posts.map(({ id, name, time, price, images }) => {
        if (time === walktime) {
          return (
            <Swiper navigation slidesPerView={3.2} freeMode={"true"} key={id}>
              <SwiperSlide>
                <Box
                  my={4}
                  maxW="sm"
                  minW="100"
                  rounded="md"
                  boxShadow="md"
                  borderRadius="lg"
                  _hover={{ bg: "#ebedf0", cursor: "pointer" }}
                  mr="5"
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  <Image
                    src={images[0]}
                    alt=""
                    width="100%"
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
            </Swiper>
          );
        }
      })}
    </>
  );
}
