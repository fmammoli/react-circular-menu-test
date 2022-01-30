import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import TextPage from "./TextPage";
import FancyTextPage from "./FancyTextPage";

import "./App.css";

function App() {
  return (
    <div className="font_face">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="textpage" element={<FancyTextPage />}></Route>
        <Route path="drummondPage"></Route>
        <Route path="book"></Route>
        <Route path="flipbook"></Route>
      </Routes>
    </div>
  );
}

export default App;
