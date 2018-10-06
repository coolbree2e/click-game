import React from "react";
import './Navbar.css';


const Navbar = props =>(

    <div className = "nav" >

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item ">
      <div className="nav-link" >Clicky Game <span className="sr-only">(current)</span></div>
    </li>
    <li className="nav-item">
      <div className="nav-link" >High Score</div>
    </li>
    <li className="nav-item">
      <div className="nav-link" >Your Score || </div>
    </li>
   
  </ul>
</div>
</nav>
</div>
);


export default Navbar;