import {React} from 'react'
import { useHistory } from "react-router-dom";

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
  footer:{
    marginTop:8,
  },
}))

const Tokyo = (props) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <>
     <Header/>
       <div className={classes.main}>
      <h1 className={classes.title}>{history.location.state.Name}</h1>
      
      <HomeSlide title='おすすめ物件'/>
      <HomeSlide title='徒歩５分'/>
      <HomeSlide title='徒歩10分'/>
      <HomeSlide title='徒歩15分'/>
      <HomeSlide title='徒歩20分'/>
       </div>
       <Footer className={classes.footer}/>
    </>
  )
}

export default Tokyo
