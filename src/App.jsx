import "./styles/App.css";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MyButon from "./components/MyButon";

import Icon1 from "./images/Frame.svg";
const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  sub_title: {
    fontSize: 14,
    textAlign: "center",
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
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <div className={classes.main}>
        <div>
          <h2 className={classes.title}>物件を探す</h2>
        </div>
        <Container maxWidth="md" className={classes.area}>
          <h3 className={classes.sub_title}>大学名</h3>
          <MyButon />
          <img className={classes.Icon} src={Icon1} alt="" />
        </Container>
      </div>
    </div>
  );
}

export default App;
