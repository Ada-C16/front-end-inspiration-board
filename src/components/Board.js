import React, { useState, useEffect } from "react";
import NewCardForm from "./NewCardForm";
import PropTypes from 'prop-types';

const Board = (props) => {
  const boardTitle = props.singleBoard.title;
  const board = props.singleBoard;
  const onSelectedBoard = props.onSelectedBoard;
  // const [cardsData, setCardsData] = useState([]);

  // const addNewCard = (newCard) => {
  //   const newCardList = [...cardsData];

  //   const nextCardId = Math.max(...newCardList.map((card) => card.card_id)) + 1;

  //   newCardList.push({
  //     card_id: nextCardId,
  //     message: newCard.messageData,
  //   });

  //   setCardsData(newCardList);
  // };

  return (
    <div onClick={() => onSelectedBoard(board)}>
      <h3>{boardTitle}</h3>
      {/* <main>
        <NewCardForm addCardCallback={addNewCard} />
      </main> */}
    </div>
  );
};

Board.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes_count: PropTypes.number.isRequired,
        likeCard: PropTypes.func.isRequired,
        deleteCard: PropTypes.func.isRequired,
      })
    )
  ),
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectedBoard: PropTypes.func.isRequired,
};

export default Board;
