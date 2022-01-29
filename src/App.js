import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./Home";
// import TextPage from "./TextPage";
import FancyTextPage from "./FancyTextPage";

import "./App.css";

function App() {
  return (
    <div className="fontFace">
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/book"></Route>
            <Route path="/flipbook"></Route>
            <Route path="/textpage" element={<FancyTextPage />}></Route>
            <Route path="/drummondPage"></Route>
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
