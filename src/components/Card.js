import React from "react";
import "./Card.css";

// This is the actual card. Every time a message is submitted via CardForm, this will be generated.
const Card = (props) => {
  return (
    <div className="card">
      <section className="card-text">{props.card.message}</section>
      <section id="options">
        <button
          className="card-button btn btn-primary"
          id="like"
          onClick={() => props.increaseLikes(props.card)}
        >
          +1
        </button>
        <p className="card-likes">{props.card.likes_count} ⭐️</p>
        <button
          className="card-button btn btn-secondary"
          id="delete"
          onClick={() => props.deleteCard(props.card)}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default Card;
