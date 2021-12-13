import React from "react";
import { Link } from 'react-router-dom'



function Nav(){
  return(
    <div className="nav-div">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/services" className="nav-link">Services</Link>
    </div>
  )
}

export default Nav