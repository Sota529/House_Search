import Header from "../components/Header";
import Footer from "../components/Footer";
import Icon1 from "../images/Frame.svg";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Card, Paper } from "@material-ui/core";
import { React,useState } from "react";

const useStyles = makeStyles((theme) => ({
  App: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    position: "relative",
    paddingBottom: "70",
  },
  main: {
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  area: {
    maxwidth: "70vw",
    textAlign: "center",
  },
  sub_title: {
    fontSize: 14,
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
  time: {
    display: "inline-block",
    textAlign: "center",
    color: "red",
    margin: "auto",
    width: "50vw",
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  box_item: {
    display: "inline-block",
  },
}));

const univs = [
  { path: "/Tokyo1", Name: "東京大学1" },
  { path: "/Tokyo2", Name: "東京大学2" },
  { path: "/Tokyo3", Name: "東京大学3" },
  { path: "/Tokyo4", Name: "東京大学4" },
  { path: "/Tokyo5", Name: "東京大学5" },
  { path: "/Tokyo6", Name: "東京大学6" },
  { path: "/Tokyo7", Name: "東京大学7" },
  { path: "/Tokyo8", Name: "東京大学8" },
];
function Top() {
  const [univName,setName] = useState('')
  const classes = useStyles();
  const history = useHistory();
  const handleLink = (univ) => {
    
    history.push({
     
      pathname: univ.path,

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
        <Container className={classes.area}>
          <Paper>
            <h3 className={classes.sub_title}>大学名</h3>

            <Box className={classes.buttons}>
              {univs.map((univ) => (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.box_item}
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
        <Container className={classes.area}>
          <h3 className={classes.sub_title}>大学生に特化したサイト</h3>
          <ol className={classes.lists}>
            <li key="即入居物件のみを表示" className={classes.list}>
              即入居物件のみを表示
            </li>
            <li key="学校から、徒歩" className={classes.list}>
              学校から、徒歩
            </li>
          </ol>
          <Card maxwidth="20">
            <h2 className={classes.time}>5,10,15,20,25</h2>
          </Card>
          <p>分単位で探せる！</p>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Top;
