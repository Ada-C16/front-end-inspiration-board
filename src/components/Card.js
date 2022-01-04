import "./Card.css";
import { useState } from "react";

const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };

  const decreaseLikes = () => {
    setLikesCount(likesCount - 1);
  };

  return (
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
        <button
          className="delete-button"
          onClick={() => props.deleteCardItem(props.card)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
