import { React, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../images/Frame.svg";
import { makeStyles, CardMedia, IconButton, Card ,} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    
    margin: "8",
    cursor: "pointer",
  },
  favo: {
    color: "secondary",
  },
  price: {
    backgroundColor: "#00BFA6",
    fontWeight:'bold',
    lineHeight:1.5,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [favo, setFavo] = useState(true);
  const handleClick = () => {
    if (favo === false) {
      setFavo(true);
    } else {
      setFavo(false);
    }
  };
  return (
    <>
      <Card className={classes.root}>
        <IconButton
          aria-label="add to favorites"
          id="favo"
          onClick={() => handleClick()}
        >
          {favo ? (
            <FavoriteBorderIcon className={classes.favo} />
          ) : (
            <FavoriteIcon className={classes.favo} color={"secondary"} />
          )}
        </IconButton>
        <span className={classes.price}>8.7万円</span>
        <Link to="/Tokyo/confort">
          <CardMedia
            className={classes.media}
            component="img"
            image={Icon}
            title=""
          />
        </Link>
      </Card>
    </>
  );
};

export default Home;
