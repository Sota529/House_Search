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
      {posts.map(({ id, name, time, price }) => {
        if (time === walktime) {
          return (
            <Swiper
              navigation
              slidesPerView={3.2}
              freeMode={"true"}
              key={id}
            >
              <SwiperSlide>
                <Box
                my={4}
                  maxW="sm"
                  rounded="md"
                  boxShadow="md"
                  borderRadius="sm"
                  _hover={{ bg: "#ebedf0", cursor: "pointer" }}
                  mr="5"
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  <Image src="/images/Frame.svg" alt="" width="100%" />
                  <Text>{name}</Text>
                  <Text>{price}円</Text>
                </Box>
              </SwiperSlide>
            </Swiper>
          );
        }
      })}
    </>
  );
}
