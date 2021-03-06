import React from "react";
import "./Redhead.css";

const Redhead = props => (
  <div className="card" onClick={()=>props.shuffleAndPoint(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <h1>{props.message}</h1>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
   
  </div>
);

export default Redhead;
