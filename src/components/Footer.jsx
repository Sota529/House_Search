
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer:{
    backgroundColor:'yellow',
    height:80,
    position: 'absolute',/* ←絶対位置 */
    bottom: 0,
    textAlign:'center',
    width:'100%',
  },
  cop:{
    
    paddingTop:20,
    textAlign:'center'
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.cop}>@2021オヘヤサガシ</p>
    </footer>
  )
}

export default Footer
