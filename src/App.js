import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/static/Home'
import Nav from './components/common/Nav'
import About from "./components/static/About"
import Services from "./components/static/Services"



function App() {
  return (
 <BrowserRouter>
 <Nav/>
 <Routes>
   <Route exact path="/" element={<Home />}/>
   <Route path="/about" element={<About />}/>
   <Route path="/services" element={<Services/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
