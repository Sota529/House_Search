import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "../images/Header.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.bar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
      <Link to ='/'>
          <img src={Icon} alt="アイコン" />
      </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
