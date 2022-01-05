import React from "react";
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <p>Insert message here</p>
      <div className="reactions">
        <span>♥️</span>
        <a href="">+1</a>
        <a href="">delete</a>
      </div>
    </div> 
  )
}


export default Card;