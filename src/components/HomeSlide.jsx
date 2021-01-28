import React from "react";
import Home from './Home'
import {
  Container,
  makeStyles,
} from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
const useStyles = makeStyles((theme) => ({
  
  sub: {
    paddingLeft: 16,
    textDecoration:'underline',

  },
  Swiper: {
    
    
    breakpoints: {
      500: {
        slidesPerView: 3,
      },
    },
  },
  paper: {
    
  },
}));
const HomeSlide = (props) => {
  const classes = useStyles();
  return (
    <Container >
      <h3 className={classes.sub}>{props.title}</h3>
      <Swiper
        spaceBetween={5}
        slidesPerView={3.2}
        freeMode={"true"}
        className={classes.Swiper}
      >
        <SwiperSlide className={classes.paper}>
          <Home />
        </SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
        <SwiperSlide className={classes.paper}><Home/></SwiperSlide>
      </Swiper>
    </Container>
  );
};



export default HomeSlide;
