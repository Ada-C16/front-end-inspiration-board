import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = (props) => {
  const likeCardClick = () => {
    props.likeCard(props.cardId);
  };

  const deleteCardClick = () => {
    props.deleteCard(props.cardId);
  };

  // returns:
  // Card with message
  // buttons: like and delete
  return (
    <body className="cardMessage">
      <p>{props.message}</p>
      <div>
        <button className="cardButtons" type="button" onClick={likeCardClick}>
          +1 or like
        </button>
        <button className="cardButtons" type="button" onClick={deleteCardClick}>
          delete
        </button>
      </div>
    </body>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  likeCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
