import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = ({ message, likes_count, id, addLike }) => {
  return (
    <div className="card">
      I am a NEW card
      <h6>{likes_count}😻</h6>
      <button onClick={addLike}>+1</button>
      <button>Delete</button>
    </div>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
