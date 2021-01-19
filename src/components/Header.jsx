import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "../images/Header.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar:{
    justifyContent:'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="white">
        <Toolbar className={classes.bar}>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="black"
            aria-label="menu"
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
          <IconButton className={classes.img}>
            <img src={Icon} alt="アイコン" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
