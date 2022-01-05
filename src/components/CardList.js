import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

// like route --->  /cards/<card_id>/like
const URL = "https://knee-jerk-reaction-inspiration.herokuapp.com";

//   const boardOptions = boardData.map((board) => {
//   return (
//     <li key={board.board_id}>
//       <button
//         id={board.board_id}
//         onClick={() => handleChange(board.board_id)}
//       >
//         {board.title}
//       </button>
//     </li>
//   );
// });

const CardList = ({ cards, setCards }) => {
  const newCards = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        likes_count={card.likes_count}
        message={card.message}
        setCards={setCards}
      />
    );
  });
  return <div className="card-container">{newCards}</div>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number,
      board_id: PropTypes.number,
      card_id: PropTypes.number,
    })
  ).isRequired,
  setCards: PropTypes.func.isRequired,
};

export default CardList;
