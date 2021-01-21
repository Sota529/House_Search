import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const univs = [
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  "東京大学",
  
  
];
const useStyles = makeStyles((theme) => ({
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },
  },
  box_item: {
    display:'inline-block',
  },
}));
const MyButon = () => {
  const classes = useStyles();

  return (
    <>
           

      <Box className={classes.buttons}>
        {univs.map((univ) => (
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.box_item}
          >
            {univ}
          </Button>
        ))}
      </Box>

    </>
  );
};

export default MyButon;
