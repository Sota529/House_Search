import React from "react";
import {
  Button,
  makeStyles,
  CardMedia,
  IconButton,
  Card,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "8",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
<CardMedia className={classes.media} image="" title="" />
      </Card>
    </>
  );
};

export default Home;
