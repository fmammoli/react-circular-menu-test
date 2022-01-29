import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TextPage from "./TextPage";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <div className="fontFace">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book"></Route>
          <Route path="/flipbook"></Route>
          <Route path="/textpage" element={<TextPage />}></Route>
          <Route path="/drummondPage"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
