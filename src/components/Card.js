import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="header">
      <img className="image" src={props.src} />
      <h2 className="name">{props.name}</h2>
      <p className="job">{props.job} </p>
      <button className="btn">Go somewhere</button>
    </div>
  );
}

export default Card;
