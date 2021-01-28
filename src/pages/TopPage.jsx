import Header from "../components/Header";
import Footer from "../components/Footer";
import Icon1 from "../images/Frame.svg";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { React, useState } from "react";

const useStyles = makeStyles((theme) => ({
  
  main: {
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    textDecoration:'underline',
  },
  area: {
  },
  sub_title: {
    fontSize: 14,
    textAlign: "center",
    paddingTop:8,
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "center",

  },
  Icon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  lists: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  list: {
    paddingBottom: 8,
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  box_item: {
    
  },
  time: {
    textAlign: "center",
    color: "red",
    fontWeight:'bold',
  },
  sub_time:{
    textAlign:'center',
    paddingBottom:8,
  },
}));

const univs = [
  { path: "/Tokyo1", Name: "東京大学1" },
  { path: "/Tokyo2", Name: "早稲田大学" },
  { path: "/Tokyo3", Name: "東京理科大学" },
  { path: "/Tokyo4", Name: "常葉大学" },
  { path: "/Tokyo5", Name: "慶応大学" },
  { path: "/Tokyo6", Name: "東京大学6" },
  { path: "/Tokyo7", Name: "東京大学7" },
  { path: "/Tokyo8", Name: "東京大学8" },
  { path: "/Tokyo9", Name: "東京大学9" },
  { path: "/Tokyo0", Name: "東京大学10" },
];
function Top() {
  const classes = useStyles();
  const history = useHistory();
  const handleLink = (univ) => {
    history.push({
      pathname: univ.path,
      state:{Name:univ.Name},
    });
  };
  return (
    <div className={classes.Top}>
      <CssBaseline />
      <Header />

      <div className={classes.main}>
        <div>
          <h2 className={classes.title}>物件を探す</h2>
        </div>
        <Container className={classes.area} maxWidth="md">
          <Paper>
            <h3 className={classes.sub_title}>大学名</h3>

            <Box className={classes.buttons} px={2}>
              {univs.map((univ) => (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  key={univ.Name}
                  onClick={() => handleLink(univ)}
                >
                  {univ.Name}
                </Button>
              ))}
            </Box>
              
            <img className={classes.Icon} src={Icon1} alt="アイコン" />
          </Paper>
        </Container>
        <div>
          <h2 className={classes.title}>特徴</h2>
        </div>
        <Container className={classes.area} maxWidth="md">
          <Box   >
            <Paper>
          <h3 className={classes.sub_title}>大学生に特化したサイト</h3>
          <ol className={classes.lists}>
            <li key="即入居物件のみを表示" className={classes.list}>
              即入居物件のみを表示
            </li>
            <li key="学校から、徒歩" className={classes.list}>
              学校から、徒歩
            </li>
          </ol>
         
              <p className={classes.time}>5,10,15,20,25</p>
          <p className={classes.sub_time}>分単位で探せる！</p>
            </Paper>
          </Box>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Top;
