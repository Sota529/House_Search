import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Top from "./pages/TopPage";
import Second from "./pages/SecondPage";
import Third from "./pages/ThirdPage";
const Routers = () => {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Top />
          </Route>
          <Route path = '/Tokyo' exact>
            <Second/>
          </Route>
          <Route path = '/Tokyo/confort' exact>
           <Third/> 
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routers;
