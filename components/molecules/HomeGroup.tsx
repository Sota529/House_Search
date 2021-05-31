import { Text, Image, Box, Flex } from "@chakra-ui/react";
//swiperをimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Virtual } from "swiper";

//swiper cssをimport
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import { VFC } from "react";
import { HomeItem } from "./HomeItem";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Virtual]);

type HomeGroupType = {
  posts: [];
  walktime: string;
};

export const HomeGroup: VFC<HomeGroupType> = ({ posts, walktime }) => {
  return (
    <>
      <Flex>
        <Image src="/images/walking.jpg" alt="アイコン" boxSize="24px"></Image>
        <Text>{walktime}分</Text>
      </Flex>
      <Swiper
        slidesPerView={2.2}
        breakpoints={{ 720: { slidesPerView: 3.2 } }}
        freeMode={true}
        cssMode={true}
      >
        {posts.length ? (
          posts.map((post: any) => {
            return (
              <SwiperSlide key={post.id}>
                <Box my="1em">
                  <HomeItem {...post} time={walktime} />
                </Box>
              </SwiperSlide>
            );
          })
        ) : (
          <Text my="1.5em" align="center">
            <Box
              fontWeight="semibold"
              display="inline"
              as="mark"
            >{`${walktime}分`}</Box>
            の物件は見つかりませんでした
          </Text>
        )}
      </Swiper>
    </>
  );
};
