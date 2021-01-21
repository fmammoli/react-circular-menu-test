import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomMenu from "./CustomMenu";
import Pdf from "./Pdf";
import "./App.css";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <CustomMenu></CustomMenu>
          </Route>
          <Route exact path="/pdf">
            <Pdf></Pdf>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
