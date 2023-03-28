import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import {Conduct} from "./Components/Conduct";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Fruits from "./Components/Fruits";

function Appbar() {
  return (
    <div>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> </Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="conduct" element={<Conduct/>}></Route>
            <Route path="buy" element={<Fruits></Fruits>}></Route>
        </Routes>
        
      </BrowserRouter>

    </div>
  )
};

export default Appbar;