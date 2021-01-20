import "./styles/App.css";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Icon1 from "./images/Frame.svg";
const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 80,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
  },
  sub_title: {
    fontSize: 14,
  },
  buttons:{
    '& > *': {
      margin: theme.spacing(1),
      background:'#2979FF',
      color:'white',
    },
  }
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
          <h3 className={classes.sub_title}>地域別に探す</h3>
          <div className={classes.buttons}>
            <Button variant="contained" >
              千代田区
            </Button>
            <Button variant="contained" >
              中央区
            </Button>
            <Button variant="contained" >
              新宿区
            </Button>
            <Button variant="contained" >
              港区
            </Button>
          </div>
          <img src={Icon1} alt=""/>
        </Container>
      </div>
    </div>
  );
}

export default App;
