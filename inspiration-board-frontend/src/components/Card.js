import React from "react";
import { useState } from "react";

const Card = () => {
  const [likesCount, setLikesCount] = useState(0);
  return (
    <div>
      <h3>Temporary Header: This is a card</h3>
      <h2>
        <em>here is the card message</em>
      </h2>
      <p>{likesCount}💕</p>
      <button>+1</button>
      <button>Delete</button>
    </div>
  );
};

export default Card;
