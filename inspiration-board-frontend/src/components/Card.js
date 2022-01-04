import React from "react";
import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);

  };
  const decreaseLikes = () => {
    setLikesCount(likesCount - 1);
  };

  return (
    // <header>
    //   <h3>Temporary Header: This is a card</h3>
    // </header>
    <div className="card-body">
      <h4 className="card-message">
        <em>{props.message}</em>
      </h4>
      <div className="buttons-container">
        <button className="hearts-button" onClick={decreaseLikes}>
          {likesCount}💕
        </button>
        <button className="likes-button" onClick={increaseLikes}>
          +1
        </button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Card;
