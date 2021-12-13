import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './static/Home'


function App() {
  return (
 <BrowserRouter>
 <Routes>
   <Route exact path="/" element={Home}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
