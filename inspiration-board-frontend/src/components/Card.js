import React from "react";
import { useState } from "react";
import "./Card.css";

const Card = () => {
  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };
  const decreaseLikes = () => {
    setLikesCount(likesCount - 1);
  };

  return (
    <div>
      <h3>Temporary Header: This is a card</h3>
      <h2>
        <em>here is the card message</em>
      </h2>
      <button className="hearts-button" onClick={decreaseLikes}>
        {likesCount}💕
      </button>
      {/* // add onDblClick={decreaseLikes}? */}
      <button className="likes-button" onClick={increaseLikes}>
        +1
      </button>
      <button className="delete-button">Delete</button>
    </div>
  );
};

export default Card;
