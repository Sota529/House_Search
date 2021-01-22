
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer:{
    backgroundColor:'yellow',
    height:80,
  },
  cop:{
    lineHeight:5,
    textAlign:'center'
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.cop}>@2020オヘヤサガシ</p>
    </footer>
  )
}

export default Footer
