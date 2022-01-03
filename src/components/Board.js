import React, { useState, useEffect } from "react";
import NewCardForm from "./NewCardForm";

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

export default Board;
