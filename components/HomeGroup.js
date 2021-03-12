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
  const datas = DataFetch();
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
      {datas.map(({ id, name, time, price }) => {
        if (time === walktime) {
          return (
            <Swiper
              navigation
              scrollbar={{ draggable: true }}
              slidesPerView={3.2}
              freeMode={"true"}
              key={id}
            >
              <SwiperSlide>
                <Box
                  boxShadow="lg"
                  _hover={{ bg: "#ebedf0", cursor: "pointer" }}
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
export async function getServerSideProps() {
  console.log("datagetch");
  const posts = await (await getData()).result;
  // const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
