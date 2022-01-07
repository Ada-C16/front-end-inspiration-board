import { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";

const URL = "https://kinder-code.herokuapp.com";

const Card = (props) => {
  return (
    <div className="card-item">
      <p className="card-item-message">{props.card.message}</p>
      <ul className="card-options">
        <li>
          <p className="likes-count">💕{props.card.likes_count}</p>
        </li>
        <li>
          <p
            className="click-for-like"
            onClick={() => props.updateLikes(props.card.card_id)}
          >
            +1
          </p>
        </li>
        <li>
          <p
            className="click-to-delete"
            onClick={() => props.deleteCard(props.card.card_id)}
          >
            Delete
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
