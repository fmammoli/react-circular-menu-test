import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomMenu from "./CustomMenu";

import TextPage from "./TextPage";

import "./App.css";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/book"></Route>
          <Route exact path="/flipbook"></Route>
          <Route exact path="/textpage">
            <TextPage></TextPage>
          </Route>
          <Route path="/">
            <CustomMenu></CustomMenu>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
