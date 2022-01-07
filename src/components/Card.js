import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = ({ message, likes_count, card_id, addLike, deleteCard }) => {
  return (
    <div className="card">
      {message}
      <div>
        <p className="likes">{likes_count}😻</p>
        <div className="buttons">
          <button onClick={() => addLike(card_id)}>+😻</button>
          <button onClick={() => deleteCard(card_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  card_id: PropTypes.number.isRequired,
  addLike: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
