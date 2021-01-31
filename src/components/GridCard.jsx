import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "0 auto",
  },
  item: {
    textAlign: "center",
    margin: "0 auto",
  },
  grid: {
    padding: theme.spacing(1),
  },
  paper: {
    height: 300,
    width: 300,
    margin: "0 auto",
  },
}));

export default function GridCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item className={classes.item}>
        <Grid container>
          {[0, 1, 2].map((value) => (
            <Grid className={classes.grid} key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
