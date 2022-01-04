import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = ({ message, likes_count, id }) => {
  return <div className="card">I am a NEW card</div>;
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
