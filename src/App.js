import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomMenu from "./CustomMenu";
import Book from "./Book";
import FlipBook from "./FlipBook";
import TextPage from "./TextPage";
import "./App.css";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/book">
            <Book></Book>
          </Route>
          <Route exact path="/flipbook">
            <FlipBook></FlipBook>
          </Route>
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
