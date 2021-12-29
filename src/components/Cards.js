import React from "react";

const Cards = (props) => {

  return (
    <div className = "card-view">
      <div>{props.message}</div>
      <div className="card-buttons" id={props.id}>
        <p>{props.likes_count}</p>
        <button className="like" onClick={props.likeCard()}>+1</button>
        <button className="delete" onClick={props.deleteCard()}>delete</button>
      </div>
    </div>
  );
};

export default Cards;
