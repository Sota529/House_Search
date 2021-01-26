import React from "react";
import { Box, Button, Container, makeStyles, Paper } from "@material-ui/core";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    color: "black",
    width: 130,
    height: 130,
  },
  slides:{
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  }
}));
const HomeSlide = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h3>おすすめ物件</h3>

        <Swiper spaceBetween={5} slidesPerView={6} >
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
          <SwiperSlide className={classes.Slides}>
            <Paper className={classes.paper}>Slide 1</Paper>
          </SwiperSlide>
        </Swiper>
    </Container>
  );
};

export default HomeSlide;
