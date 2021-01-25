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
import Top from './Top.jsx'

const useStyles = makeStyles((theme) => ({
  Tokyo: {
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
}))

const Tokyo = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.Tokyo}>
     <Header/>
       <div className={classes.main}>
      <h1 className={classes.title}>Test</h1>
       </div>
     <Footer/>
    </div>
  )
}

export default Tokyo
