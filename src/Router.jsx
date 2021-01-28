import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Top from "./pages/TopPage";
import Second from "./pages/SecondPage";
const Routers = () => {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Top />
          </Route>
          <Route path = '/Tokyo1' exact>
            <Second/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routers;
