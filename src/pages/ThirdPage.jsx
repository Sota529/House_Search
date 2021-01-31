import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import { Card, CardMedia, Container, makeStyles } from "@material-ui/core";

// swiperからimport
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import GridCard from "../components/GridCard";

//swiperコンポーネントをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    textDecoration: "underline ",
    textDecorationColor: "#00BFA6",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    textAlign: "center",
    marginBottom: 16,
  },
  sub: {
    textAlign: "center",
    textDecoration: "underline ",
    textDecorationColor: "#00BFA6",
  },
}));
const ThirdPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.root}>
        <h1 className={classes.title}>コンフォート</h1>
        <Container maxWidth={"sm"}>
          <Swiper
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Card>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image=""
                  title=""
                />
                Slide 1
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image=""
                  title=""
                />
                Slide 1
              </Card>
            </SwiperSlide>
          </Swiper>
        </Container>
        <Container maxWidth={"sm"}>
          <h2 className={classes.sub}>物件情報</h2>
          <Card className={classes.card}>
            <p>住所:東京都文京区５丁目文京町３３３</p>
          </Card>
        </Container>
        <Container>
          <h2 className={classes.sub}>周辺情報</h2>
          <GridCard />
        </Container>
        <Footer/>
      </div>
    </>
  );
};

export default ThirdPage;
