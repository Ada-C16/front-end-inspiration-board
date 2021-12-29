import React from "react";

const Cards = (props) => {

  return (
    <div>
      <div>{props.message}message</div>
      <div className="card-buttons" id={props.id}>
        <p>#{props.likesCount}</p>
        <button className="like" onClick={props.likeCard()}>like +1</button>
        <button className="delete" onClick={props.deleteCard()}>delete card</button>
      </div>
    </div>
  );
};

export default Cards;
