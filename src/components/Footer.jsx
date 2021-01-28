import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#00BFA6",
    height: 80,
    textAlign: "center",
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   position: "absolute",
    //   bottom: 0,
    // },
  },
  cop: {
    paddingTop: 20,
    textAlign: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.cop}>@2021オヘヤサガシ</p>
    </footer>
  );
};

export default Footer;
