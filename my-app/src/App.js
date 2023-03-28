import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About";
//import SearchAppBar from "./Components/Appbar";
//import MenuAppBar from "./Components/Appbar";
//import DenseAppBar from "./Components/Appbar";
//import Buy from "./Components/Buy";
import {Conduct} from "./Components/Conduct";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Fruits from "./Components/Fruits";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> </Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="conduct" element={<Conduct/>}></Route>
            <Route path="buy" element={<Fruits></Fruits>}></Route>
        </Routes>
 <Home></Home> 
      </BrowserRouter>

    </div>
  );
}

export default App;
