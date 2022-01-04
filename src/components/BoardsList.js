import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "./CardsList";
import Card from "./Card";
import Board from "./Board";

const BoardsList = (props) => {
  const boards = props.boards;
  const onSelectedBoard = props.onSelectedBoard;
  // console.log(boards);
  return (
    <div className="boards-list text-center">
      <h2>Select a board</h2>
      {boards.map((board) => (
        <Board singleBoard={board} onSelectedBoard={onSelectedBoard} />
      ))}
    </div>
  );
};

// const Board = () => {
//   const [cards, showCards] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000")
//       .then((response) => {
//         showCards(response.data.cards);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="board container p-1">
//       <CardsList myCards={cards} />
//     </div>
//   );
// };

export default BoardsList;
