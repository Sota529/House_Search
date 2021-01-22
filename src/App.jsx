import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MyButon from "./components/MyButon";
import Footer from "./components/Footer";
import Icon1 from "./images/Frame.svg";
import { Card, Paper } from "@material-ui/core";

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
    maxWidth: "70vw",
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
    textAlign: "center",
    color: "red",
    margin:'auto',
    width:'50vw'
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <CssBaseline />
      <Header />

      <div className={classes.main}>
        <div>
          <h2 className={classes.title}>物件を探す</h2>
        </div>
        <Container className={classes.area}>
          <Paper>
            <h3 className={classes.sub_title}>大学名</h3>
            <MyButon />
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
          <Card maxWidth='20'>
            <h2 className={classes.time}>5,10,15,20,25</h2>
          </Card>
          <p>分単位で探せる！</p>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
