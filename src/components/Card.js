import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = ({ message, likes_count, card_id, setCards }) => {
  return (
    <div className="card">
      {message}
      <h6>{likes_count}😻</h6>
      <button>+1</button>
      <button>Delete</button>
    </div>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  card_id: PropTypes.number.isRequired,
  setCards: PropTypes.func.isRequired,
};

export default Card;
