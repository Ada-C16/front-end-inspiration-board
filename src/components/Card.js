import React from "react";
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <p>Insert message here</p>
      <div className="reactions">
        <span>♥️</span>
        <span>+1</span>
        <span>delete</span>
      </div>
    </div> 
  )
}


export default Card;