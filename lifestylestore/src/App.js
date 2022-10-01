import Navbar from "./components/Navbar";
import Blackstrip from "./components/BlackStrip";
import YellowStrip from "./components/YellowStrip";
import CommonSlider from "./components/Slider";
import React from "react";
import Women from "./pages/Women";
import Shoesandbags from "./pages/Sheos&bags";
import Beauty from "./pages/Beauty";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Blackstrip />
      <Navbar />
      <YellowStrip />
      <CommonSlider />

      <div>
        <Link to="/"></Link>
        <Link to="/women"></Link>
        <Link to="/men"></Link>
        <Link to="/kids"></Link>
        <Link to="/shoesandbags"></Link>
        <Link to="/beauty"></Link>
        <Routes>
          <Route element={<Women />} path="/"></Route>
          <Route element={<Women />} path="/women"></Route>

          <Route element={<Men />} path="/men"></Route>
          <Route element={<Kids />} path="/kids"></Route>
          <Route element={<Shoesandbags />} path="/shoesandbags"></Route>
          <Route element={<Beauty />} path="/beauty"></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
