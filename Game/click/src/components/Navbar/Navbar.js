import React,{Component} from "react";
import './Navbar.css';



class Navbar extends Component {
render(){
  return (
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
      <div className="nav-link" >{this.props.message}</div>
    </li>
    <li className="nav-item">
      <div className="nav-link" >Your Score {this.props.score}</div>
    </li>
   
  </ul>
</div>
</nav>
</div>
  )
}
};


export default Navbar;