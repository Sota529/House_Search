import {React,useLocation} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import HomeSlide from '../components/HomeSlide';

const useStyles = makeStyles((theme) => ({
 
  main: {
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
}))

const Tokyo = () => {
  const classes = useStyles()
  return (
    <div className={classes.Tokyo}>
     <Header/>
       <div className={classes.main}>
      <h1 className={classes.title}>東京大学１</h1>
      
      <HomeSlide/>
       </div>
     <Footer/>
    </div>
  )
}

export default Tokyo
