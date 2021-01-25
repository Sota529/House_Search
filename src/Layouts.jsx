import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Top from "./pages/Top";
import Tokyo from "./pages/Tokyo";
const Layouts = () => {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Top />
          </Route>
          <Route path = '/Tokyo1' exact>
            <Tokyo/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Layouts;
